import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Shop } from "./Shop";

describe("<Shop />", () => {
  test("it should mount", () => {
    render(<Shop />);

    const shop = screen.getByTestId("Shop");

    expect(shop).toBeInTheDocument();
  });
});
