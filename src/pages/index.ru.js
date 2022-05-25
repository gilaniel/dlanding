import React from "react";

import Layout from "../components/layout";
import { Landing } from "../contents/Landing";

const IndexPage = (props) => {
  return (
    <Layout location={props.location} locale="ru">
      <Landing {...{ props }} />
    </Layout>
  );
};

export default IndexPage;
