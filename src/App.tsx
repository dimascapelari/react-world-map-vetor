import { useEffect, useState, useRef } from "react";
import worldMapSVG from "./assets/world.svg"; // Arquivo SVG do mapa
import { Flex } from "@chakra-ui/react";

const countries = [
  "Brazil",
  "Argentina",
  "United States",
  "Angola",
  "China",
  "Australia",
];

export const App = () => {
  const [mapData, setMapData] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Carregar dados do mapa
    fetch(worldMapSVG) // arquivo SVG importado
      .then((response) => response.text())
      .then((mapData) => {
        setMapData(mapData);
      });
  }, []);

  useEffect(() => {
    // Marcar os países no mapa
    if (mapData) {
      const svgElement = document.createElement("div");
      svgElement.innerHTML = mapData;
      const svgPaths = svgElement.querySelectorAll("path");

      svgPaths.forEach((path) => {
        const countryClass = path.getAttribute("class") ?? "";
        const countryName = path.getAttribute("name") ?? "";

        if (
          countries.includes(countryClass) ||
          countries.includes(countryName)
        ) {
          path.style.fill = "#78CEDC"; // Estilizar os países com a classe ou nome desejado
        }
      });

      setMapData(svgElement.innerHTML);
    }
  }, [mapData]);

  return (
    <Flex h="100vh" justifyContent="center">
      {mapData && (
        <Flex
          border="2px solid blue"
          margin="0 auto"
          justifyContent="center"
          alignItems="center"
        >
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            width="1500"
            height="857"
            viewBox="0 0 2000 857"
            dangerouslySetInnerHTML={{ __html: mapData }} // Renderize o SVG
          />
        </Flex>
      )}
    </Flex>
  );
};
