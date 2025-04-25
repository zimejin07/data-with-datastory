import { render, screen, fireEvent } from "@testing-library/react";
import CountrySelector from "../CountrySelector";
import { Country } from "@/types/country";

const mockCountries: Country[] = [
    {
        id: "1",
        name: "Poland",
        iso2: [{ value: "PL" }],
    },
    {
        id: "2",
        name: "Germany",
        iso2: [{ value: "DE" }],
    },
];

describe("CountrySelector", () => {
    it("renders all countries correctly", () => {
        render(
            <CountrySelector
                countries={mockCountries}
                selected="Poland"
                onSelect={() => {}}
            />
        );

        expect(screen.getByRole("combobox")).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "Poland" })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "Germany" })).toBeInTheDocument();
    });

    it("calls onSelect when user selects a different country", () => {
        const mockSelect = jest.fn();
        render(
            <CountrySelector
                countries={mockCountries}
                selected="Poland"
                onSelect={mockSelect}
            />
        );

        fireEvent.change(screen.getByRole("combobox"), {
            target: { value: "Germany" },
        });

        expect(mockSelect).toHaveBeenCalledWith("Germany");
    });
});
