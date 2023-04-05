import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">My project</div>
        {/* content */}
        <div className="row grid-items">
          <div className="col col-d-12 col-t-12 col-m-12 grid-item photo border-line-h">
            <div className="text-box">
              This is a project to clone the user page of an e-commerce platform{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vi-clone-shopee.vercel.app"
                className="name-project"
              >
                Shopee
              </a>
            </div>
          </div>

          <div className="col col-d-12 col-t-12 col-m-12 grid-item photo border-line-h">
            <div className="text-box">
              Technologies: REST API, ReactJs, Typescript, React Hook Form, Yup,
              React Query, Vite, ESLint, Prettier, React Helmet
            </div>
          </div>
          <div className="col col-d-12 col-t-12 col-m-12 grid-item photo border-line-h">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="name">Functions include: </div>
              </div>
              <ul>
                <li>
                  <div className="name">
                    Login management with JWT with automatic token refresh
                    applied
                  </div>
                </li>
                <li>
                  <div className="name">
                    Validate form with Yup and React Hook Form
                  </div>
                </li>
                <li>
                  <div className="name">
                    Synchronize pagination, filtering, product search on URLs to
                    easily share results between machines
                  </div>
                </li>
                <li>
                  <div className="name">
                    Asynchronous state management with React Query
                  </div>
                </li>
                <li>
                  <div className="name">Code Splitting</div>
                </li>
                <li>
                  <div className="name">
                    Optimize build file size analysis for good performance
                  </div>
                </li>
                <li>
                  <div className="name">SEO with React Helmet</div>
                </li>
                <li>
                  <div className="name">
                    Separate private route and public route
                  </div>
                </li>
                <li>
                  <div className="name">
                    Website:{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://vi-clone-shopee.vercel.app"
                      className="name-project"
                    >
                      https://vi-clone-shopee.vercel.app
                    </a>
                  </div>
                </li>
                <li>
                  <div className="name">
                    Github:{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/nntvi"
                      className="name-project"
                    >
                      https://github.com/nntvi
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/works/work1.jpg" className="has-popup-image">
                  <img src="images/works/work1.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-image" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="images/works/work1.jpg"
                  className="name has-popup-image"
                >
                  ZOSS Clothing Logo
                </a>
                <div className="category">Image</div>
              </div>
            </div>
          </div> */}
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;
