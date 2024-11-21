export enum RoleType {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
  DOCTOR = 'DOCTOR',
  MANAGER = 'MANAGER',
}

export interface loginBody {
  username: string;
  password: string;
}

export interface loginResponse {
  jwtToken: string;
  role: RoleType;
}
