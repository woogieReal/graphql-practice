export type OffsetBasedList<T = unknown> = {
  totalCount: number;
  edgeCount: number;
  edges: EdgeNode<T>[];
}

export type EdgeNode<T = unknown> = {
  node: T
}