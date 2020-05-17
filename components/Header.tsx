import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "styles/components/header.styles";
import Link from "next/link";
import MaterialLink from "@material-ui/core/Link";

interface Props {}

const Header: React.FunctionComponent<Props> = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftNavContainer}>
            <Link href="/">
              <MaterialLink component="button" underline="none">
                <Typography variant="h6" className={classes.title}>
                  alibek
                </Typography>
              </MaterialLink>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
