import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Signup } from "./Signup";

describe("<Signup />", () => {
  test("it should mount", () => {
    render(<Signup />);

    const signup = screen.getByTestId("Signup");

    expect(signup).toBeInTheDocument();
  });
});
