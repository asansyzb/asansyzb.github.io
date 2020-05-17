import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 4px 12px 0 rgba(20, 42, 128, 0.14)',
    position: 'fixed',
    height: '64px',
    [theme.breakpoints.up('sm')]: {
      height: '72px',
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    justifyContent: 'space-between',
    padding: `0px ${theme.spacing(1)}px`,
    [theme.breakpoints.up('sm')]: {
      height: '72px',
      padding: `0px ${theme.spacing(2)}px`,
    },
  },
  leftNavContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      // marginLeft: theme.spacing(5),
    },
  },
  rightNavContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(4),
    },
  },
  title: {
    color: '#000000',
  },
  getStartedButton: {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
    },
    marginLeft: theme.spacing(2),
    textTransform: 'none',
  },
  loginButton: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    textTransform: 'none',
    color: 'black',
  },
}));

export default useStyles;
