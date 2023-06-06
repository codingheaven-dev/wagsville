import { Form, Group, Input } from "../components/form";
import { Button } from "../components/button";
import { useAPI } from "../services/api";
import { useParams } from "react-router-dom";
import useEditForm from "../utils/useEditForm";
import { FaPaperPlane } from "react-icons/fa";
import styled from "styled-components";
import useStableNavigate from "../utils/useStableNavigate";

const Buttons = styled.div`
  display: flex;
  gap: 1em;
  justify-items: stretch;
`;

export function CustomersEdit() {
  const { customerId } = useParams();
  const { original, editCustomer } = useAPI(
    ({ customers, editCustomer }) => ({
      original: customers.find((c) => c.id === customerId),
      editCustomer,
    }),
    true
  );
  const navigate = useStableNavigate();
  if (!original) throw new Error(`Unknown customer: ${customerId}`);
  const { data, handleChange, handleSubmit } = useEditForm({
    original,
    edit: editCustomer,
    listView: "/customers",
  });
  const goBack = () => navigate("/customers");

  return (
    <Form onSubmit={handleSubmit} title="Edit customer">
      <Group label="Owner">
        <Input name="owner" value={data.owner} onChange={handleChange} />
      </Group>
      <Group label="Dog">
        <Input name="dog" value={data.dog} onChange={handleChange} />
      </Group>
      <Group label="Breed">
        <Input name="breed" value={data.breed} onChange={handleChange} />
      </Group>
      <Group label="Birthdate">
        <Input
          name="birthdate"
          type="date"
          value={data.birthdate}
          onChange={handleChange}
        />
      </Group>
      <Buttons>
        <Button type="button" outline onClick={goBack}>
          Cancel
        </Button>
        <Button icon={FaPaperPlane}>Save</Button>
      </Buttons>
    </Form>
  );
}
