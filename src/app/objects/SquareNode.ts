import { BaseNode } from './BaseNode';

export class SquareNode extends BaseNode {
  private static readonly DEFAULT_NODE_SIZE = 100;

  constructor(identifier: string) {
    super(identifier);

    // Initialize the square node with a default size
    this.addUIComponent({
      width: SquareNode.DEFAULT_NODE_SIZE,
      height: SquareNode.DEFAULT_NODE_SIZE,
      row: 0,
      column: 0,
    });
  }

  // Additional methods or properties specific to SquareNode
}
