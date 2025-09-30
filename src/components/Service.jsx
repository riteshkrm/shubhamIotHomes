'use client'
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Data from "@/data/iot_auto.json";

function Service({ title, description }) {
  const [service, setService] = useState([]);
  useEffect(() => {
    setService(Data);
  }, []);         

  return (
    <div className="min-h-screen m-4">
      <h1 className="text-4xl font-bold">What we do</h1>
      <h2 className="text-2xl m-3">
        We provide top-notch services to our clients.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Service;
