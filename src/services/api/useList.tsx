import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

type ItemWithId = { id: string };

type UseListResult<T extends ItemWithId> = [
  T[],
  () => string,
  (updatedItem: T) => void,
  (deletedItemId: T["id"]) => void
];

function useList<T extends ItemWithId>(
  initialList: T[],
  initialProperties: Omit<T, "id"> | null = null
): UseListResult<T> {
  const [list, setList] = useState<T[]>(initialList);

  const addItem = useCallback(() => {
    if (!initialProperties) {
      throw new Error("Unable to create element");
    }

    const newItem = { id: uuidv4(), ...initialProperties } as T;

    setList((oldList) => {
      const newList = [...oldList, newItem];
      return newList;
    });

    return newItem.id;
  }, [initialProperties]);

  const updateItem = useCallback((updatedItem: T) => {
    setList((oldList) => {
      const updatedList = oldList.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );

      return updatedList;
    });
  }, []);

  const deleteItem = useCallback((deletedItemId: T["id"]) => {
    setList((oldList) => {
      const updatedList = oldList.filter((item) => item.id !== deletedItemId);

      return updatedList;
    });
  }, []);

  return [list, addItem, updateItem, deleteItem];
}

export default useList;
