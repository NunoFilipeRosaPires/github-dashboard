import { useState, useEffect } from "react";
import { useFetch } from "../../hooks";
import { Repository } from "../repository";
import { IRepository } from "../repository/types";
import { IUserRepository } from "./types";

export const UserRepository = ({ username }: IUserRepository) => {
  const [repository, setRepository] = useState<IRepository>();
  const { data, isLoading, error } = useFetch({
    url: `GET /users/${username}/repos`,
    options: {},
  });

  useEffect(() => {
    if (data && data.length > 1) {
      const newData = data;
      newData.sort((a: IRepository, b: IRepository) => b.stargazers_count - a.stargazers_count);
      setRepository(newData[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {error ? (
        <div>error</div>
      ) : (
        <>{isLoading ? <></> : <Repository repository={repository!} withBorder orientation="horizontal" />}</>
      )}
    </>
  );
};
