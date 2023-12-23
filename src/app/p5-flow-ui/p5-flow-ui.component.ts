import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CanvasConfigService } from '../Services/CanvasConfigService/canvas-config.service';
import * as p5 from 'p5';


@Component({
  selector: 'p5-flow-ui',
  templateUrl: './p5-flow-ui.component.html',
  styleUrls: ['./p5-flow-ui.component.css']
})
export class FlowUIComponent implements OnInit, AfterViewInit {
  //Defined via the import above and made private here.
  declare p5: any;
  private canvasContainer:any;
  private flowCanvas:any;
  public width: number | null = 400;
  public height: number | null = 400;
  public color: {'R':number,'G':number,'B':number} | null = {'R':0,'G':0,'B':0};
  public testObject: any;

  constructor(
    private el: ElementRef,
    public canvasConfigService: CanvasConfigService
    ) { 
      console.log(canvasConfigService);
      this.width = this.canvasConfigService.canvasWidth;
      this.height = this.canvasConfigService.canvasHeight;
      this.color = this.canvasConfigService.canvasColor;
    }

  ngAfterViewInit() {
    this.createCanvas();
    this.testingCode();
  }

  //Code used to implement rudimentary testing for different functionality
  testingCode()
  {

  }

  createCanvas()
  {
    const containerId : string = this.canvasConfigService.canvasIdentifier;
    this.canvasContainer = document.getElementById(containerId);
    console.log("Container");
    console.log(this.canvasContainer);
    this.width = this.canvasConfigService.canvasWidth;
    this.height = this.canvasConfigService.canvasHeight;
    if (!this.canvasContainer) {
      console.error(`Canvas container with ID '${containerId}' not found.`);
    }
    //console.log('p5 log')
    //console.log(p5);
    this.p5 = new p5(
      (p: any) => {
        /*
        console.log("this in p5");
        console.log(this);
        console.log("canvasConfigService in p5");
        console.log(this.canvasConfigService);
        */
        p.setup = () => {
          /*
          console.log("Container in setup");
          console.log(this.canvasConfigService.canvasWidth);
          console.log(this.canvasConfigService.getCanvasWidth());
          */
          this.flowCanvas = p.createCanvas(
            this.canvasConfigService.getCanvasWidth(),
            this.canvasConfigService.getCanvasHeight()
          );
          p.stroke(255);
          //var testRec = new p.uxRect(100,100,100,100,[])
          //this.testObject = 
          //console.log("finished setup")
        }
    
        p.draw = () => {
          p.background(this.canvasConfigService.getCanvasColor()?.R,this.canvasConfigService.getCanvasColor()?.G,this.canvasConfigService.getCanvasColor()?.B);
          p.ellipse(50,50,80,80);
          console.log('debug p5 extensions')
          // Assuming p5 is already imported or available
          // Check if p5 has been extended with uxSquare method
          /*if (typeof p5.prototype.uxSquare === 'function') {
            console.log('p5 has been extended with uxSquare method!');
          } else {
            console.log('p5 has not been extended with uxSquare method.');
          }*/
        };
      } 
    ,
    this.canvasContainer);
    this.p5.setup();
    console.log("p5 initialization complete")
  }

  ngOnInit(): void {
  }

}
