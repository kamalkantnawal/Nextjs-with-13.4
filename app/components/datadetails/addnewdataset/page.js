"use client";
import Link from "next/link";
import { React, useState } from "react";

import Popupwindow from "../../../components/commonutilities/popupwindow";
const styles = {
  wrapper: `flex justify-center items-center min-h-screen`,
  form: "w-full max-w-sm mx-auto",
  formlabel: "block mb-2",
  input: "w-full py-2 px-3 border border-gray-300 rounded",
  mb3: "mb-3",
};

function Adding_newData(props) {
  // Initializing state variables for dataset name, data type, and data description
  const [datasetname, setdatasetname] = useState("");
  const [datatype, setdatatype] = useState("");
  const [datadescription, setdataCondetails] = useState("");

  //// Initializing state variables for save data
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { datasetname, datatype, datadescription };

    fetch("http://localhost:3000/api/mariadb", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        setdatasetname("");
        setdatatype("");
        setdataCondetails("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const isFormValid = datasetname && datatype && datadescription;

  const handleChange = (e) => {
    if (e.target.name === "datasetname") {
      setdatasetname(e.target.value);
    } else if (e.target.name === "datatype") {
      setdatatype(e.target.value);
    } else if (e.target.name === "datadescription") {
      setdataCondetails(e.target.value);
    }
  };

  return (
    <div className="wrapper">
      <div className="mx-auto">
        <h1 className="w-full max-w-md mx-auto text-4xl py-5">
          Adding New Dataset Details{" "}
        </h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="datasetname" className={styles.formlabel}>
              datasetname
            </label>
            <input
              className={styles.input}
              type="text"
              value={datasetname}
              onChange={handleChange}
              id="datasetname"
              name="datasetname"
              aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>
              Data Type
            </label>
            <input
              className={styles.input}
              type="text"
              value={datatype}
              onChange={handleChange}
              name="datatype"
              id="datatype"
              aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>
              Dataset connectivity details
            </label>
            <input
              className={styles.input}
              type="phone"
              value={datadescription}
              onChange={handleChange}
              name="datadescription"
              id="datadescription"
              required
            />
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            onClick={openPopup}
            className="bg-black text-white py-2 px-8 rounded-full flex items-center justify-center gap-2 cursor-pointer"
          >
            <a>OK</a>
          </button>
          <input />
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-slate-200 p-6 rounded-md shadow-md">
                <p>New Dataset created</p>
                <div className="flex justify-center mt-4">
                  <Link href="/dashboard">
                    <button className="px-6 py-2 text-white bg-green-500 rounded">
                      OK
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </form>
        <Popupwindow />
      </div>
    </div>
  );
}

export default Adding_newData;
