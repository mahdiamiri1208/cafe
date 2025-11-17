import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

function HomeServiceItem({ title, desc, img, icon }) {
  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <img class="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div class="col-sm-7">
          <h4
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <div
              style={{
                background: "#da9f5b",
                borderRadius: "100%",
                height: "45px",
                width: "45px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon
                icon={Icons[icon]}
                style={{ fontSize: "1.2rem"}}
              />
            </div>

            <p className="ml-3">{title}</p>
          </h4>
          <p class="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeServiceItem;
