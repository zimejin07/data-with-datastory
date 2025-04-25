'use client';
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { CubeData } from "@/types/cubeData";

interface ChartProps {
    data: CubeData[];
}

export default function Chart({ data }: ChartProps) {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || data.length === 0) return;

        const width = 600;
        const height = 400;
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear previous

        const x = d3.scaleLinear()
            .domain(d3.extent(data, (d) => d.year) as [number, number])
            .range([40, width - 20]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d.value) as number])
            .nice()
            .range([height - 30, 20]);

        svg.append("g")
            .attr("transform", `translate(0,${height - 30})`)
            .call(d3.axisBottom(x).tickFormat(d3.format("d")));

        svg.append("g")
            .attr("transform", `translate(40,0)`)
            .call(d3.axisLeft(y));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", d3.line<CubeData>()
                .x(d => x(d.year))
                .y(d => y(d.value))
            );
    }, [data]);

    return <svg ref={svgRef} width="100%" height="400px" />;
}
