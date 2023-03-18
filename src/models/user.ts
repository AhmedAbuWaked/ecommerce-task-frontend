type Role = "user" | "guest" | "admin";

export interface User {
  token: string;
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}
