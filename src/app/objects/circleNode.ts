import { BaseNode } from './BaseNode';

export class CircleNode extends BaseNode {
  private static readonly DEFAULT_NODE_SIZE = 100;
  public radius:number = CircleNode.DEFAULT_NODE_SIZE;

  constructor(identifier: string) {
    super(identifier);

    // Initialize the square node with a default size
    this.addUIComponent({
      identifier: 0,
      radius: CircleNode.DEFAULT_NODE_SIZE,
      row: 0,
      column: 0,
    });
  }

  // Additional methods or properties specific to SquareNode
}
