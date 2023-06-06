import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  margin: 32px auto;
  max-width: 600px;
  padding: 32px;
  background-color: #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: var(--color-secondary);
`;

const Fieldset = styled.fieldset`
  border-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0.5em 1em 1em;
  align-items: flex-start;
`;

const Title = styled.legend`
  font-size: 1.5rem;
  padding: 0 0.5em;
`;

type MakeRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

interface FormProps
  extends MakeRequired<ComponentPropsWithoutRef<"form">, "onSubmit"> {
  title: string;
}

/*
interface FormProps
  extends ComponentPropsWithoutRef<"form"> {
  onSubmit: ComponentPropsWithoutRef<"form">["onSubmit"];
  title: string;
}
//*/

function Form({ title, children, ...rest }: FormProps) {
  return (
    <FormWrapper {...rest}>
      <Fieldset>
        <Title>{title}</Title>
        {children}
      </Fieldset>
    </FormWrapper>
  );
}

export default Form;
