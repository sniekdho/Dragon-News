import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/HeaderLayouts/Header";
import LatestNews from "../components/HeaderLayouts/LatestNews";
import Navbar from "../components/HeaderLayouts/Navbar";
import LeftAside from "../components/MainLayouts/LeftAside/LeftAside";
import RightAside from "../components/MainLayouts/RightAside/RightAside";
import Spinner from "../components/Spinner";

const RootLayout = () => {
  const { state } = useNavigation();

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

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>

        <section className="col-span-6">
          {state == "loading" ? <Spinner /> : <Outlet></Outlet>}
        </section>

        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default RootLayout;
