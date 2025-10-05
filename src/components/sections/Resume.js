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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="name">VietNam Blockchain Corporation</div>
                    <div className="date">06/2023 - Present</div>
                  </div>
                  <br />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://bwe-ai.wetec.com.vn/"
                    className="name-project "
                  >
                    BiwaseAI – Internal AI Chat Platform
                  </a>
                  <br />
                  <i style={{ marginTop: "8px", display: "block" }}>
                    Next.js 15, React 19, TypeScript, TailwindCSS, ShadcnUI,
                    TanStack Query
                  </i>
                  <div className="skills-list list">
                    <ul>
                      <li>
                        <div className="name">
                          <b>AI-powered assistant</b> for internal communication
                          and knowledge sharing
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Real-time streaming</b> responses via native fetch
                          streams
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Performance optimization</b> with virtual
                          scrolling, message caching — 40% memory reduction
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Voice features</b> including recording, playback,
                          and translation
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Modular architecture</b> using Context API, custom
                          hooks, and Zod validation
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Enhanced UX</b> with dark mode, responsive layout,
                          and animated streaming
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    Delivered BIWASE's first AI-integrated chat platform,
                    combining streaming, audio, and multilingual features in a
                    single, scalable app.
                  </div>
                </div>
              </div>

              <div className="col col-d-12 col-t-12 col-m-12">
                <div className="resume-item border-line-h active">
                  <div className="name">
                    WaterSense – Real-time IoT Monitoring Platform
                  </div>
                  <br />
                  <i style={{ display: "block" }}>
                    React 18, TypeScript, Redux Toolkit, React Query,
                    TailwindCSS, ApexCharts, Mapbox GL, Socket.io
                  </i>
                  <div className="skills-list list">
                    <ul>
                      <li>
                        <div className="name">
                          <b>Enterprise IoT monitoring</b> for real-time
                          tracking and management of smart water devices across
                          multiple provinces
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Scalable architecture</b> using modular structure,
                          lazy loading, and TypeScript for type safety
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Hybrid state management</b> combining React Query
                          for optimal performance
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>GIS visualization</b> with Mapbox GL and Turf.js,
                          custom draw tools, and 3D map views
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Real-time dashboards</b> with Socket.io and
                          ApexCharts for dynamic sensor data visualization
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Enhanced UX</b> with HeroUI components, dark/light
                          mode, Framer Motion animations
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Multi-tenant support</b> with role-based routing
                          and export tools (PDF/XLSX)
                        </div>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div>
                    Deployed a robust, real-time water monitoring platform
                    combining GIS, analytics, and IoT visualization —
                    establishing the foundation for BIWASE's smart water
                    management ecosystem.
                  </div>
                </div>
              </div>

              <div className="col col-d-12 col-t-12 col-m-12">
                <div className="resume-item border-line-h">
                  <div className="name">
                    <b>CRM Biwase – Customer & Operation Management System</b>
                  </div>
                  <i style={{ display: "block" }}>
                    React 18, TypeScript, Redux Toolkit, React Query,
                    TailwindCSS, DaisyUI, Socket.io
                  </i>
                  <div className="skills-list list">
                    <ul>
                      <li>
                        <div className="name">
                          <b>Comprehensive CRM system</b> for managing
                          customers, contracts, maintenance, and reporting
                          across BIWASE's operations
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Modular architecture</b> with clear separation of
                          concerns and full TypeScript type-safety
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Secure authentication</b> using JWT with automatic
                          refresh and role-based routing
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Reusable UI components</b> with TailwindCSS and
                          DaisyUI for consistent, responsive UX
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Real-time updates</b> and notifications across
                          modules using Socket.io
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Data export & visualization</b> using React Table,
                          ApexCharts, Highcharts, ExcelJS, and
                          @react-pdf/renderer
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          <b>Performance optimization</b> with lazy loading,
                          Vite code-splitting, and React Query caching
                        </div>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div>
                    Launched BIWASE's first company-wide CRM
                    platform—modernizing customer management, improving
                    operational efficiency, and serving as a scalable foundation
                    for future systems.
                  </div>
                </div>
              </div>
              <div className="col col-d-12 col-t-12 col-m-12">
                <div className="resume-item border-line-h">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="name">ITBee Solutions</div>
                    <div className="date">01/2021 - 05/2023</div>
                  </div>

                  <div className="resume-sub-item">
                    <div className="name-project">CRM System</div>
                    <i style={{ display: "block" }}>
                      ReactJS, TypeScript, Socket, TailwindCSS, MUI
                    </i>
                    <div className="skills-list list">
                      <ul>
                        <li>
                          <div className="name">
                            <b>User management</b> - User, Employee, Customer
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Organization management</b> - Department, Role
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Inventory management</b> - Stock, Import, Export
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Product management</b> - Category, Product, Order
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Communication</b> - Real-time chat system
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="resume-sub-item">
                    <div className="name-project">E-commerce Platform</div>
                    <i style={{ display: "block" }}>
                      ReactJS, JavaScript, Ant Design
                    </i>
                    <div className="skills-list list">
                      <ul>
                        <li>
                          <div className="name">
                            <b>Product management</b> for affiliate and
                            e-commerce websites
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Human resource management</b> system
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Ranking system</b> for performance tracking
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Commission management</b> and tracking
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="resume-sub-item">
                    <div className="name-project">Real Estate Platform</div>
                    <i style={{ display: "block" }}>ReactJS, TypeScript, MUI</i>
                    <div className="skills-list list">
                      <ul>
                        <li>
                          <div className="name">
                            <b>Marketplace platform</b> for real estate industry
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Real-time messaging</b> system
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Recommendation system</b> for property matching
                          </div>
                        </li>
                        <li>
                          <div className="name">
                            <b>Advanced analytics</b> and reporting features
                          </div>
                        </li>
                      </ul>
                    </div>
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
