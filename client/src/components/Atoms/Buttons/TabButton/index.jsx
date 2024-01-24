import React from "react";
import { NavLink, redirect } from "react-router-dom";
import "../../../../style/about.css";

export default function TabButton(props) {
  const { text, redirect } = props;

  return (
    <>
      <nav>
        <NavLink
          to={redirect}
          className="tab font-Inter h-8 hover:bg-[#FF6900] hover:bg-opacity-20 hover:text-[#FF6900] hover:border-[#FF6900] bg-opacity-10 border-emerald-950 border-[1px] rounded-md p-1 px-2 m-1 "
          activeClassName="active"
        >
          {text}
        </NavLink>
      </nav>
    </>
  );
}
