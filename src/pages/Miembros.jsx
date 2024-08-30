import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import MemberCard from "../components/miembros/MemberCard";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import "../styles/miembros/miembros.css";

const Miembros = () => {
  return (
    <div>
      <Header />
      <section className="miembrosPage">
        <h1>Miembros</h1>
        <div className="membersList">
          <MemberCard profilePic={profile3} />
          <MemberCard profilePic={profile3} />
          <MemberCard profilePic={profile3} />
          <MemberCard profilePic={profile3} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Miembros;
