export interface INews {
  id: number;
  title: string;
  content: string;
  type: NewsType;
  endTime: string;
  published: boolean;
  pictures: string[];
  important: boolean;
}

export const enum NewsType {
  UPDATING = 'UPDATING',
  ADVERTISING_ACTIONS = 'ADVERTISING_ACTIONS',
  DISCOUNTS = 'DISCOUNTS',
  PROMOTION = 'PROMOTION',
}
