import React from "react";
import About from "components/About";
import Education from "components/Education";
import Experience from "components/Experience";
import { Divider } from "@material-ui/core";

interface Props {}

const App: React.FunctionComponent<Props> = ({}) => {
  return (
    <React.Fragment>
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Education />
    </React.Fragment>
  );
};

export default App;
