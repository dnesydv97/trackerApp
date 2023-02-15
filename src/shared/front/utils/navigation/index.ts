import React from "react";

const navigationRef = React.createRef();

export function navigate(name: string, params = {}) {}

export function goBack() {}
export default {
  navigate,
  navigationRef,
  goBack,
};
