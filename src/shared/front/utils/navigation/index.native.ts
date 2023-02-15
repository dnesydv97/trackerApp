import React from "react";
import { NavigationContainerRef } from "@react-navigation/core";

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params = {}) {
  console.log("test navigaitgon", name, params);
  navigationRef?.current?.navigate(name, params);
}

export function goBack() {
  navigationRef?.current?.goBack();
}
export default {
  navigate,
  navigationRef,
  goBack,
};
