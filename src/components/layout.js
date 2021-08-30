import React, { Fragment } from "react";
import Footer from "./footer";

function Layout(props) {
  const children = props.children;
  return (
    <Fragment>
      {children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
