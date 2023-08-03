import React from "react";

interface IFlex {
  justify?: "start" | "center" | "end" | "between" | "around";
  align?: "start" | "center" | "end" | "between" | "around";
  direction?: "row" | "column";
  children?: React.JSX.Element;
}

export const Flex = (props: IFlex) => {
  const { justify = "start", align = "start", direction = "row", children } = props;

  return <div className={`d-flex justify-${justify} align-${align} direction-${direction}`}>{children}</div>;
};
