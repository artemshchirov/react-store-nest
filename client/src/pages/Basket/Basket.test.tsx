import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Basket } from "./Basket";

describe("<Basket />", () => {
  test("it should mount", () => {
    render(<Basket />);

    const basket = screen.getByTestId("Basket");

    expect(basket).toBeInTheDocument();
  });
});
