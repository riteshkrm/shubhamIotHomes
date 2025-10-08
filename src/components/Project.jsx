"use client";
import Card from "./Card";
import Data from "@/data/iot_auto.json";

function Service() {
  return (
    <div  className="min-h-screen p-4">
      <h1 className="text-4xl font-bold">What we done</h1>
      <h2 className="text-2xl m-3">
        Projects.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Data.projects.map((project) => (
          <Card
            key={project.id }
            title={project.name}
            description={project.description}
            icon={project.category }
          />
        ))}
      </div>
    </div>
  );
}

export default Service;
