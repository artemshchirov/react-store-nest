import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Device } from "./Device";

describe("<Device />", () => {
  test("it should mount", () => {
    render(<Device />);

    const device = screen.getByTestId("Device");

    expect(device).toBeInTheDocument();
  });
});
