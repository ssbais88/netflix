"use client";
import React, { useEffect, useState } from "react";
import homeStyle from "@/app/styles/home.module.css";
import { Button, TextField } from "@mui/material";
import LeftBlock from "./LeftBlock";
import axios from "axios";
import Loading from "../loading";
import RightBlock from "./RightBlock";

function HomePage() {
  const subModule = {
    header: new String(),
    subHeader: new String(),
    videoLink: new String(),
  };
  const [data, setData] = useState({
    header: new String(),
    subHeader: new String(),
    paragraph: new String(),
    tvModule: subModule,
    offlineModule: subModule,
  });
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/dashboard-data")
      .then((response) => {
        setData(response.data[0]);
        setLoader(false);
        console.log(response);
      })
      .catch((err) => {
        console.log("ERR ==> ", err);
        setLoader(false);
      });
  }, []);

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <>
          <div className={homeStyle.main}>
            <h1 className={homeStyle.h1}>{data.header}</h1>
            <p className={homeStyle.p}>{data.subHeader}</p>
            <p className={homeStyle.p}>{data.paragraph}</p>
            <div className={homeStyle.emailBtn}>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                color="primary"
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "red",
                  height: "3.5rem",
                  marginLeft: "0.5rem",
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
          <LeftBlock data={data.tvModule} />
          <RightBlock data={data.offlineModule} />
          <LeftBlock data={data.tvModule} marginStyle={10} />
        </>
      )}
    </>
  );
}

export default HomePage;
