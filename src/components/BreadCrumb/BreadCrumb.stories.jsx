import React from "react";

import BreadCrumb from ".";

const breadCrumb = {
  title: "Components/Atoms/BreadCrumb",
  component: BreadCrumb,
};

export default breadCrumb;

const item = [{ label: "Inicio", link: "/" }, { label: "Sobre" }];

export const usage = () => <BreadCrumb items={items}></BreadCrumb>;
