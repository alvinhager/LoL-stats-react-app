import { ReactElement, ReactNode } from "react";

interface Interface {
  children: ReactNode | ReactElement;
}

export const Centered = ({ children }: Interface) => {
  const wrappedComponent = <div style={{ margin: "auto" }}>{children}</div>;

  return wrappedComponent;
};
