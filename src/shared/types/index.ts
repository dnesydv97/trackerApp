export type ErrorObject = {
  error: true;
  message: string;
  data?: null;
};

export type SuccessObject = {
  error: false;
  data: unknown;
};

export type DefaultReturnType = ErrorObject | SuccessObject;

export type PaginationObject = {
  data: unknown[];
  totalCount: number;
};

export enum ROLES {}

export type JWT_OBJECT = {
  id: number;
  role: "tenant" | "landlord" | "service";
  expiresAt: string;
};

export interface Pagination {
  limit: number;
  offset: number;
  count: number;
}

export enum TRIP_STATUS {
  processing = "processing",
  queued = "queued",
  scheduled = "scheduled",
  assigned = "assigned",
  arrived = "arrived",
  started = "started",
  completed = "completed",
  cancelled = "cancelled",
  expired = "expired",
}

export enum TRIP_TYPE {
  ride = "ride",
  delivery = "delivery",
  foodDelivery = "food-delivery",
}

export enum TRIP_START_TYPE {
  now = "now",
  later = "later",
}

export enum SORT_FILTER {
  relevance = "relevance",
  price_asc = "price_asc",
  price_desc = "price_desc",
  rating = "rating",
  created_at_desc = "created_at_desc",
  created_at_asc = "created_at_asc",
}
