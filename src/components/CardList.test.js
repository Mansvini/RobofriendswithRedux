import { shallow } from "enzyme";
import CardList from "./CardList";
import React from "react";

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John snow",
      email: "john@gmail.com",
      username: "JS",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
