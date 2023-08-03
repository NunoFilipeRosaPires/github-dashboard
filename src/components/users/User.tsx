import { useFetch } from "../../hooks";
import { IUser } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Container, UserRepository } from "..";

export const User = ({ url }: { url: string }) => {
  const { data, isLoading, error } = useFetch({ url: url, options: {} });
  const user = data as IUser;

  return (
    <div className="user">
      {error ? (
        <div>Erro</div>
      ) : (
        <>
          {isLoading ? (
            <></>
          ) : (
            <a href={user.html_url} target="_blank">
              <div className="user__container">
                <div className="user__banner">
                  <img src={user.avatar_url} alt={"user banner"} />
                </div>
                <div className="user__avatar">
                  <img src={user.avatar_url} alt={"user avatar"} />
                </div>
                <Container>
                  <>
                    <div className="user__name">{user.name ?? user.login}</div>
                    <div className="user__email">{user.email}</div>
                    <div className="user__followers">
                      <FontAwesomeIcon icon={faUser} />
                      <div className="user__followers-label">
                        <span className="user__followers-value">{user.followers}</span> followers
                      </div>
                    </div>
                    <div className="user__repository">
                      <UserRepository username={user.login} />
                    </div>
                    <div className="user__link">Open Profile</div>
                  </>
                </Container>
              </div>
            </a>
          )}
        </>
      )}
    </div>
  );
};
