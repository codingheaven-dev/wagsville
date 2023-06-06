import { FormEvent } from "react";
import { useAuth } from "../services/auth";
import Logo from "../components/logo/Logo";
import styled from "styled-components";
import { Form, Group, Input } from "../components/form";
import { Button } from "../components/button";

const Main = styled.main`
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  padding-top: 5em;
  min-height: 100vh;
  align-items: center;
  color: white;
`;

export function Login() {
  const { login } = useAuth();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    login();
  };
  return (
    <Main>
      <Logo />
      <Form title="Login" onSubmit={handleSubmit}>
        <Group label="Email">
          <Input name="email" placeholder="E.g. john@doe.invalid" />
        </Group>
        <Group label="Password">
          <Input name="password" type="password" />
        </Group>
        <Button>Login</Button>
      </Form>
    </Main>
  );
}
