'use client';

interface MeasureSelectorProps {
    selected: string;
    onSelect: (measure: string) => void;
}

const measures = ["life_expectancy", "population", "net_migration_rate"];

export default function MeasureSelector({ selected, onSelect }: MeasureSelectorProps) {
    return (
        <select
            className="border p-2 rounded"
            value={selected}
            onChange={(e) => onSelect(e.target.value)}
        >
            {measures.map((measure) => (
                <option key={measure} value={measure}>
                    {measure.replace(/_/g, ' ')}
                </option>
            ))}
        </select>
    );
}
