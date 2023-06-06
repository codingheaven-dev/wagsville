import { Form, Group, Input, Select } from "../components/form";
import { Button } from "../components/button";
import { useAPI } from "../services/api";
import { useParams } from "react-router-dom";
import useEditForm from "../utils/useEditForm";
import { FaPaperPlane } from "react-icons/fa";

export function EmployeesEdit() {
  const { employeeId } = useParams();
  const { original, editEmployee } = useAPI(
    ({ employees, editEmployee }) => ({
      original: employees.find((c) => c.id === employeeId),
      editEmployee,
    }),
    true
  );
  if (!original) throw new Error(`Unknown employee: ${employeeId}`);
  const { data, handleChange, handleSubmit, handleSelect } = useEditForm({
    original,
    edit: editEmployee,
    listView: "/employees",
  });

  return (
    <Form onSubmit={handleSubmit} title="Edit customer">
      <Group label="Name">
        <Input name="name" value={data.name} onChange={handleChange} />
      </Group>
      <Group label="Title">
        <Select
          name="title"
          options={["Junior groomer", "Senior groomer"]}
          value={data.title}
          onSelect={handleSelect}
        />
      </Group>
      <Group label="Skills">
        <Select
          name="skills"
          multiple
          size={4}
          value={data.skills}
          options={["Cut", "Trim", "Nails", "Wash"]}
          onSelect={handleSelect}
        />
      </Group>
      <Group label="Image">
        <Input name="image" value={data.image} onChange={handleChange} />
      </Group>
      <Button icon={FaPaperPlane}>Save</Button>
    </Form>
  );
}
