export interface School {
  id?: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  image: string;
  email_id: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}