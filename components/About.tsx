import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "styles/components/common.styles";

interface Props {}

const content = [
  `Hi!`,
  `I'm Alibek. I'm a coder, a maker, a believer.`,
  `I am an extrovert. I can talk about different topics until I run out of imagination. Maybe that's the reason why I left South Korea.`,
  `At the age of 19 I co-founded a subscription based startup as a CTO. I had an amazing journey into the tech and business world. At the age of 20 I was one of the first developers at a blockchain based startup <b> Unstoppable Domains.</b> (<a href="https://unstoppabledomains.com" target="_blank">check them out!</a>)`,
  `Currently, I am learning finance and machine learning. I believe that we can enhance financial institutions by applying computer simulations. Let's see where it'll bring me.`,
  `Passively looking for internships / full-time positions as a full-stack developer.`
];

const About: React.FunctionComponent<Props> = ({}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h3">alibek sansyzbayev</Typography>
      <br />
      <Typography variant="h4">About me</Typography>
      <br />
      {content.map((data, idx) => (
        <React.Fragment key={idx}>
          <Typography variant="h6" dangerouslySetInnerHTML={{ __html: data }} />
          <br />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default About;
