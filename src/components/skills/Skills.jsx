import "./style.css";

const Skills = () => {
  return (
    <div id="skillsContainer">
      <div className="internalSkillsContainer">
        <h2>Skills.</h2>
        <div className="skillsContainer">
          <img
            src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681291382/portofolio/HTML_vc8aab_vcqf7e.svg"
            alt="html logo"
          />
          <img
            src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681291206/portofolio/CSS_asozpg_dvmdjm.svg"
            alt="css logo"
          />
          <img
            src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681291401/portofolio/JavaScript_em95p5_idueih.svg"
            alt="js logo"
          />
          <img
            src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681291429/portofolio/React-Dark_fcgj0e_lvtl6r.svg"
            alt="react logo"
          />
          <img
            src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681291363/portofolio/Redux_z2sjis_ediowl.svg"
            alt="redux logo"
          />
          <img
            src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681291343/portofolio/TypeScript_xcxbb0_w61a3f.svg"
            alt="ts logo"
          />
        </div>
        <div className="skillsContainerTwo">
          <img
            src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681291359/portofolio/NodeJS-Dark_twgg7w_uzqamd.svg"
            alt="node logo"
          />
          <img
            src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681291354/portofolio/ExpressJS-Dark_pnaxbn_k1dzua.svg"
            alt="express logo"
          />
          <img
            src="https://res.cloudinary.com/dkdtopojb/image/upload/v1681291350/portofolio/MongoDB_jkoclz_bk6nk1.svg"
            alt="mongo logo"
          />
        </div>
        <div className="skillsContentText">
          I have progressed from using <span>HTML</span>, <span>CSS</span>, and
          vanilla <span>JS</span> to building more sophisticated applications
          with advanced frontend technologies such as <span>React</span> and{" "}
          <span>Redux</span>. Furthermore, I have expanded my skill set to
          include backend technologies such as <span>Node</span>,{" "}
          <span>Express</span>, and <span>MongoDB</span>. However, I view this
          as only the beginning of my journey towards excellence in web
          development. I am committed to constantly improving my knowledge and
          staying up-to-date with the latest industry trends and technologies in
          order to provide top-quality solutions to clients.
        </div>
      </div>
    </div>
  );
};

export default Skills;
