import { stringify } from "query-string";
import React, { Fragment, useEffect } from "react";
import Feed from "../../components/Feed/Feed";
import Pagination from "../../components/Pagination/Pagination";
import useFetch from "../../hooks/useFetch";
import { getPaginator, limit } from "../../utils/utils";

const GlobalFeed = ({ location, match }) => {
  const { offset, currentPage } = getPaginator(location.search);

  const stingifiedParams = stringify({
    limit,
    offset,
  });
  const apiUrl = `/articles?${stingifiedParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>A place to Share knowledge</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div>Loading...</div>}
            {error && <div>someError</div>}
            {!isLoading && response && (
              <Fragment>
                <Feed articles={response.articles} />
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={match.url}
                  currentPage={currentPage}
                />
              </Fragment>
            )}
          </div>
          <div className="col-md-3">Popular Tags</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
