import React from "react";
import laura from "../../assets/laura.jpg";
import alle from "../../assets/alle3.jpg";
import rachel from "../../assets/rachel.jpg";
import clara from "../../assets/clara.jpeg";
import "./omos.scss";

export default function OmOs() {
  return (
    <main className="omOsMain">
      <section className="introSection">
        <div className="textContainer">
          <h1 className="title">Om VÆRQ</h1>
          <p className="description">
            VÆRQ er et kreativt designfællesskab drevet af søstrene Rachel og
            Clara og deres kusine Laura. Sammen forener vi vores forskellige
            fagligheder inden for kommunikation, design, arkitektur og
            håndværk. Vi kommer fra en familie fyldt med kunstnere, musikere og
            designere – og VÆRQ er vores måde at føre den kreative arv videre
            på.
          </p>
        </div>

        <div className="groupImageContainer">
          <img
            src={alle}
            alt="Teamet bag VÆRQ"
            className="groupImage"
          />
        </div>
      </section>

      <section className="teamSection">
        <div className="profile">
          <img
            src={rachel}
            alt="Rachel Qvist-Richards"
            className="profileImage"
          />
          <h2 className="profileName">Rachel Qvist-Richards</h2>
          <p className="role">Cand.comm. i performance design og byplanlægning</p>
          <p className="responsibility">Snedker og byggeansvarlig</p>
        </div>

        <div className="profile">
          <img
            src={laura}
            alt="Laura Qvist Jungersen"
            className="profileImage"
          />
          <h2 className="profileName">Laura Qvist Jungersen</h2>
          <p className="role">Arkitekt</p>
          <p className="responsibility">Tegneansvarlig</p>
        </div>

        <div className="profile">
          <img
            src={clara}
            alt="Clara Qvist-Richards"
            className="profileImage"
          />
          <h2 className="profileName">Clara Qvist-Richards</h2>
          <p className="role">Cand.mag. i kultur og kommunikation</p>
          <p className="responsibility">
            Kommunikation og ad. hoc. 
          </p>
        </div>
      </section>
    </main>
  );
}
