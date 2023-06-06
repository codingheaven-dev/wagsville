import type { MutableRefObject } from "react";
import { useRef } from "react";
import { shallowEqualObjects } from "shallow-equal";
import { useContextSelector } from "use-context-selector";

import APIContext, { APIContextType } from "./context";

function identity<T>(a: T) {
  return a;
}

function useAPI(): APIContextType;
function useAPI<T>(selector: (ctx: APIContextType) => T): T;
function useAPI<T>(selector: (ctx: APIContextType) => T, isMulti: boolean): T;
function useAPI<T>(
  selector: (ctx: APIContextType) => T | APIContextType = identity,
  isMulti: boolean = false
): T | APIContextType {
  const ref: MutableRefObject<T | APIContextType | undefined> = useRef();

  const equalityFnCallback = (ctx: APIContextType | null) => {
    if (!ctx) {
      throw new Error("No context");
    }
    const selected = selector(ctx);
    if (
      ref.current &&
      ((isMulti && ref.current === selected) ||
        (!isMulti && shallowEqualObjects(ref.current, selected as {})))
    ) {
      return ref.current;
    }
    ref.current = selected;
    return selected;
  };

  return useContextSelector(APIContext, equalityFnCallback);
}

export default useAPI;
