import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    backgroundColor: "#F9FAFF",
    minHeight: "100vh",
    width: "100vw",
    flexGrow: 1,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  },
  page: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
    minHeight: "88vh",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(3),
      minHeight: "75vh"
    }
  }
}));

export default useStyles;
