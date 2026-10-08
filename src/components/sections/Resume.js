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
                    <div className="name">MealSuite</div>
                    <div className="date">12/2025 - Present</div>
                  </div>
                  <i style={{ marginTop: "8px", display: "block" }}>
                    MealSuite is a North American foodservice technology
                    platform for senior living and healthcare, supporting
                    end-to-end operations across inventory, procurement,
                    budgeting, and dining services.
                  </i>
                  <div className="skills-list list">
                    <ul>
                      <li>
                        <div className="name">
                          Built complex inventory workflows with{" "}
                          <b>React</b>, <b>TypeScript</b>, and{" "}
                          <b>Material UI</b> in a Vite-based application
                          supporting large data tables, filtering, bulk
                          actions, and role-based behaviors across Inventory
                          On Hand and Worksheet.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Used <b>SWR</b> to manage server state, caching,
                          revalidation, and API-driven UI updates across
                          inventory and financial workflows.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Developed reusable frontend patterns for Financial
                          Insights, including dashboard sections, date-based
                          filtering, facility-level views, and form workflows
                          with <b>React Hook Form</b> and <b>Zod</b> for
                          managing financial configuration and validating user
                          inputs.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Used <b>Claude Code</b> and custom{" "}
                          <b>AI-assisted commands</b> for requirement
                          analysis, codebase exploration, implementation
                          planning, debugging, and code review.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Worked closely with Product, Design, Backend, and QA
                          teams to refine requirements, collaborate on UI
                          designs in Figma, and deliver production features.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <b>Impact:</b> Helped improve inventory and financial
                    workflows by providing clearer data visibility and more
                    efficient tools for day-to-day foodservice operations.
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
                    <div className="name">VietNam Blockchain Corporation</div>
                    <div className="date">07/2023 - 11/2025</div>
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
                    An internal AI assistant designed to improve communication
                    and knowledge sharing across BIWASE.
                  </i>
                  <div className="skills-list list">
                    <ul>
                      <li>
                        <div className="name">
                          Built real-time AI chat experiences with{" "}
                          <b>Next.js</b>, <b>React</b>, <b>TypeScript</b>, and{" "}
                          <b>TanStack Query</b>, handling streamed responses
                          and asynchronous message updates while keeping the UI
                          responsive.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Implemented virtual scrolling, message caching, and
                          incremental rendering to keep long chat histories
                          performant and avoid rendering the entire
                          conversation at once.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Structured reusable chat components and message
                          states to support loading, streaming, retry, and
                          completed-response scenarios without duplicating UI
                          logic.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Used <b>Tailwind CSS</b> and <b>Shadcn/ui</b> to
                          build consistent, reusable interface patterns while
                          keeping development speed high.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <b>Impact:</b> Made internal knowledge more accessible
                    through real-time chat assistance, voice input, and
                    multilingual support.
                  </div>
                </div>
              </div>

              <div className="col col-d-12 col-t-12 col-m-12">
                <div className="resume-item border-line-h">
                  <div className="name">
                    WaterSense – Real-time Water Network Monitoring
                  </div>
                  <br />
                  <i style={{ display: "block" }}>
                    WaterSense is a real-time monitoring platform for smart
                    water networks, providing visibility into sensors, devices,
                    and network conditions across multiple locations.
                  </i>
                  <div className="skills-list list">
                    <ul>
                      <li>
                        <div className="name">
                          Built interactive GIS monitoring features with{" "}
                          <b>React</b>, <b>TypeScript</b>, and{" "}
                          <b>Mapbox GL</b>, enabling users to track smart water
                          devices and inspect network conditions directly on
                          the map.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Integrated <b>Socket.IO</b> for real-time sensor,
                          device status, and alarm updates, allowing the UI to
                          reflect operational changes without requiring
                          full-page or full-dataset refreshes.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Used <b>React Query</b> to manage server state,
                          caching, and asynchronous data fetching across
                          monitoring dashboards and device views.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Built real-time dashboards with <b>ApexCharts</b> to
                          visualize sensor trends and operational metrics for
                          faster issue detection and monitoring.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div>
                    <b>Impact:</b> Centralized real-time device, sensor, and
                    network monitoring across multiple provinces, improving
                    issue visibility and operational response.
                  </div>
                </div>
              </div>

              <div className="col col-d-12 col-t-12 col-m-12">
                <div className="resume-item border-line-h">
                  <div className="name">
                    <b>CRM Biwase Binh Duong and Binh Phuoc</b>
                  </div>
                  <i style={{ display: "block" }}>
                    A customer and operations management platform built for
                    BIWASE, later expanded from Binh Duong to Binh Phuoc and
                    used across both regions.
                  </i>
                  <div className="skills-list list">
                    <ul>
                      <li>
                        <div className="name">
                          Built complex CRM workflows with <b>React</b>,{" "}
                          <b>TypeScript</b> and <b>React Query</b>, supporting
                          customer, service, and operational processes across
                          multiple modules.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Developed reusable form and table patterns for large
                          business workflows, reducing duplicated UI logic
                          across customer management, reporting, and
                          administration screens.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Integrated <b>Socket.IO</b> for real-time updates and
                          notifications, improving visibility into changes
                          without requiring manual page refreshes.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Built Excel and PDF export features with ExcelJS and
                          @react-pdf/renderer, allowing users to generate
                          operational reports directly from the system.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Integrated external business services including call
                          center, e-contract, and billing systems, connecting
                          CRM workflows with existing operational processes.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div>
                    <b>Impact:</b> Helped centralize customer and operational
                    workflows across multiple regions and connected key
                    business processes within a single platform.
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
                  <i style={{ marginTop: "8px", display: "block" }}>
                    Worked on multiple web applications across CRM, e-commerce,
                    and real estate, focusing on business management workflows
                    and user-facing features.
                  </i>
                  <div className="skills-list list">
                    <ul>
                      <li>
                        <div className="name">
                          Built business management features with{" "}
                          <b>React</b> and <b>TypeScript</b>, covering
                          customer, product, inventory, order, and
                          role-management workflows.
                        </div>
                      </li>
                      <li>
                        <div className="name">
                          Developed reusable UI with <b>Material UI</b>,{" "}
                          <b>Ant Design</b>, and <b>Tailwind CSS</b>, and
                          implemented features such as real-time messaging and
                          affiliate commission management.
                        </div>
                      </li>
                    </ul>
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
