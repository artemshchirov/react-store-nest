import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Signin } from "./Signin";

describe("<Signin />", () => {
  test("it should mount", () => {
    render(<Signin />);

    const signin = screen.getByTestId("Signin");

    expect(signin).toBeInTheDocument();
  });
});
