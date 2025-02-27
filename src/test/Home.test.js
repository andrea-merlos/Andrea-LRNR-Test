import React from "react"; // Ensure React is available
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("displays the homepage title", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(
    screen.getByText(/Your guided path to programming enlightenment/i)
  ).toBeInTheDocument();
});

test("has a 'Begin Journey' button", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("button", { name: /Begin Journey/i })
  ).toBeInTheDocument();
});
