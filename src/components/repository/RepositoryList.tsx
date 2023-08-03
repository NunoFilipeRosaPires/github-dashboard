import { useFetch } from "../../hooks";
import { addMonths, formatDate } from "../../utils";
import { Placeholder } from "../common";
import { Repository } from "./Repository";
import { IRepository, IRepositoryList } from "./types";

export const RepositoryList = ({ search }: IRepositoryList) => {
  const pastYear = addMonths(new Date(), -12);

  const params = {
    url: "GET /search/repositories",
    options: {
      q: `${search} created:>=${formatDate(pastYear)}+type:repository`,
      sort: "stars",
      type: "Repositories",
      per_page: 4,
    },
  };

  const { data, isLoading, error } = useFetch(params);

  return (
    <div className="repository-list">
      {error ? (
        <div>Error</div>
      ) : (
        <>
          {isLoading ? (
            <Placeholder />
          ) : (
            <>
              <h2>Top Repositories</h2>
              <div className="repository-list__container">
                {data.items.length > 0 ? (
                  data.items.map((item: IRepository) => {
                    return (
                      <a className="repository-list__item" href={item.html_url} target="_blank" key={item.id} rel="noreferrer">
                        <Repository repository={item} orientation="vertical" withShadow />
                      </a>
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
