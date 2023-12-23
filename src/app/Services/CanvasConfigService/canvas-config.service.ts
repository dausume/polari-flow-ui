import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CanvasConfigService {
  private loadConfigCalled = false;
  public canvasIdentifier: string = 'sample-id';
  public canvasColor: {'R':number,'G':number,'B':number} | null = null;
  public canvasWidth: number | null = null;
  public canvasHeight: number | null = null;

  setCanvasColor(newColor : {'R':number,'G':number,'B':number})
  {
    if( (newColor.R >= 0 && newColor.R <= 255) &&
        (newColor.G >= 0 && newColor.G <= 255) &&
        (newColor.B >= 0 && newColor.B <= 255))
    {
      this.canvasColor = newColor;
    }
    else{
      console.log("Entered invalid color object, must be in format {'R':number, 'G':number, 'B':number} and all numbers must be between 0 and 255.");
    }
  }

  getCanvasColor(): {'R':number,'G':number,'B':number} | null {
    return this.canvasColor || {'R':173,'G':216,'B':230}; // Default color if not set - light blue
  }

  getCanvasIdentifier(): string {
    return this.canvasIdentifier || 'default-canvas-element-id'; // Default color if not set - light blue
  }

  getCanvasHeight(): number {
    return this.canvasHeight || 680; // Default height if not set - 400 Pixels
  }

  getCanvasWidth(): number {
    return this.canvasWidth || 1200; // Default width if not set - 400 Pixels
  }

  //This sets the initial conditions for your canvas.
  loadInitialConfig(canvasWidth:number, canvasHeight:number, canvasColor: {'R':number,'G':number,'B':number},  canvasIdentifier:string): void {
    this.loadConfigCalled = true;
    this.canvasIdentifier = canvasIdentifier;
    this.canvasColor = canvasColor;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }
}
