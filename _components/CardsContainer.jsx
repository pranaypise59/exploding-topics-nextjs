"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Card from "./Card";
import useFetchData from "@/_utils/useFetchData";

const CardsContainer = ({selectedTimeFrame}) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  let url = process.env.REACT_APP_API_URL + `/explore`;
  if (currentUrl.includes("localhost")) {
    url = "http://localhost:8010/proxy" + `/explore`;
  }
  const { data, error, loading } = useFetchData(url);

  if (loading) {
    return <div class="skeleton-loader-container">
    <div class="skeleton-loader-background"></div>
    <div class="skeleton-loader-background"></div>
    <div class="skeleton-loader-background"></div>
    <div class="skeleton-loader-background"></div>
    <div class="skeleton-loader-background"></div>
    <div class="skeleton-loader-background"></div>
    </div>;
  }

  return (
    <>
      <div className="gridContainer">
        <div className="gridInstance">
          {data?.map((data, index) => {
            return(
            <Card key={data.keyword_name} {...data} index={index} selectedTimeFrame={selectedTimeFrame}/>
          )})}
        </div>
      </div>
    </>
  );
};

export default CardsContainer;
