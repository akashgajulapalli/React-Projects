import React from "react";
import links, { social } from "./data";
import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className={`sidebar`}>
      <div className="sidebar-header">
        <img src={logo} alt="coing addict" className="logo" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.length > 0
          ? links.map((item) => {
              const { id, url, text, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>
                    {icon}
                    {text}
                  </a>
                </li>
              );
            })
          : null}
      </ul>
      <ul className="social-icons">
        {social.length > 0
          ? social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })
          : null}
      </ul>
    </aside>
  );
};

export default Sidebar;
