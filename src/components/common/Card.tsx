import { ICard } from "./types";

export const Card = ({ withShadow = false, children }: ICard) => {
  return <div className={`card ${withShadow ? "card--shadow" : ""}`}>{children}</div>;
};
