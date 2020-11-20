import LoginForm from "./LoginForm";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Authentication/LoginForm",
  component: LoginForm
};

const Template = args => {
  return <LoginForm {...args} onLogin={action("login")} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true
};
