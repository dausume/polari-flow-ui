import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  private objectChanged = new BehaviorSubject<Map<string, SquareNode | NodeUIComponent | NodeUIGrid>>(this.objectCache);

  constructor() {
  }

  // Register an object when it is sent from one of the other services
  private registerObject(object: any): void {
    this.objectCache.set(object.identifier, object);
  }

  private updateObject(object?: any): void {
    let obj = this.objectCache.get(object.identifier);
    //If object exists, update it then put it back
  }

}
