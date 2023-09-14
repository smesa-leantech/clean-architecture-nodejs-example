export type ID = string;

export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface Pagination {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}