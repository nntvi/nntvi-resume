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
                  <div className="name">JavaScript (ES6+)</div>
                </li>
                <li className="border-line-h">
                  <div className="name">TypeScript</div>
                </li>
                <li className="border-line-h">
                  <div className="name">HTML5, CSS3</div>
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
                <div className="name">Frameworks</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">React</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Next.js</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Vite</div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-paint-brush" />
                </div>
                <div className="name">UI & Styling</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Material UI, Ant Design, Shadcn/ui</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Tailwind CSS</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Mapbox GL, ApexCharts</div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-database" />
                </div>
                <div className="name">Data & State</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">TanStack Query (React Query), SWR</div>
                </li>
                <li className="border-line-h">
                  <div className="name">React Hook Form, Zod</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Socket.IO, streaming responses</div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-12 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-wrench" />
                </div>
                <div className="name">Tools</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Git, VS Code</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Claude Code, Figma</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Jira</div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
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
                  <div className="name">English: fluent verbal communication</div>
                </li>
                <li className="border-line-h">
                  <div className="name">Vietnamese: native</div>
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
