import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DevicePage } from "./DevicePage";

describe("<DevicePage />", () => {
  test("it should mount", () => {
    render(<DevicePage />);

    const devicePage = screen.getByTestId("DevicePage");

    expect(devicePage).toBeInTheDocument();
  });
});
