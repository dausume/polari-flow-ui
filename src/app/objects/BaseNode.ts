import { NodeUIComponent } from "./NodeUIComponent";
import { NodeUIGrid } from "./NodeUIGrid";

export class BaseNode {
    private uiComponents: NodeUIComponent[] = [];
    private internalGrid: NodeUIGrid = { rows: 1, columns: 1 };
  
    constructor(public identifier: string) {}
  
    addUIComponent(uiComponent: NodeUIComponent): void {
      this.uiComponents.push(uiComponent);
      this.expandGrid(); // Adjust the internal grid when a new component is added
    }

    // Emit an event when an object changes
    private emitObjectChanged(object: BaseNode): void {
        //this.objectChanged.next(object);
        // You might want to update the UI or perform other actions when an object is changed
    }
  
    private expandGrid(): void {
      // Logic to adjust the internal grid based on added UI components
      // For example, you might increase the number of rows or columns
    }

    //Used in drag and drop functionality
    dragNode(): void {

    }

    //Used in drag and drop functionality
    dropNode(): void {

    }

    //Emits to all other objects that this object was moved and sends the object to them so they can respond if an intersection event 
    //occurred.
    detectOverlap(): boolean {
        return false;
    }

    //Makes an attempt to move this object away from the objects it overlapped with to see if it can find a good location.
    //If the automated placement fails, it will give a warning and return to it's original location before being moved.
    resolveOverlap(): void {

    }
  }
  