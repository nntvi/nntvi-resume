import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import AboutMe from "../src/components/sections/AboutMe";
import ResumeSection from "../src/components/sections/Resume";
import Skills from "../src/components/sections/Skills";
import Summary from "../src/components/sections/Summary";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);

const bio = `<p>
I am Nguyen Ngoc Tuong Vi, front-end developer. I have <b>2 years</b> of experience in
building dynamic and engaging user interfaces for web applications.
</p>`;
const IndexDark = () => {
  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/ava.jpg)" }}
          />
          <div className="title">Nguyen Ngoc Tuong Vi</div>
          <TypingAnimation />
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/nntvi"
            >
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/nntvi">
              <span className="fa fa-github" />
            </a>
            <br />
          </div>
          <div className="contact">
            <div>
              <span>
                Email:{" "}
                <a target="_blank" href="mailto:nntvi.2609@gmail.com">
                  nntvi.2609@gmail.com
                </a>
              </span>
            </div>
            <div className="phone">
              <span className="text">+84 37 953 1098</span>
            </div>
          </div>
          {/* profile buttons */}

          <div className="lnks">
            <a href="file/my-resume.pdf" className="lnk" target="pdf-frame">
              <span className="text">Download CV</span>
              <span className="ion ion-ios-cloud-download"></span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Summary />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
