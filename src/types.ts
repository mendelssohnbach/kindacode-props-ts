export enum Role {
  member = 'member',
  staff = 'staff',
  admin = 'admin',
}

export interface UserProps {
  id: string;
  email: string;
  age?: number;
  isMarried?: boolean;
  role: Role;
  skills?: string[];
  doSomething: React.MouseEventHandler;
}
