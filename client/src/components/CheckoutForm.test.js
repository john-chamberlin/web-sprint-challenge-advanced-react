import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()

});

test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm />)

    const fNameInput = screen.getByLabelText(/first name/i)
    const lNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    userEvent.type(fNameInput, 'john')
    userEvent.type(lNameInput, 'chamberlin')
    userEvent.type(addressInput, '865 viking cr')
    userEvent.type(cityInput, 'austin')
    userEvent.type(stateInput, 'TX')
    userEvent.type(zipInput, '98229')

    const submitButton = screen.getByRole('button')

    await act(async()=> {
        userEvent.click(submitButton)
    })

    const successMessage = await screen.findByTestId('successMessage')

    const newFName = await screen.findByText(/john/i)
    const newLName = await screen.findByText(/chamberlin/i)
    const newAddress = await screen.findByText(/865 viking cr/i)
    const newCity = await screen.findByText(/austin/i)
    const newState = await screen.findByText(/tx/i)
    const newZip = await screen.findByText(/98229/i)

    expect(successMessage).toBeInTheDocument()
    expect(newFName).toBeInTheDocument()
    expect(newLName).toBeInTheDocument()
    expect(newAddress).toBeInTheDocument()
    expect(newCity).toBeInTheDocument()
    expect(newState).toBeInTheDocument()
    expect(newZip).toBeInTheDocument()

    



});
