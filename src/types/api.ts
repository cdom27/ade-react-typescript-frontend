export interface HomeCardDTO {
  id: number;
  address: string;
  cost: number;
  bedrooms: number;
  bathrooms: number;
  lotSize: string;
  mainImgUrl: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
}

export interface HomeDetailsDTO {
  id: number;
  address: string;
  cost: number;
  bedrooms: number;
  bathrooms: number;
  lotSize: string;
  livableAreaSize: string;
  mainImgUrl: string;
  facts: {
    [key: string]: {
      [key: string]: string[];
    };
  };
  whatsSpecial: string[];
  photoGallery: string[];
  overview: string;
}
