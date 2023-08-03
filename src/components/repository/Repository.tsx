import { IRepositoryComponent } from "./types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../common";

export const Repository = ({ repository, withBorder = false, orientation, withShadow = false }: IRepositoryComponent) => {
  return (
    <Card withShadow={withShadow}>
      <div
        className={`repository ${withBorder ? "repository-border" : ""} ${
          orientation ? "repository-orientation-" + orientation : ""
        }`}
      >
        <div className="repository__top">
          <div className="repository__title">
            <div>{repository?.name}</div>
          </div>
          <div className="repository__stars">
            <FontAwesomeIcon icon={faStar} size="2xs" color="#fff" />
            {repository?.stargazers_count}
          </div>
        </div>
        <div className="repository__description">{repository?.description}</div>
      </div>
    </Card>
  );
};
