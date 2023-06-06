import { PropsWithChildren } from "react";
import APIContext from "./context";
import { employees, customers, services, appointments } from "./fixture";
import useList from "./useList";
import { Customer, Employee, Service } from "../../types";
import { FaIcons } from "react-icons/fa";

const EMPTY_CUSTOMER: Omit<Customer, "id"> = {
  owner: "",
  dog: "",
  breed: "",
  birthdate: "",
};
const EMPTY_EMPLOYEE: Omit<Employee, "id"> = {
  name: "",
  title: "Junior groomer",
  skills: [],
  image: "",
};
const EMPTY_SERVICE: Omit<Service, "id"> = {
  name: "",
  duration: 0,
  price: 0,
  icon: FaIcons,
  color: "",
};

function APIProvider({ children }: PropsWithChildren) {
  const [customerList, addCustomer, editCustomer] = useList(
    customers,
    EMPTY_CUSTOMER
  );
  const [employeeList, addEmployee, editEmployee] = useList(
    employees,
    EMPTY_EMPLOYEE
  );
  const [serviceList, addService, editService, deleteService] = useList(
    services,
    EMPTY_SERVICE
  );
  const [appointmentList] = useList(appointments);

  const value = {
    customers: customerList,
    addCustomer,
    editCustomer,
    employees: employeeList,
    addEmployee,
    editEmployee,
    services: serviceList,
    addService,
    editService,
    deleteService,
    appointments: appointmentList,
  };

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
}

export default APIProvider;
