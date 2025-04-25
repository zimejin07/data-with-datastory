'use client';

import { useState } from "react";
import { useCountries } from "./hooks/useCountries";
import { useCubeData } from "./hooks/useCubeData";
import CountrySelector from "./components/CountrySelector";
import MeasureSelector from "./components/MeasureSelector";
import Chart from "./components/Chart";

export default function Home() {
    const { countries, loading: countriesLoading } = useCountries();
    const [selectedCountry, setSelectedCountry] = useState<string>("Poland");
    const [selectedMeasure, setSelectedMeasure] = useState<string>("life_expectancy");

    const { cubeData, loading: cubeDataLoading } = useCubeData(selectedCountry.toLowerCase(), selectedMeasure);

    if (countriesLoading) return <div>Loading countries...</div>;

    return (
        <main className="flex flex-col items-center justify-center p-8">
            <div className="flex gap-4 mb-8">
                <CountrySelector countries={countries} selected={selectedCountry} onSelect={setSelectedCountry} />
                <MeasureSelector selected={selectedMeasure} onSelect={setSelectedMeasure} />
            </div>
            {cubeDataLoading ? <div>Loading data...</div> : <Chart data={cubeData} />}
        </main>
    );
}
