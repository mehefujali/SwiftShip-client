export const Role = {
  ADMIN: "ADMIN",
  SENDER: "SENDER",
  RECEIVER: "RECEIVER",
} as const;

type ObjectValues<T> = T[keyof T];
export type Role = ObjectValues<typeof Role>;

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
}

export interface ITokenPayload {
  userId: string;
  email: string;
  role: Role;
}