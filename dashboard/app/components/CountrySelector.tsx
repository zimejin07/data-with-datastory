'use client';
import { Country } from "@/types/country";

interface CountrySelectorProps {
    countries: Country[];
    selected: string;
    onSelect: (country: string) => void;
}

export default function CountrySelector({ countries, selected, onSelect }: CountrySelectorProps) {
    return (
        <select
            className="border p-2 rounded"
            value={selected}
            onChange={(e) => onSelect(e.target.value)}
        >
            {countries.map((country) => (
                <option key={country.id} value={country.name}>
                    {country.name}
                </option>
            ))}
        </select>
    );
}
