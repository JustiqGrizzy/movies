import React, { useContext } from "react";
import "./AppInfo.css";
import { Context } from "../../context";

const AppInfo = () => {
  const { state } = useContext(Context);
  return (
    <div className="appInfo">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni: {state.data.length}
      </p>
    </div>
  );
};

export default AppInfo;
