export type State = {
  x: number;
  y: number;
}

export class Node {
  constructor(public state: State, public parent: Node) {}
}