import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./generic.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
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
        date="Aug 2022 - Present"
        dateClassName="timeline-date"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<MdOutlineWork />}
      >
        <Text sx={textWithoutMargin} fontWeight={"bold !important"}>
          Developer @ Standard Chartered
        </Text>
        <Text sx={textWithoutMargin}>Singapore</Text>

        <UnorderedList>
          <ListItem>
            <Text>
              Developed UI application for elasticsearch API with ReactJS and
              NodeJS
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked with helm chart tool to deploy the application to Amazon
              EKS
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked on the proof of concept for migrating of pipeline
              strategies with Azure Devops tools
            </Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>
              Worked on the Continuous Deployment templates for Azure Devops
              which were successfully adopted by all the teams
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
          Software Engineer @ Envision Digital
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
            <Text>Lorem ipsum dolor sit amet</Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>Lorem ipsum dolor sit amet</Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>Lorem ipsum dolor sit amet</Text>
          </ListItem>
          <ListItem>
            <Text sx={textWithoutMargin}>Lorem ipsum dolor sit amet</Text>
          </ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaGithub />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaGithub />}
      >
        <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaGithub />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<FaGithub />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
