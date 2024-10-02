export interface IClientAppointment {
  days: IDay[];
}

export interface IDay {
  date: string;
  appointments: IAppointments[];
}

export interface IAppointments {
  time: string;
  available: boolean;
}
