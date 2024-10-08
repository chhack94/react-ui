import {
  Default as SidebarItemDefault,
  Disabled as SidebarItemDisabled,
  Nested as SidebarItemNested,
  Selected as SidebarItemSelected,
  WithCount as SidebarItemWithCount
} from "../Sidebar/SidebarItem/SidebarItem.stories";
import { render, screen } from "@testing-library/react";

import React from "react";
import SidebarDivider from "../Sidebar/SidebarDivider";
import SidebarItem from "../Sidebar/SidebarItem";
import VirtoAppLayout from ".";
import mediaQuery from "css-mediaquery";
import userEvent from "@testing-library/user-event";

// a set of default inputs so that tests can change what they are testing
const defaultInputs = {
  appName: "App Name",
  content: <div>App Content goes here</div>,
  onChangePassword: jest.fn(),
  onLogout: jest.fn(),
  sidebarContent: (
    <>
      <SidebarItem {...SidebarItemDefault.args} />
      <SidebarItem {...SidebarItemSelected.args} />
      <SidebarDivider />
      <SidebarItem {...SidebarItemDisabled.args} />
      <SidebarItem {...SidebarItemWithCount.args} />
      <SidebarDivider />
      <SidebarItem {...SidebarItemNested.args} />
    </>
  ),
  username: "Joe Bloggs"
};

// implementation of matchMedia for testing
// see docs https://mui.com/material-ui/react-use-media-query/#testing
function createMatchMedia(width: number) {
  return (query: mediaQuery) => ({
    addEventListener: jest.fn(),
    addListener: () => {},
    dispatchEvent: jest.fn(),
    matches: mediaQuery.match(query, { width }),
    media: query,
    onchange: null,
    removeEventListener: jest.fn(),
    removeListener: () => {}
  });
}

// tests for the app layout component
describe("VirtoAppLayout", () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
  });
  test("shows first and last initial of username", () => {
    render(
      <VirtoAppLayout {...defaultInputs} username="Ruud van Nistelrooy" />
    );
    expect(screen.getByText(/RN/i)).toBeInTheDocument();
  });
  test("should show app name", () => {
    render(<VirtoAppLayout {...defaultInputs} appName="APP NAME" />);
    expect(screen.getByText(/APP NAME/i)).toBeInTheDocument();
  });
  test("should show app version", () => {
    render(<VirtoAppLayout {...defaultInputs} appVersion="1.0.0" />);
    expect(screen.getByText(/1.0.0/i)).toBeInTheDocument();
  });
  test("should display content", () => {
    render(
      <VirtoAppLayout
        {...defaultInputs}
        content={<div data-testid="main-content">More content goes here</div>}
      />
    );

    expect(screen.getByTestId("main-content")).toBeInTheDocument();
  });
  test("should display sidebar content", () => {
    render(
      <VirtoAppLayout
        {...defaultInputs}
        sidebarContent={
          <div data-testid="sidebar-content">
            <SidebarItem {...SidebarItemDefault.args} />
            <SidebarItem {...SidebarItemSelected.args} />
            <SidebarDivider />
            <SidebarItem {...SidebarItemDisabled.args} />
            <SidebarItem {...SidebarItemWithCount.args} />
            <SidebarDivider />
            <SidebarItem {...SidebarItemNested.args} />
          </div>
        }
      />
    );
    expect(screen.getByTestId("sidebar-content")).toBeInTheDocument();
  });
  test("should call onChangePassword when password button is clicked", async () => {
    const user = userEvent.setup();
    const onChangePassword = jest.fn();
    render(
      <VirtoAppLayout {...defaultInputs} onChangePassword={onChangePassword} />
    );
    await user.click(screen.getByRole("button", { name: /JB/i }));
    await user.click(
      screen.getByRole("menuitem", { name: /Change password/i })
    );
    expect(onChangePassword).toHaveBeenCalled();
  });
  test("onLogout called on user click", async () => {
    const user = userEvent.setup();
    const onLogout = jest.fn();
    render(<VirtoAppLayout {...defaultInputs} onLogout={onLogout} />);
    await user.click(screen.getByRole("button", { name: /JB/i }));
    await user.click(screen.getByRole("menuitem", { name: /Logout/i }));
    expect(onLogout).toHaveBeenCalled();
  });
  test("has a valid logo link href if a string is provided", () => {
    const { container } = render(
      <VirtoAppLayout
        {...defaultInputs}
        virtoLogoLinkUrl={"https://www.some.url/"}
      />
    );
    expect(
      container.querySelector("a[href='https://www.some.url/']")
    ).toBeInTheDocument();
  });
});
