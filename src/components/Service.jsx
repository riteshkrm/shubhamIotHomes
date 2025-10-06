'use client'
import Card from "./Card";
import Data from "@/data/iot_auto.json";

function Service() {
    
  return (
    <div id="service" className="min-h-screen p-4 ">
      <h1 className="text-4xl font-bold">What we do</h1>
      <h2 className="text-2xl m-3">
        We provide top-notch services to our clients.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {Data.services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Service;
