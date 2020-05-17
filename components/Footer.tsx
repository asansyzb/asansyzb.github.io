import React from "react";
import useStyles from "styles/components/footer.styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";

interface Props {}

const Copyright: React.FunctionComponent = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://material-ui.com/">
      Your Website
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

const Footer: React.FunctionComponent<Props> = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.root}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            description
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
