export interface IPetClient {
  id: number;
  name: string;
  avatar: string;
  birthDay: string;
  petType: string;
}

export interface IPetClientSpecific_1 {
  name: string;
  avatar: string;
  birthDay: string;
  petType: string;
  breed: string;
  gender: string;
  color: string;
  size: string;
  weight: number;
  description: string;
}
export interface IPetClientSpecific_2 {
  petId: number;
  body: {
    name: string;
    avatar: string;
    birthDay: string;
    breed: string;
    gender: string;
    color: string;
    size: string;
    weight: number;
    description: string;
  };
}
