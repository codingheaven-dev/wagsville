import styled from "styled-components";
import { Button } from "../components/button";
import { Page } from "../components/page";
import { Skills } from "../components/skills";
import Table from "../components/table/Table";
import { useAPI } from "../services/api";
import useStableNavigate from "../utils/useStableNavigate";

const Avatar = styled.span`
  display: block;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  background-size: cover;
  overflow: hidden;
`;

export function EmployeesList() {
  const { employees, addEmployee } = useAPI(
    ({ employees, addEmployee }) => ({ employees, addEmployee }),
    true
  );
  const headers = {
    name: "Name",
    title: "Title",
    skills: "Skills",
    avatar: "Avatar",
  };
  const printableEmployees = employees.map(
    ({ id, name, skills, title, image }) => ({
      id,
      name,
      title,
      skills: <Skills skills={skills} />,
      avatar: <Avatar style={{ backgroundImage: `url(${image})` }} />,
    })
  );
  const navigate = useStableNavigate();
  const handleAddEmployee = () => {
    const newEmployeeId = addEmployee();
    setTimeout(() => navigate(newEmployeeId));
  };
  return (
    <Page>
      <h1>Employees list</h1>
      <Table
        rows={printableEmployees}
        headers={headers}
        actions={[{ label: "Edit", link: (id) => `/employees/${id}` }]}
      />
      <Button onClick={handleAddEmployee}>Add employee</Button>
    </Page>
  );
}
