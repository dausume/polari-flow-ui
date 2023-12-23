import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SquareNode } from '../../objects/SquareNode';
import { NodeUIComponent } from 'src/app/objects/NodeUIComponent';
import { NodeUIGrid } from 'src/app/objects/NodeUIGrid';
import { NodeService } from '../node-service/node.service'

@Injectable({
  providedIn: 'root',
})
export class NodeDataService {
  private objectCache: Map<string , SquareNode | NodeUIComponent | NodeUIGrid> = new Map();
  // <id of parent object, <type of child object, id of child object> >
  private relationCache: Map<string, Map<string, string>> = new Map();

  private objectChanged = new Subject< SquareNode >();

  constructor() {
    // Subscribe to events emitted by other services
    this.subscribeToOtherServiceEvents();
  }

  // Subscribe to events emitted by other services
  private subscribeToOtherServiceEvents(): void {
    // Example: Subscribe to events emitted by other services
    // this.someOtherService.someEventSubject.subscribe((data) => 
    //if(this.checkIfObjectExists)
    //{
    //    this.registerObject(data);
    //}
    //else{
    //     this.updateObject(data);
    //}
    //
  }

  //Check if the id of the object already exists in the objectCache
  private checkIfObjectExists(): void {

  }

  // Other methods for creating and manipulating objects

  // Register an object when it is sent from one of the other services
  private registerObject(object: any): void {
    this.objectCache.set(object.identifier, object);
  }

  private updateObject(object: any): void {
    this.objectCache.set(object.identifier, object);
  }

}
