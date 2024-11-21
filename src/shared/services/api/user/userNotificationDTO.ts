export type UserDTO = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}

export type NotificationDetailDTO = {
  id: number;
  content: string;
  eventDate: string;
  important: boolean;
}

export type NotificationDTO = {
  id: number;
  user: UserDTO;
  notification: NotificationDetailDTO;
  show: boolean;
}