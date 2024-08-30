import React from "react";

import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

import "../../styles/miembros/miembros.css";

const MemberCard = ({ profilePic }) => {
  return (
    <div className="memberCard">
      <img className="memberPic" src={profilePic} />

      <h4>Mateo Vargas Rojas</h4>
      <p className="memberPosition">
        Director de la Sociedad Entomlogica Crucenia
      </p>
      <p className="memberDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sit amet libero sit amet arcu auctor facilisis. Praesent maximus leo
        vitae luctus luctus. Aenean vulputate vel quam luctus luctus. Nam ante
        dolor, commodo et consequat pellentesque, pellentesque non sem. Vivamus
        sit amet viverra nisl
      </p>
      <div className="memberContact">
        <div className="iconInfo">
          <PiPhoneCallFill />
          <p>+1012 3456 789</p>
        </div>
        <div className="iconInfo">
          <MdEmail />
          <p>demo@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
