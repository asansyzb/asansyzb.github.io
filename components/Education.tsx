import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "styles/components/common.styles";
import { Divider } from "@material-ui/core";

interface Props {}

const content = [
  [
    `Software Engineer / 42 School Silicon Valley October 2018 - July 2020, Fremont, Ca, US`,
    `42 is a private, non-profit and tuition free computer programming school in Silicon Valley, USA. Achieved level 9 in 3 months (average - 1 level per month).`
  ],

  [
    `Bachelor of Computer Science / Korea Advanced Institute of Science and Technology (KAIST) August 2016 - August 2018, Daejeon, South Korea`,
    `KAIST is the top 40 university in the world according to QS Top Universities (2018). Dropped out after 3 semesters.`
  ],
  [
    `High School / Republican Physics-Mathematics School (RPMS) September 2013 - May 2016, Almaty, Kazakhstan`,
    `RPMS is top 1 school in the area of natural sciences in Kazakhstan (founders of “Yandex” Ilya Segalovich and Arkady Volozh studied at this school).`
  ]
];

const Education: React.FunctionComponent<Props> = ({}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4">Education</Typography>
      <br />
      {content.map((data, idx) => (
        <React.Fragment key={idx}>
          <Typography variant="h6">{data[0]}</Typography>
          <Typography variant="body1">{data[1]}</Typography>
          <br />
        </React.Fragment>
      ))}
      <Divider />
    </Container>
  );
};

export default Education;
