"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { cardsData } from "../_utils/data";
import useFetchData from "@/_utils/useFetchData";

const CardsContainer = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  let url = process.env.REACT_APP_API_URL + `/explore`;
  if (currentUrl.includes("localhost")) {
    url = "http://localhost:8010/proxy" + `/explore`;
  }
  const { data, error, loading } = useFetchData(url);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="gridContainer">
        <div className="gridInstance">
          {data?.map((data) => {
            return(
            <Card key={data.keyword_name} {...data} />
          )})}
        </div>
      </div>
    </>
  );
};

export default CardsContainer;
