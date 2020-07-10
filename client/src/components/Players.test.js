import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Players from './Players'; 
import Navbar from './Navbar'; 


test("The Players header is visible", () => {
  const { getByText } = render(<Navbar />);

  expect(getByText(/the players/i)).toBeVisible();  
}); 

test("toggle on is working", () => {
  const { getByTestId } = render(<Navbar />);

  const toggleModeOn = getByTestId(/toggle-mode/i);

  fireEvent.click(toggleModeOn);

  const toggleOn = getByTestId(/toggle-mode/i);
  
  expect(toggleOn).toBeEnabled();
});


test("toggle off is working", () => {
  const { getByTestId } = render(<Navbar />);

  const toggleButton = getByTestId(/toggle-mode/i); 

  fireEvent.click(toggleButton);
  fireEvent.click(toggleButton);

  expect(toggleButton).toHaveClass("toggled");
});
