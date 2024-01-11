export interface NodeUIComponent {
  // Properties related to the UI component's layout
  identifier: number;
  row: number;
  column: number;
  [key: string]: any;
  // Other methods or properties specific to the UI component
}
