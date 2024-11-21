export interface clientNewsResponse {
  id: number;
  title: string;
  type: Types;
  content: string;
}

export enum Types {
  UPDATING = 'UPDATING',
  ADVERTISING_ACTIONS = 'ADVERTISING ACTIONS',
  DISCOUNTS = 'DISCOUNTS',
  PROMOTION = 'PROMOTION',
}
