export type CursorBasedList<T = unknown> = {
  totalCount: number;
  edges: EdgeNode<T>[];
  pageCursors: PageCursors;
}

export type EdgeNode<T = unknown> = {
  node: T
}

export type PageCursors = {
  around: Cursor[];
  first: Cursor;
  last: Cursor;
  next: Cursor;
  previous: Cursor;
}

export type Cursor = {
  cursor: string;
  isCurrent: boolean;
  page: number;
}