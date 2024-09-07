import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CarList from "./CarList";
import { BrowserRouter as Router } from "react-router-dom";
import api from "../../services/api";

jest.mock("../../services/api");

const setup = (props = {}) => {
    return render(
        <Router>
            <CarList {...props} />
        </Router>
    );
};

test("renders CarList and handles edit and delete actions", async () => {
    api.getCars = jest.fn().mockResolvedValue({
        data: [
            {
                id: 1,
                name: "Hot Wheels",
                brand: "Hot Wheels Brand",
                color: "Red",
                year: "2024",
            },
        ],
    });
    api.removeCar = jest.fn().mockResolvedValue({});

    setup({ setEditingCar: jest.fn() });

    await waitFor(() => {
        expect(screen.getByText(/Nome: Hot Wheels/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/Excluir/i));

    await waitFor(() => {
        expect(api.removeCar).toHaveBeenCalledWith(1);
    });
});
