import styled from "styled-components";
import { Button } from "../components/button";
import { Page } from "../components/page";
import Table from "../components/table/Table";
import { useAPI } from "../services/api";
import useStableNavigate from "../utils/useStableNavigate";

const Swatch = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  color: white;
`;

function formatDuration(minutes: number): string {
  const d = new Date();
  d.setHours(0, minutes);
  return d.toLocaleTimeString(undefined, {
    hourCycle: "h23",
    hour: "numeric",
    minute: "numeric",
  });
}

export function ServicesList() {
  const { services, addService, deleteService } = useAPI(
    ({ services, addService, deleteService }) => ({
      services,
      addService,
      deleteService,
    }),
    true
  );
  const headers = {
    name: "Name",
    price: "Price",
    duration: "Duration",
    symbol: "Symbol",
  };
  const printableServices = services.map(
    ({ id, name, price, duration, icon: Icon, color }) => ({
      id,
      name,
      price: `$${price.toLocaleString()} USD`,
      duration: formatDuration(duration),
      symbol: (
        <Swatch style={{ backgroundColor: color }}>
          <Icon />
        </Swatch>
      ),
    })
  );
  const navigate = useStableNavigate();
  const handleAddService = () => {
    const newServiceId = addService();
    setTimeout(() => navigate(newServiceId));
  };
  return (
    <Page>
      <h1>Services list</h1>
      <Table
        rows={printableServices}
        headers={headers}
        actions={[
          { label: "Edit", link: (id) => `/services/${id}` },
          { label: "Delete", onClick: (item) => deleteService(item.id) },
        ]}
      />
      <Button onClick={handleAddService}>Add service</Button>
    </Page>
  );
}
