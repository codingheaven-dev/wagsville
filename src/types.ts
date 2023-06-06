import { FC } from "react";

export interface Employee {
  id: string;
  name: string;
  title: "Junior groomer" | "Senior groomer";
  image: string;
  skills: Skill[];
}

export type Skill = "Cut" | "Trim" | "Nails" | "Wash";

export interface Customer {
  id: string;
  owner: string;
  dog: string;
  breed: string;
  birthdate: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  icon: FC;
  color: string;
}

export interface Appointment {
  id: string;
  startTime: string;

  serviceId: Service["id"];
  employeeId: Employee["id"];
  customerId: Customer["id"];
}

export interface ScheduleAppointment {
  id: string;
  startTime: string;

  service: Service;
  employee: Employee;
  customer: Customer;
}
