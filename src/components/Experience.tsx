import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "styles/components/common.styles";

interface Props {}

const content = [
  [
    `Full Stack Developer / Unstoppable Domains April 2019 - February 2020, San Francisco, Ca, USA`,
    `Developed and improved backend (Node.js) and frontend (React.js). Connected backend with Ethereum and Zilliqa blockchain technologies.`
  ],
  [
    `CTO (Cofounder) / Brandlesskz May 2018 - November 2018, Astana, Kazakhstan`,
    `Developed using Agile Methodology frontend (Vue.js), backend (Node.js), iOS and Android mobile applications (Flutter) for customers. Developed Telegram Bot for better Supply and Chain Management.`
  ],
  [
    `Lecturer / MethodPro (Method Digital Education) June 2018 -July 2018, Astana, Kazakhstan`,
    `Instructed ~50 students Vue.js Progressive Web Framework, Agile Development, and Web Fundamentals (HTML5, CSS, Javascript).`
  ],
  [
    `Information Technology Tutor / Method Digital Education Feb 2018 - July 2018, Astana, Kazakhstan`,
    `Instructed high school and university students programming fundamentals (data structures, algorithms) using python.`
  ],
  [
    `Mentor (Mentor Program) / Korea Advanced Institute of Science and Technology (KAIST) August 2017 - December 2017, Daejeon, South Korea`,
    `Mentored new students with the beginning of the first semester.`
  ],
  [
    `Coordinator (Coordinator Team) / International Olympiad in Informatics (IOI) July 2015 - August 2015, Almaty, Kazakhstsan`,
    `Worked on the organization part. Fixed the technical problems that occurred during the Olympiad.`
  ]
];

const Experience: React.FunctionComponent<Props> = ({}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4">Experience</Typography>
      <br />
      {content.map((data, idx) => (
        <React.Fragment key={idx}>
          <Typography variant="h6">{data[0]}</Typography>
          <Typography variant="body1">{data[1]}</Typography>
          <br />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Experience;
