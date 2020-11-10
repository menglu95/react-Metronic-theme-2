import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Logout = props => {
  useEffect(() => {
    props.logoutUser(props.history);
  });

  return <></>;
};

export default withRouter(Logout);
