exports.ids = [6];
exports.modules = {

/***/ "apO0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./styles/components/layout.styles.ts

const useStyles = Object(styles_["makeStyles"])(theme => ({
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
/* harmony default export */ var layout_styles = (useStyles);
// CONCATENATED MODULE: ./components/Layout.tsx
var __jsx = external_react_default.a.createElement;
// Layout component




const Layout = ({
  children
}) => {
  const classes = layout_styles();
  return __jsx(external_react_default.a.Fragment, null, __jsx(Container_default.a, {
    className: classes.root,
    id: "main",
    maxWidth: "lg"
  }, __jsx("main", null, __jsx("div", {
    className: classes.page
  }, children))));
};

/* harmony default export */ var components_Layout = __webpack_exports__["default"] = (Layout);

/***/ })

};;