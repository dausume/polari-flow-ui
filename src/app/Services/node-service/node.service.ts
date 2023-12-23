import { Injectable } from '@angular/core';
import { SquareNode } from '../../objects/SquareNode';
import { BaseNode } from '../../objects/BaseNode';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  //The NodeService is a central service for creating, updating, deleting, moving, and other actions on Nodes.
  //It has a list of all defined node types and calls the specific functions from the specific node services like SquareNodeService.

  private nodeCount = 0; // Used to generate unique identifiers for nodes
  //public nodeCreateSubject : Subject<BaseNode>();

  //List of defined node types based on the BaseNode.
  nodeTypes = ['square']

  createNode(nodeType:string): void {
    const identifier = this.generateNodeIdentifier();
    let newNode = null;
    if(nodeType == 'square')
    {
      newNode = new SquareNode(identifier);
    }
    else{
      console.log("")
    }
  }

  // You can add methods for creating other types of nodes as needed

  private generateNodeIdentifier(): string {
    // Generates a unique identifier for nodes
    return `node_${this.nodeCount++}`;
  }
}

