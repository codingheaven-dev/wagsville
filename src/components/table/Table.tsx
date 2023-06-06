import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: var(--color-primary);
    color: white;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }
`;

const ActionLinks = styled.div`
  display: flex;
  gap: 0.5em;
`;

const actionCss = css`
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  text-decoration: none;
  border: 0;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px var(--color-primary);
  }
`;

const ActionLink = styled(Link)`
  ${actionCss}
`;

const ActionButton = styled.button`
  ${actionCss}
`;

function isLinkAction<T>(a: Action<T>): a is LinkAction {
  return "link" in a;
}

interface LinkAction {
  label: string;
  link: (id: string) => string;
}

interface ClickAction<T> {
  label: string;
  onClick: (item: T) => void;
}

type Action<T> = LinkAction | ClickAction<T>;

interface TableRecord extends Record<string, ReactNode> {
  id: string;
}

interface TableProps<T extends TableRecord> {
  rows: T[];
  headers: Record<keyof Omit<T, "id">, string>;
  actions?: Action<T>[];
}

function Table<T extends TableRecord>({
  rows,
  headers,
  actions = [],
}: TableProps<T>) {
  const keys = Object.keys(headers).filter((k) => k !== "id");
  const hasActions = !!actions.length;
  return (
    <TableWrapper>
      <thead>
        <tr>
          {keys.map((k) => (
            <th key={k}>{headers[k]}</th>
          ))}
          {hasActions && <th />}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {keys.map((k) => (
              <td key={k}>{row[k]}</td>
            ))}
            {hasActions && (
              <td>
                <ActionLinks>
                  {actions.map((action) =>
                    isLinkAction(action) ? (
                      <ActionLink key={action.label} to={action.link(row.id)}>
                        {action.label}
                      </ActionLink>
                    ) : (
                      <ActionButton
                        key={action.label}
                        onClick={() => action.onClick(row)}
                      >
                        {action.label}
                      </ActionButton>
                    )
                  )}
                </ActionLinks>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
}

/*
declare module "react" {
  function memo<T>(component: T): T;
}
*/

export default Table;
