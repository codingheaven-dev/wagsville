import { Button } from "../components/button";
import { Page } from "../components/page";
import Table from "../components/table/Table";
import { useAPI } from "../services/api";
import useStableNavigate from "../utils/useStableNavigate";

export function CustomersList() {
  const { customers, addCustomer } = useAPI(
    ({ customers, addCustomer }) => ({ customers, addCustomer }),
    true
  );
  const printableCustomers = customers.map(
    ({ id, owner, dog, breed, birthdate }) => ({
      id,
      owner,
      dog,
      breed,
      age: [
        Math.floor(
          (new Date().getTime() - new Date(birthdate).getTime()) /
            (1000 * 60 * 60 * 24 * 365)
        ),
        "years",
      ].join(" "),
    })
  );
  const headers = { owner: "Owner", dog: "Dog", breed: "Breed", age: "Age" };
  const navigate = useStableNavigate();
  const handleAddCustomer = () => {
    const newCustomerId = addCustomer();
    setTimeout(() => navigate(newCustomerId));
  };
  return (
    <Page>
      <h1>Customer list</h1>
      <Table
        rows={printableCustomers}
        headers={headers}
        actions={[{ label: "Edit", link: (id) => `/customers/${id}` }]}
      />
      <Button onClick={handleAddCustomer}>Add customer</Button>
    </Page>
  );
}
