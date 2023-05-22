"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";
const styles = {};

const fetchingData = async () => {
  const url = "http://localhost:3000/api/projectList";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
function Projectlist() {
  const { data, error } = useSWR("projectName", fetchingData);
  if (error) return "An Error is accored";
  if (!data) return "Loading";
  return (
    <div>
      {data.map((projectobj, index) => (
        <div key={index} className="flex gap-2 px-4 py-1">
          <Link href={`/Project-Details/${projectobj.projectName}`}>
            {" "}
            {projectobj.projectName}{" "}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Projectlist;
