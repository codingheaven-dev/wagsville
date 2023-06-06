import { createBrowserRouter } from "react-router-dom";
import { CustomersList } from "./pages/CustomersList";
import { EmployeesList } from "./pages/EmployeesList";
import ErrorPage from "./pages/ErrorPage";
import { Layout } from "./pages/Layout";
import { Login } from "./pages/Login";
import { Root } from "./pages/Root";
import { ServicesList } from "./pages/ServicesList";
import { CustomersEdit } from "./pages/CustomersEdit";
import { EmployeesEdit } from "./pages/EmployeesEdit";
import { ServicesEdit } from "./pages/ServicesEdit";
import { Schedule } from "./pages/Schedule";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        Component: Layout,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "schedule",
            Component: Schedule,
          },
          {
            path: "employees",
            Component: EmployeesList,
          },
          {
            path: "employees/:employeeId",
            Component: EmployeesEdit,
          },
          {
            path: "services",
            Component: ServicesList,
          },
          {
            path: "services/:serviceId",
            Component: ServicesEdit,
          },
          {
            path: "customers",
            Component: CustomersList,
          },
          {
            path: "customers/:customerId",
            Component: CustomersEdit,
          },
        ],
      },
    ],
  },
]);

export default router;
