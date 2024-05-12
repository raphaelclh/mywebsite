import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./generic.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineWork, MdSchool } from "react-icons/md";
import { Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { TextSizeProps } from "../app/page";

interface TimelineProps {
  textSize: TextSizeProps;
}

const Timeline: React.FC<TimelineProps> = ({ textSize }) => {
  const textWithoutMargin = { margin: "0 auto !important" };
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Apr 2024 - Present"
        dateClassName="timeline-date"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <Text sx={textWithoutMargin} fontWeight={"bold !important"}>
          Senior Developer @ Standard Chartered
        </Text>
        <Text sx={textWithoutMargin}>Singapore</Text>

        <UnorderedList>
          <ListItem>
            <Text>
              Led a team of 6 in automating processes that deliver
              infrastructure to users within a single day, streamlining
              operations and enhancing productivity.
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Developed database state management systems using PostgreSQL to
              manage infrastructure provisioning and track the status of virtual
              machines for each team.
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Created an Azure DevOps pipeline extension in NodeJS, integrating
              various internal tooling for efficient infrastructure
              provisioning.
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Designed a YAML manifest validator in NodeJS that checks the
              compliance of each application team's infrastructure requirements
              against company standards.
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Collaborated with the Puppet Automation Team to integrate Puppet
              functionalities into Azure DevOps pipelines, further automating
              and securing deployment processes.
            </Text>
          </ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Aug 2022 - Mar 2024"
        dateClassName="timeline-date"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <Text sx={textWithoutMargin} fontWeight={"bold !important"}>
          Junior Developer @ Standard Chartered
        </Text>
        <Text sx={textWithoutMargin}>Singapore</Text>

        <UnorderedList>
          <ListItem>
            <Text>
              Engineered a responsive React application, enhancing data
              accessibility and user experience by integrating Elasticsearch for
              dynamic data querying.
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Developed and implemented a bank-wide Azure DevOps CI/CD YAML
              template, standardizing development processes and significantly
              reducing deployment errors.
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Innovated a base template integrating compliance checks,
              dynamically selecting deployment stacks based on user inputs,
              thereby improving flexibility and security.
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Created a Node.js-based Azure DevOps pipeline task extension for
              artifact integrity verification during continuous deployment
              stages.
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Led the transition of application teams from Bitbucket and Jenkins
              to Azure DevOps, minimizing downtime and enhancing development
              workflow.
            </Text>
          </ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2021 - July 2022"
        dateClassName="timeline-date"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <Text sx={textWithoutMargin} fontWeight={"bold !important"}>
          Software Engineer (Frontend) @ Envision Digital
        </Text>
        <Text sx={textWithoutMargin}>Singapore</Text>

        <UnorderedList>
          <ListItem>
            <Text>
              Implementing unit testing for various react components using Jest
              and React-Testing libraries
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Responsible for handling multiple change requests in the front-end
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Build various react components in typescript using envision&apos;s
              custom libraries
            </Text>
          </ListItem>
          <UnorderedList pl={4}>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Data visualization and forecast graphs
              </Text>
            </ListItem>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Building Alert dashboard to monitor IoT devices
              </Text>
            </ListItem>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Configuration web page for recommender system
              </Text>
            </ListItem>
          </UnorderedList>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Provide bug fixes support in web application
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Contribute to Envision UI library
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Responsible for deployment of various services in the pipeline
            </Text>
          </ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2020 - May 2021"
        dateClassName="timeline-date"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <Text sx={textWithoutMargin} fontWeight={"bold !important"}>
          Consultant @ NTT Ltd.
        </Text>
        <Text sx={textWithoutMargin}>Singapore</Text>

        <UnorderedList>
          <ListItem>
            <Text>
              Worked on a Change Request for an existing Java application using
              spring, hibernate and struts
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Handled application support and bug fixes for the Java application
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Responsible for initial setup of development environment
            </Text>
          </ListItem>
          <UnorderedList pl={4}>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Worked with various team members to plan architecture and
                database design for a new project.
              </Text>
            </ListItem>
          </UnorderedList>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked on a project using ReactJS and NodeJS.
            </Text>
          </ListItem>

          <UnorderedList pl={4}>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Apply React hooks and optimization using memorization technique
                to the application
              </Text>
            </ListItem>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Create custom hooks to supplement and organize the application
                code
              </Text>
            </ListItem>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Build multiple react components using the principles of Higher
                order component
              </Text>
            </ListItem>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Implement dynamic logging with the use of RabbitMq queue system.
              </Text>
            </ListItem>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Modularization technique applied on NodeJS Api routes.
              </Text>
            </ListItem>
            <ListItem>
              <Text sx={textWithoutMargin}>
                Worked on implementing mostly asynchronous function using async
                and await Worked with OracleDB using SQL and Typeorm.
              </Text>
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2019 - June 2020"
        dateClassName="timeline-date"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <Text sx={textWithoutMargin} fontWeight={"bold !important"}>
          Cloud Engineer @ Aviva Asia
        </Text>
        <Text sx={textWithoutMargin}>Singapore</Text>

        <UnorderedList>
          <ListItem>
            <Text>
              Utilized strong decision-making and problem-solving skills
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked on Terraform script to automate AWS resources
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked on assessing applications for cloud migration
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Designed the architecture of the cloud infrastructure
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Gathering business requirements from various business units
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked with the technical leads on adjustments/modification of the
              applications
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked with cloud architect on the design of the cloud
              architecture diagram
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Understood the risks involved in using various AWS resources
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked on version upgrades on jobs monitoring application with
              NodeJS
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked on Insurance Plan Proposal application UI with AngularJS
            </Text>
          </ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="June 2019"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<MdSchool />}
      >
        <Text sx={textWithoutMargin} fontWeight={"bold !important"}>
          B.Sc in Computing Science
        </Text>
        <Text sx={textWithoutMargin}>University of Glasgow</Text>

        <UnorderedList>
          <ListItem>
            <Text>In partnership with Singapore Institute of Technology</Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>Second Upper Honour</Text>
          </ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="June 2015"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<MdSchool />}
      >
        <Text sx={textWithoutMargin} fontWeight={"bold !important"}>
          Diploma in Engineering Informatics
        </Text>
        <Text sx={textWithoutMargin}>Nanyang Polytechinc</Text>

        <UnorderedList>
          <ListItem>
            <Text>GPA 3.32/4</Text>
          </ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
