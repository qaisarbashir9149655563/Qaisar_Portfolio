import React from "react";

import section5Styles from "./section5.module.scss";
import CarouselItem from "components/carousel/carousel";
function renderSection5(props) {
  const workExperience = [
    {
      src: "./assets/flowstudio1.png",
      title: "Form builder Tool",
    },
    {
      src: "./assets/JsonSchema.png",
      title: "JSON Schema",
    },
    {
      src: "./assets/RuleBuilder.png",
      title: "Rule Builder",
    },
    {
      src: "./assets/languagebundle.png",
      title: "Language Bundle",
    },
    {
      src: "./assets/convertToChatbot.png",
      title: "Convert To Chatbot",
    },
    {
      src: "./assets/versionhistory.png",
      title: "Version History",
    },
  ];
  const udacityCertificates = [
    {
      src: "./assets/udacityJsCertificate-1.png",
      title: "JSON Schema",
    },
    {
      src: "./assets/udacityDSAcertificate-1.png",
      title: "Form builder Tool",
    },
  ];
  return (
    <div className={section5Styles.section5}>
      <div className={section5Styles.flex_col}>
        {/* <div className={section5Styles.flex_col1}> */}
        <div className={section5Styles.flex_col2}>
          <button className={section5Styles.btn}>Experience</button>
          <h3 className={section5Styles.subtitle}>
            Here is a quick summary of my most recent experiences:
          </h3>
        </div>
        <div className={section5Styles.group}>
        <div
            className={section5Styles.content_box}
            style={{
              "--src": `url(${"/assets/a872dd9a940ea0dcefdb3f1392b29a5b.svg"})`,
            }}
          >
            <div className={section5Styles.flex_row}>
              <div className={section5Styles.group1}>
                <h3 className={section5Styles.subtitle1}>
                  Software Development Engineer &rarr; Skor Technologies
                </h3>
                <h5 className={section5Styles.highlight2}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Spearheaded the design and development of a responsive Skor Card website, leveraging React.js and NodeJs to enhance user experience and
                        scalability, enabling seamless access for over 3 million users to participate in referral programs and earn rewards.
                      </td>
                    </tr>
                  </table>
                </h5>
              </div>
              <h5 className={section5Styles.highlight4}>
                <b>Dec 2024 - Present</b>
              </h5>
            </div>
          </div>
        </div>
        <div className={section5Styles.group}>
          <div
            className={section5Styles.content_box}
            style={{
              "--src": `url(${"/assets/a872dd9a940ea0dcefdb3f1392b29a5b.svg"})`,
            }}
          >
            <div className={section5Styles.flex_row}>
              <div className={section5Styles.group1}>
                <h3 className={section5Styles.subtitle1}>
                  Product Development Engineer 1 &rarr; Phenom
                </h3>
                <h5 className={section5Styles.highlight2}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Spearheaded the design and implementation of
                        Form builder, enabling over 200+ clients to create
                        customizable job application forms; streamlined
                        candidate information submission processes resulting in
                        a noticeably increased user satisfaction rate.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Developed customizable job application forms
                        using JSON schema, created a new library named as json
                        schema form to be able to support customizable forms and
                        integrated storybook.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Developed a Rule Engine to dynamically hide,
                        show, disable, or require fields or steps in an
                        application form based on various conditions in a
                        microfrontend architecture, collaborating with different
                        teams to ensure seamless integration.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Added a Language bundle to support multiple
                        languages for each form using the OpenAI API, which
                        automatically converts the content into different
                        languages. This reduces the human effort required to
                        render forms in multiple languages by up to 90%.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Extracted and served individual component
                        schemas from complex JSON schema structures based on
                        configuration, enabling support for ChatBot forms.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Developed and maintained new services and REST
                        APIs using Node.js, Express, and PostgreSQL to store the
                        version history of customizable forms.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Worked with Microfrontend technology to develop
                        a mini version of the Flow Studio Config tool for easy
                        configuration management. This significantly reduced
                        human effort, minimizing manual work by up to 60%.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Worked on Webpack plugins to generate hashes for
                        class names, preventing them from overriding styles
                        between child and parent apps, thereby improving
                        optimization by 80% in microfrontend technology.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Worked with Jenkins and AWS to manage CDN paths
                        and JSON schema for forms, and utilized Grafana for
                        monitoring key performance metrics to drive
                        data-informed decisions.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Worked on features that enable users to create
                        custom workflows within the form builder.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Developed a standalone Node.js server from
                        scratch, incorporating PostgreSQL and the Express
                        library to support shareable forms.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        &raquo; Developed and maintained responsive web
                        applications using HTML, CSS, JavaScript, and React ,
                        applied SEO principles for better website rating and
                        search score.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Worked in the Product teams of Maserati and led
                        the development of dynamic user interfaces with React,
                        enhancing user engagement and satisfaction of more than
                        200+ clients.
                      </td>
                    </tr>
                  </table>
                </h5>
              </div>
              <h5 className={section5Styles.highlight4}>
                <b>Mar 2022 - Nov 2024</b>
              </h5>
            </div>
            <h3 className={section5Styles.subtitle1}>
              Understand the above points &rarr; Here
            </h3>
            <CarouselItem carouselItems={workExperience} />
          </div>
        </div>

        <div className={section5Styles.group}>
          <div
            className={section5Styles.content_box}
            style={{
              "--src": `url(${"/assets/b7b1a31a27f83bfc803a6c85066758c6.svg"})`,
            }}
          >
            <div className={section5Styles.flex_row}>
              <div className={section5Styles.group1}>
                <h3 className={section5Styles.subtitle1}>
                  Full Stack Web Development | Internship | Udacity &rarr;
                  Phenom
                </h3>
                <h5 className={section5Styles.highlight2}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Designed responsive front-end interfaces while
                        optimizing back-end functionality ; these enhancements
                        cut average response time by 40% , leading to increased
                        satisfaction scores from end-users during testing
                        phases.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Technical Stack learnt: HTML/CSS, Node.js,
                        React.js, Webpack, Babel, Git, JavaScript, TypeScript,
                        Redux, Java, and PostgreSQL. Also worked with UI
                        libraries like Material UI and Ant Design to build
                        responsive web apps.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Participated in various coding contests
                        organized by the platform, extensively utilizing
                        React.js features such as Lazy Loading, Higher-Order
                        Components, React Hooks, Error Handling, and
                        React-Routers. Developed projects involving RBAC,
                        Keycloak authentication, asynchronous API calls, and
                        core JavaScript libraries.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Collaborated with designers to create visually
                        appealing and user-friendly web pages, enhancing overall
                        user experience.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Utilized React to develop dynamic and
                        interactive UI components, improving user engagement by
                        25%.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Applied Agile methodologies to manage tasks and
                        deliver features incrementally, contributing to improved
                        team efficiency.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Worked on various projects like Code Editor and
                        Scripted Notes, Landing Page, Weather Journal App, Image
                        processing API, Build a storefront Backend, Todo App,
                        Calculator
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Full Stack Web Development along with Problem
                        Solving (Data structures and Algorithms).
                      </td>
                    </tr>
                  </table>
                </h5>
              </div>

              <h5 className={section5Styles.highlight4}>
                <b>Jan 2022 - Mar 2022</b>
              </h5>
            </div>
            <h3 className={section5Styles.subtitle1}>
              Udacity Certificates &rarr; Here
            </h3>
            <CarouselItem carouselItems={udacityCertificates} />
          </div>
        </div>

        <div className={section5Styles.group}>
          <div
            className={section5Styles.content_box}
            style={{
              "--src": `url(${"/assets/95553405fd56f1dfc958b21d8a055f47.svg"})`,
            }}
          >
            <div className={section5Styles.flex_row}>
              <div className={section5Styles.group}>
                <h3 className={section5Styles.subtitle1}>
                  Full Stack Web Development | Internship &rarr; Solitaire
                  Infosys
                </h3>
                <h5 className={section5Styles.highlight2}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Assisted in the development of web applications
                        using HTML, CSS, and JavaScript.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Collaborated with senior developers to implement
                        responsive design principles, ensuring compatibility
                        across multiple devices.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Participated in code reviews and contributed to
                        improving code quality and performance.
                      </td>
                    </tr>
                  </table>
                </h5>
              </div>

              <h5 className={section5Styles.highlight4}>
                <b>Jun 2021 - Dec 2021</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default renderSection5;
