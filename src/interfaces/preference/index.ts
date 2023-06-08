import { UserInterface } from 'interfaces/user';

export interface PreferenceInterface {
  id?: string;
  customer_id: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  _count?: {};
}
