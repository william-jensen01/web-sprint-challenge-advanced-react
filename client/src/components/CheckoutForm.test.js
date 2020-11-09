import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const heading = screen.getByText(/checkout form/i);
    expect(heading).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const button = screen.getByRole("button", { name: /checkout/i });

    fireEvent.change(firstName, { target: { value: "William" } });
    expect(firstName).toHaveValue("William");

    fireEvent.change(lastName, { target: { value: "Jensen" } });
    expect(lastName).toHaveValue("Jensen");

    fireEvent.change(address, { target: { value: "123 Main Street" } });
    expect(address).toHaveValue("123 Main Street");

    fireEvent.change(city, { target: { value: "Saratoga Springs" } });
    expect(city).toHaveValue("Saratoga Springs");

    fireEvent.change(state, { target: { value: "Utah" } });
    expect(state).toHaveValue("Utah");

    fireEvent.change(zip, { target: { value: "84045" } });
    expect(zip).toHaveValue("84045");

    fireEvent.click(button);

    // assert
    const success = await screen.findByText(/woo-hoo/i)
});
