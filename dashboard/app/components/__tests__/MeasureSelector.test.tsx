import { render, screen, fireEvent } from "@testing-library/react";
import MeasureSelector from "../MeasureSelector";

describe("MeasureSelector", () => {
    it("renders all measures correctly", () => {
        render(<MeasureSelector selected="life_expectancy" onSelect={() => {}} />);

        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(screen.getByRole("option", { name: /life expectancy/i })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: /population/i })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: /net migration rate/i })).toBeInTheDocument();
    });

    it("calls onSelect when user selects a different measure", () => {
        const mockSelect = jest.fn();
        render(<MeasureSelector selected="life_expectancy" onSelect={mockSelect} />);

        fireEvent.change(screen.getByRole("combobox"), { target: { value: "population" } });

        expect(mockSelect).toHaveBeenCalledWith("population");
    });
});
