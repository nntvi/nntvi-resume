import { Fragment } from "react";

const Slice = () => (
  <div className="slice">
    <div className="bar" />
    <div className="fill" />
  </div>
);

const Skills = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">My Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <div className="name">Programming Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">JavaScript</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Typescript</div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-laptop" />
                </div>
                <div className="name">Web Front-end Technologies</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">ReactJS</div>
                </li>
                <li className="border-line-h">
                  <div className="name">HTML/CSS</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-d-6 col-t-12 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-wrench" />
                </div>
                <div className="name">Dev tools</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Git, VS Code</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Jira, Trello</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-d-6 col-t-12 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-language" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">
                    English: read and understand documents. Good communication
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Vietnamese: native speaker</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;
