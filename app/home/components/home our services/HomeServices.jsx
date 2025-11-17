import React from "react";
import HomeServiceItem from './HomeServiceItem'
import Service1 from './service-1.jpg'
import Service2 from './service-2.jpg'
import Service3 from './service-3.jpg'
import Service4 from './service-4.jpg'

function HomeServices() {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 class="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div class="row">
          <HomeServiceItem
            title="Fastest Door Delivery"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img={Service1.src}
            icon="faTruck"
          />
          <HomeServiceItem
            title="Fresh Coffee Beans"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img={Service2.src}
            icon="faCoffee"
          />
          <HomeServiceItem
            title="Online Table Booking"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img={Service3.src}
            icon="faAward"
          />
          <HomeServiceItem
            title="Best Quality Coffee"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img={Service4.src}
            icon="faTable"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
