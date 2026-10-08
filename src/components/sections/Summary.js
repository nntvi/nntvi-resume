import { Fragment } from "react";
const Summary = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Summary</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="text-box">
              I build data-heavy interfaces for enterprise products with{" "}
              <b>React</b>, <b>Next.js</b>, and <b>TypeScript</b>, from
              inventory and financial workflows to real-time GIS monitoring and
              AI chat platforms.
            </div>
          </div>

          <div
            className="col col-d-12 col-t-12 col-m-12 border-line-v"
            style={{ paddingTop: "0px" }}
          >
            <div className="text-box">
              I care about the parts users never see but always feel: reusable
              components, predictable server state, and UIs that stay fast with
              large tables, live updates, and long chat histories.
            </div>
          </div>

          <div
            className="col col-d-12 col-t-12 col-m-12 border-line-v"
            style={{ paddingTop: "0px" }}
          >
            <div className="text-box">
              I work closely with Product, Design, Backend, and QA to turn
              requirements into features that make everyday work simpler for
              users, and I use AI tools like <b>Claude Code</b> to move faster
              without cutting corners.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Summary;
