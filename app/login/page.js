import axios from "axios";
import Link from "next/link";
import React from "react";
import styles from "../login/styles.module.css";

export const dynamic = "force-dynamic";
const page = async ({}) => {
  const session = null;
  //if (!session) throw new Error("Auth is required to access this resource");
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div>
      <Link href="/dashboard" className={styles.login}>
        Login page
      </Link>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default page;
