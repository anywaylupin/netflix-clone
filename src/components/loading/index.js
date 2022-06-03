import React from "react";
import { Spinner, Process, Complete, Icon } from "../styles/loading.js";

export default function Loading({ src, ...extraProps }) {
  return (
    <Spinner>
      <Process />
      <Icon
        src={`https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png`}
      />
    </Spinner>
  );
}

Loading.Complete = function LoadingComplete() {
  return <Complete />;
};
