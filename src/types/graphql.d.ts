export const typeDefs = ["type User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  fullName: String\n  age: Int\n  password: String\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  profilePhoto: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float!\n  lastLat: Float!\n  lastOrientation: Float\n  createAt: String!\n  updateAt: String\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createAt: String!\n  updateAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  firstName: string;
  lastName: string;
  fullName: string | null;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  profilePhoto: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number;
  lastLat: number;
  lastOrientation: number | null;
  createAt: string;
  updateAt: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createAt: string;
  updateAt: string;
}
