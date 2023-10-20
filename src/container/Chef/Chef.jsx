import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word "/>
      <h1 className="headtext__cormorant">What We Belive In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur</p>
        <p className="p__opensans">
          Ipsum voluptates, similique dolorem optio maxime deleniti alias minus
          fugit odio perferendis porro fugiat officiis incidunt quas voluptatem
          iure nesciunt, natus quam.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
