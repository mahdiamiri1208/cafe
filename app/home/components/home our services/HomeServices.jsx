import React from "react";
import HomeServiceItem from "./HomeServiceItem";

export default function HomeServices({ services = [] }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6 mb-5" key={service.id ?? service.title}>
              <HomeServiceItem
                title={service.title}
                desc={service.desc}
                img={service.img}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
