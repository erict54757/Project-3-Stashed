import React from "react";
import { Button } from "react-materialize";
import Auth from "../utils/auth";
import "jquery";
import "materialize-css/dist/js/materialize.js";

const LogoutButton = props => {
  return props.token ? (
    <Button
      style={{ marginTop: "20px" }}
      className="blue waves-effect waves-light"
      onClick={() => Auth.logout()}
    >
      Log Out
    </Button>
  ) : (
    <div />
  );
};
export default LogoutButton;
