import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="col col-d-12 col-t-12 col-m-12">
                <div className="resume-item border-line-h active">
                  <div className="date">01/2022 - Present</div>
                  <div className="name">CRM system</div>
                  <div className="company">Viet Nam Blockchain Coporation</div>
                  <p>
                    The project we're currently developing is a comprehensive
                    Customer Relationship Management (CRM) system, specifically
                    designed to cater to the needs of a water supply company
                    operating within Binh Duong province. Our goal is to
                    streamline the management of various business aspects, and
                    our system offers a wide array of features, including the
                    following:
                  </p>

                  <ul>
                    <li>- Login and automatic token refresh applied</li>
                    <li>
                      - Use React Query to manage and update data at management
                      functions: customer/user/billings/category/meter/area…
                      management
                    </li>
                    <li>- Use Yup and Formik to validate forms</li>
                    <li>- Export pdf, excel for reporting functionality</li>
                  </ul>
                  <br />
                  <div>
                    <div className="name">Technologies: </div>
                    ReactJS - Javascript - Socket - TailwindCss - MUI
                  </div>
                </div>
              </div>
              <div className="col col-d-6 col-t-12 col-m-12">
                <div className="resume-item border-line-h">
                  <div className="date">01/2022 - 05/2023</div>
                  <div className="name">CRM system</div>
                  <div className="company">ITBee Solutions</div>
                  <p>
                    Working on a CRM system, which featuring various type of
                    management
                  </p>
                  <ul>
                    <li>- User, Employee, Customer</li>
                    <li>- Department, Role</li>
                    <li>- Stock, Import, Export</li>
                    <li>- Category, Product, Order</li>
                    <li>- Chat... many more</li>
                  </ul>
                  <br />
                  <div>
                    <div className="name">Technologies: </div>
                    ReactJS - Javascript - Socket - TailwindCss - MUI
                  </div>
                </div>
              </div>

              <div className="col col-d-6 col-t-12 col-m-12">
                <div className="resume-item border-line-h">
                  <div className="date">08/2021 - 01/2022</div>
                  <div className="name">E-commerce</div>
                  <div className="company">ITBee Solutions</div>
                  <p>
                    Working on many projects of affiliate, e-commerce websites
                  </p>
                  <ul>
                    <li>- Product management</li>
                    <li>- Human resource management</li>
                    <li>- Ranking system</li>
                    <li>- Commission</li>
                    <li>- ... many more</li>
                  </ul>
                  <br />
                  <div>
                    <div className="name">Technologies: </div>
                    ReactJS - Javascript - Ant
                  </div>
                </div>
              </div>

              <div className="col col-d-12 col-t-12 col-m-12">
                <div className="resume-item border-line-h">
                  <div className="date">01/2021 - 07/2021</div>
                  <div className="name">Real-estate</div>
                  <div className="company">ITBee Solutions</div>
                  <p>
                    This product provides a marketplace and workplace for the
                    real-estate industry, including blogs, real-time messaging,
                    recommendation system, advanced analytics and reports
                  </p>
                  <br />
                  <div>
                    <div className="name">Technologies: </div>
                    ReactJS - Typescript - MUI
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h">
                <div className="date">2016 - 2020</div>
                <div className="name">
                  Ho Chi Minh University of Nature Resources and Environment
                </div>
                <div className="company">Ho Chi Minh City</div>
                <p>{`Bachelor's`} Degree in Information Technology</p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;
