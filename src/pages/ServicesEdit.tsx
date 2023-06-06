import { Form, Group, Input } from "../components/form";
import { Button } from "../components/button";
import { useAPI } from "../services/api";
import { useParams } from "react-router-dom";
import useEditForm from "../utils/useEditForm";
import { FaPaperPlane } from "react-icons/fa";
import NumberInput from "../components/form/NumberInput";

export function ServicesEdit() {
  const { serviceId } = useParams();
  const { original, editService } = useAPI(
    ({ services, editService }) => ({
      original: services.find((c) => c.id === serviceId),
      editService,
    }),
    true
  );
  if (!original) throw new Error(`Unknown service: ${serviceId}`);
  const { data, handleChange, handleSubmit } = useEditForm({
    original,
    edit: editService,
    listView: "/services",
  });

  return (
    <Form onSubmit={handleSubmit} title="Edit customer">
      <Group label="Name">
        <Input name="name" value={data.name} onChange={handleChange} />
      </Group>
      <Group label="Price">
        <NumberInput
          name="price"
          unit="USD"
          value={data.price}
          onChange={handleChange}
        />
      </Group>
      <Group label="Duration">
        <NumberInput
          name="duration"
          unit="minutes"
          value={data.duration}
          onChange={handleChange}
        />
      </Group>
      <Group label="Color">
        <Input name="color" value={data.color} onChange={handleChange} />
      </Group>
      <Button icon={FaPaperPlane}>Save</Button>
    </Form>
  );
}
