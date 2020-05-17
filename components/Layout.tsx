// Layout component
import React from "react";
import Container from "@material-ui/core/Container";
import useStyles from "styles/components/layout.styles";

interface Props {
  children: any;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root} id="main" maxWidth="lg">
        <main>
          <div className={classes.page}>{children}</div>
        </main>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
