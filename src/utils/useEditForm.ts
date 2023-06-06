import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import useStableNavigate from "./useStableNavigate";

interface UseEditFormProps<T> {
  original: T;
  edit: (v: T) => void;
  listView: string;
}

function getValue(node: HTMLInputElement) {
  switch (node.type) {
    case "number":
      return node.valueAsNumber;
    case "date":
      return new Date(node.valueAsNumber).toISOString().slice(0, 10);
  }
  return node.value;
}

function useEditForm<T>({ original, edit, listView }: UseEditFormProps<T>) {
  const [data, setData] = useState(original);
  const navigate = useStableNavigate();
  useEffect(() => {
    if (!data) {
      navigate(listView);
    }
  }, [data, navigate, listView]);
  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData((d: T) => ({ ...d, [target.name]: getValue(target) }));
    },
    []
  );
  const handleSelect = useCallback(
    ({ name, value }: { name: string; value: string | string[] }) => {
      setData((d: T) => ({ ...d, [name]: value }));
    },
    []
  );
  const handleSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      edit(data);
      navigate(listView);
    },
    [edit, data, navigate, listView]
  );

  return { data, handleChange, handleSubmit, handleSelect };
}

export default useEditForm;
