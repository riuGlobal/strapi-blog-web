import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil((articles?.length ?? 0) / 5);
  const leftArticles = articles?.slice(0, leftArticlesCount);
  const rightArticles = articles?.slice(leftArticlesCount, articles?.length);

  return (
    <div style={{ width:"100%", display: "grid", gridTemplateColumns: "24% 24% 24% 24%", columnGap: "10px"}}>
      {articles?.map?.((article, i) => {
        return (
          <div>
            <Card article={article} key={`article__left__${article?.slug}`} />
          </div>
        );
      })}
      {/* <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftArticles?.map?.((article, i) => {
            return (
              <Card article={article} key={`article__left__${article?.slug}`} />
            );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles?.map?.((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__right__${article?.slug}`}
                />
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Articles;
