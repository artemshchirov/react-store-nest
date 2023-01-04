import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FormField } from "./FormField";

describe("<FormField />", () => {
  test("it should mount", () => {
    render(<FormField />);

    const formField = screen.getByTestId("FormField");

    expect(formField).toBeInTheDocument();
  });
});
