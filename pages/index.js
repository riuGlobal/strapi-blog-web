import React, { useEffect, useState } from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({}) => {
  const [articles, setArticles] = useState();
  const [categories, setCategories] = useState();
  const [homepage, setHomepage] = useState();
  useEffect(() => {
    (async () => {
      const [articles, categories, homepage] = await Promise.all([
        fetchAPI("/articles"),
        fetchAPI("/categories"),
        fetchAPI("/homepage"),
      ]);
      setArticles(articles.reverse());
      setCategories(categories);
      setHomepage(homepage);
    })();
  }, []);
  return (
    <Layout categories={categories}>
      <Seo seo={homepage?.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage?.hero?.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

// export async function getStaticProps() {
//   // Run API calls in parallel
//   const [articles, categories, homepage] = await Promise.all([
//     fetchAPI("/articles"),
//     fetchAPI("/categories"),
//     fetchAPI("/homepage"),
//   ]);
//   console.log("===========", articles);
//   return {
//     props: { articles, categories, homepage },
//     revalidate: 1,
//   };
// }

export default Home;
