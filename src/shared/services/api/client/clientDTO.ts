export type IClientAvatar = {
  filename: string;
  url?: string;
};

export type IClientWithPets = {
  firstname: string;
  lastname: string;
  avatar: string;
  email: string;
  pets: IPets[];
};

enum IPetsType {
  CAT = 'CAT',
  DOG = 'DOG',
}

type IPets = {
  id: number;
  name: string;
  avatar: string;
  birthDay: string;
  petType: IPetsType;
};
