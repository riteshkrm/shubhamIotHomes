import React from "react";
import Card from "./Card";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent shadow-2xl text-center text-white p-4">
      <h1 className="text-3xl font-bold underline">About Page</h1>
      <p>This is the about page of the application.</p>
      {/* <Card /> */}
    </div>
  );
}

export default About;
