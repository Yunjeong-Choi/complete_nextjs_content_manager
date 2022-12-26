import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
