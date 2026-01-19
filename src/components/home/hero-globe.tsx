"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

interface GeoFeature {
  type: string;
  geometry: any;
  properties: any;
}

export function HeroGlobe() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [worldData, setWorldData] = useState<GeoFeature[]>([]);
  const [rotation, setRotation] = useState([0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const width = 500;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;

  // Auto-rotate the globe
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      setRotation((prev) => [prev[0] + 0.75, prev[1]]);
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered, isDragging]);

  // Load world data
  useEffect(() => {
    const loadWorldData = async () => {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
        const world: any = await response.json();
        const featureCollection = feature(world, world.objects.countries) as any;
        const countries = featureCollection?.features || [];
        setWorldData(countries);
      } catch (error) {
        console.error("Error loading world data:", error);
        setWorldData([]);
      }
    };
    loadWorldData();
  }, []);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top]);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top];
    const dx = currentMouse[0] - lastMouse[0];
    const dy = currentMouse[1] - lastMouse[1];

    const sensitivity = 0.5;
    setRotation((prev) => [
      prev[0] + dx * sensitivity,
      Math.max(-90, Math.min(90, prev[1] - dy * sensitivity)),
    ]);
    setLastMouse(currentMouse);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setIsDragging(true);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect && event.touches.length > 0) {
      setLastMouse([event.touches[0].clientX - rect.left, event.touches[0].clientY - rect.top]);
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDragging || event.touches.length === 0) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const currentMouse = [
      event.touches[0].clientX - rect.left,
      event.touches[0].clientY - rect.top,
    ];
    const dx = currentMouse[0] - lastMouse[0];
    const dy = currentMouse[1] - lastMouse[1];

    const sensitivity = 0.5;
    setRotation((prev) => [
      prev[0] + dx * sensitivity,
      Math.max(-90, Math.min(90, prev[1] - dy * sensitivity)),
    ]);
    setLastMouse(currentMouse);
  };

  // Initialize and update visualization
  useEffect(() => {
    if (!svgRef.current || worldData.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Use orthographic projection for globe view
    const scale = 200;
    const projection = d3
      .geoOrthographic()
      .scale(scale)
      .translate([centerX, centerY])
      .rotate([rotation[0], rotation[1]])
      .precision(0.1);

    const path = d3.geoPath().projection(projection);

    // Add graticule (grid lines)
    try {
      const graticule = d3.geoGraticule();
      const graticulePath = path(graticule());
      if (graticulePath) {
        svg
          .append("path")
          .datum(graticule())
          .attr("d", graticulePath)
          .attr("fill", "none")
          .attr("stroke", "rgba(56, 189, 248, 0.15)")
          .attr("stroke-width", 0.5)
          .attr("opacity", 0.3);
      }
    } catch (error) {
      console.error("Error creating graticule:", error);
    }

    // Add countries
    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d) => {
        try {
          const pathString = path(d as any);
          if (!pathString) return "";
          if (typeof pathString === "string" && (pathString.includes("NaN") || pathString.includes("Infinity"))) {
            return "";
          }
          return pathString;
        } catch (error) {
          return "";
        }
      })
      .attr("fill", "rgba(56, 189, 248, 0.1)")
      .attr("stroke", "rgba(56, 189, 248, 0.4)")
      .attr("stroke-width", 0.8)
      .attr("opacity", 1.0)
      .style("visibility", function () {
        const pathData = d3.select(this).attr("d");
        return pathData && pathData.length > 0 && !pathData.includes("NaN") ? "visible" : "hidden";
      })
      .on("mouseenter", function () {
        d3.select(this).attr("fill", "rgba(56, 189, 248, 0.2)").attr("stroke", "rgba(56, 189, 248, 0.6)");
      })
      .on("mouseleave", function () {
        d3.select(this).attr("fill", "rgba(56, 189, 248, 0.1)").attr("stroke", "rgba(56, 189, 248, 0.4)");
      });

    // Draw sphere outline
    try {
      const spherePath = path({ type: "Sphere" } as any);
      if (spherePath) {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", spherePath)
          .attr("fill", "none")
          .attr("stroke", "rgba(56, 189, 248, 0.3)")
          .attr("stroke-width", 1.5)
          .attr("opacity", 1.0);
      }
    } catch (error) {
      console.error("Error creating sphere outline:", error);
    }
  }, [worldData, rotation]);

  return (
    <div
      className="relative flex items-center justify-center h-[600px] lg:h-[800px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={[
          "relative w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full overflow-hidden",
          "bg-[radial-gradient(circle_at_30%_30%,_#1e293b,_#000)]",
          "shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8),_0_0_50px_rgba(14,165,233,0.2)]",
        ].join(" ")}
      >
        {/* SVG Globe with World Map */}
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none"
          preserveAspectRatio="xMidYMid meet"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        />

        {/* Grid overlay */}
        <div
          className={[
            "absolute inset-0 rounded-full pointer-events-none",
            "bg-[linear-gradient(rgba(56,189,248,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.10)_1px,transparent_1px)]",
            "bg-[size:40px_40px]",
            "rotate-[-15deg]",
          ].join(" ")}
        />

        {/* Glow dots */}
        <Dot style={{ top: "30%", left: "40%" }} />
        <Dot style={{ top: "50%", left: "70%" }} />
        <Dot style={{ top: "70%", left: "20%" }} />
        <Dot style={{ top: "20%", left: "60%" }} />

        {/* Floating cards */}

      </div>
    </div>
  );
}

function Dot({ style }: { style: React.CSSProperties }) {
  return (
    <span
      className="absolute h-1 w-1 rounded-full bg-sky-300 shadow-[0_0_10px_#38bdf8] pointer-events-none z-10"
      style={style}
    />
  );
}


