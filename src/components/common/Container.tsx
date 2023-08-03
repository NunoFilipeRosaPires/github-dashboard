import React from "react";

interface IContainer {
  fluid?: boolean;
  children?: React.JSX.Element;
}

export const Container = ({ fluid = false, children }: IContainer) => {
  return <div className={fluid ? "container-fluid" : "container"}>{children}</div>;
};
