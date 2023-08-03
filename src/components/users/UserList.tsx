import { useFetch } from "../../hooks";
import { addMonths, formatDate } from "../../utils";
import { IUser, IUserList } from "./types";
import { Card, Placeholder, User } from "..";

export const UserList = ({ title, sort, search }: IUserList) => {
  const pastMonth = addMonths(new Date(), -1);

  const params = {
    url: "GET /search/users",
    options: {
      q: `${search} created:>=${formatDate(pastMonth)}+type:user`,
      sort: sort,
      type: "Users",
      per_page: 3,
    },
  };

  const { data, isLoading, error } = useFetch(params);

  return (
    <div className="user-list">
      {error ? (
        <div>Erro</div>
      ) : (
        <>
          {isLoading ? (
            <Placeholder />
          ) : (
            <>
              {title && <h2>{title}</h2>}
              <div className="user-list__container">
                {data.items.length > 0 ? (
                  data.items.map((item: IUser) => {
                    return (
                      <Card key={item.id} withShadow>
                        <User url={item.url} />
                      </Card>
                    );
                  })
                ) : (
                  <div>No data found!</div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
