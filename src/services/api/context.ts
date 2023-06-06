import { createContext } from "use-context-selector";
import { Appointment, Customer, Employee, Service } from "../../types";

export interface APIContextType {
  customers: Customer[];
  addCustomer: () => Customer["id"];
  editCustomer: (c: Customer) => void;
  employees: Employee[];
  addEmployee: () => Employee["id"];
  editEmployee: (e: Employee) => void;
  services: Service[];
  addService: () => Service["id"];
  editService: (s: Service) => void;
  deleteService: (id: Service["id"]) => void;
  appointments: Appointment[];
}

const APIContext = createContext<APIContextType | null>(null);

export default APIContext;
