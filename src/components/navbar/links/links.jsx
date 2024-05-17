import React from "react";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        //<Link href={link.path} key={link.title}>{link.title}</Link> เรียกผ่าน array links ไม่ใช้ props
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button>Logout</button>
        </>
      ) : (
        <NavLink item={{ item: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
