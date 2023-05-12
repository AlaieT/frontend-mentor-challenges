import React from "react";

import Header from "../components/Header";
import Challenge from "../components/Challenge";

import type { ChallengeProps } from "../types";

import "../styles/global.scss";

const Page = () => {
  const [pageData, setPageData] = React.useState<{
    challenges: ChallengeProps[];
  } | null>(null);

  React.useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/indexData.json`)
      .then((resolve) => resolve.json())
      .then((data) => setPageData(data));
  }, []);

  return (
    pageData && (
      <>
        <Header />
        <main>
          {pageData.challenges.map(({ name, link }) => (
            <Challenge key={name} name={name} link={link} />
          ))}
        </main>
      </>
    )
  );
};

export { Page };

export const documentProps = {
  title: "Frontend Mentor - Challenges",
  description: "Collection of solutions for Front-end Mentor challenges.",
  fonts:
    "https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap"
};
