import React from "react";
import headerStyle from "@/app/styles/header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className={headerStyle.header}>
      <Link href={"www.netflix.com"}>
        <Image
          src={"/netflix.png"}
          alt="netflix"
          height={50}
          width={200}
          className={headerStyle.image}
        />
        <div className={headerStyle.rightHeader}>
          <select
            name="language"
            id="lang"
            defaultValue="en"
            className={headerStyle.select}
          >
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
          </select>
          <button className={headerStyle.signIn}>Sign In</button>
        </div>
      </Link>
    </header>
  );
}

export default Header;
