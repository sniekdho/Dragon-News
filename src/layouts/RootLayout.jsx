import React from "react";
import { Outlet } from "react-router";
import Header from "../components/HeaderLayouts/Header";
import LatestNews from "../components/HeaderLayouts/LatestNews";
import Navbar from "../components/HeaderLayouts/Navbar";
import LeftAside from "../components/MainLayouts/LeftAside/LeftAside";
import RightAside from "../components/MainLayouts/RightAside/RightAside";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>

        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>

        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>

        <section className="col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default RootLayout;
