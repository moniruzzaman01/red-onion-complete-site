import React from "react";
import "./OurSpeciality.css";
import image1 from "../../images/New folder/adult-blur-blurred-background-687824.png";
import image2 from "../../images/New folder/chef-cook-food-33614.png";
import image3 from "../../images/New folder/architecture-building-city-2047397.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faBus,
  faTruck,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const OurSpeciality = () => {
  return (
    <div className="speciality-container container">
      <h2>Why you choose us</h2>
      <p>
        Barton waited twenty always repair in within we do.An delighted
        offending cutiodity my is dashwoods at. Boy prosperous increasing
        surrounded.
      </p>
      <div className="speciality-items">
        <div className="speciality-item">
          <div className="speciality-img-container">
            <img src={image1} alt="" />
          </div>
          <div className="contents-container">
            <div className="icon">
              <FontAwesomeIcon icon={faBus} />
            </div>
            <div className="contents">
              <p>Fast Delivery</p>
              <span>
                Keep your system in sync eith automated web hook based
                notifications each timelink is paid and how we dream about our
                future.
              </span>
              <span className="seemoreBtn">
                See more{" "}
                <span>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                  ></FontAwesomeIcon>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="speciality-item">
          <div className="speciality-img-container">
            <img src={image2} alt="" />
          </div>
          <div className="contents-container">
            <div className="icon">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="contents">
              <p>A Good Auto Responder</p>
              <span>
                Keep your system in sync eith automated web hook based
                notifications each timelink is paid and how we dream about our
                future.
              </span>
              <span className="seemoreBtn">
                See more{" "}
                <span>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                  ></FontAwesomeIcon>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="speciality-item">
          <div className="speciality-img-container">
            <img src={image3} alt="" />
          </div>
          <div className="contents-container">
            <div className="icon">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <div className="contents">
              <p>Home Delivery</p>
              <span>
                Keep your system in sync eith automated web hook based
                notifications each timelink is paid and how we dream about our
                future.
              </span>
              <span className="seemoreBtn">
                See more{" "}
                <span>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                  ></FontAwesomeIcon>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;
