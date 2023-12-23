import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlowUIComponent } from '../../p5-flow-ui/p5-flow-ui.component';
import { p5BootstrapService } from './p5-bootstrap.service';

describe('P5BootstrapService', () => {
  let p5Bootstrap: p5BootstrapService;
  let fixture: ComponentFixture<FlowUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowUIComponent],
      providers: [p5BootstrapService],
    });

    fixture = TestBed.createComponent(FlowUIComponent);
    p5Bootstrap = TestBed.inject(p5BootstrapService);
  });

  it('should expect the basic p5 script to be defined', () => {
    // Act: Access the p5 object from the component
    const componentInstance: FlowUIComponent = fixture.componentInstance;
    const p5Object: any = componentInstance['p5']; // Adjust the property name based on your actual setup

    // Assert: Check for the existence of functions added by extension scripts
    expect(p5Object).toBeDefined();
  });

  it('should load extension scripts and add functions to p5 object', () => {
    // Arrange: Load extension scripts
    p5Bootstrap.executeExtensionScripts();

    // Act: Access the p5 object from the component
    const componentInstance: FlowUIComponent = fixture.componentInstance;
    const p5Object: any = componentInstance['p5']; // Adjust the property name based on your actual setup

    // Assert: Check for the existence of functions added by extension scripts
    expect(p5Object).toBeDefined();
    expect(typeof p5Object.uxRect).toBe('function');
    expect(typeof p5Object.uxCircle).toBe('function');
    // Add more expectations based on the functions added by your extension scripts
  });
});
