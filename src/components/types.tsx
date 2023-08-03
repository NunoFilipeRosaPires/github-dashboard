import { Dispatch } from "react";

export interface IUseState {
  value?: string;
  setValue?: Dispatch<React.SetStateAction<string>>;
}
