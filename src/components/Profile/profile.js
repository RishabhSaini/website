import { Typography } from "@material-ui/core";
import React from "react";
import potrait from "../../assets/images/me.jpg";
import CustomTimeline from "../Timeline/timeline";

import "./profile.css";

const profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Rishabh</Typography>
        <Typography className="title">Title</Typography>
      </div>
      <figure className="profile_image">
        <img src={potrait} alt="Not found" />
      </figure>
      <div className="profile_information">
        <CustomTimeline></CustomTimeline>
      </div>
    </div>
  );
};

export default profile;
