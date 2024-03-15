// import React, { useEffect, useState } from "react";
// import worldMapSVG from "./assets/world.svg"; // Importe o arquivo SVG

// const countries = ["Brazil", "Argentina"];

// export const App = () => {
//   const [mapData, setMapData] = useState<string | null>(null);

//   useEffect(() => {
//     // Carregar dados do mapa-múndi
//     fetch(worldMapSVG) // Use o arquivo SVG importado
//       .then((response) => response.text())
//       .then((mapData) => {
//         setMapData(mapData);
//       });
//   }, []);

//   return (
//     <div>
//       {mapData && (
//         <div
//           dangerouslySetInnerHTML={{ __html: mapData }} // Renderize o SVG
//         />
//       )}
//       <div>
//         {countries.map((country) => (
//           <span key={country}>{country}</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// --------------------------------------------------------------

// import React, { useEffect, useRef, useState } from "react";
// import worldMapSVG from "./assets/world.svg"; // Importe o arquivo SVG

// const countries = ["Brazil", "Argentina"];

// export const App = () => {
//   const [mapData, setMapData] = useState<string | null>(null);
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     // Carregar dados do mapa-múndi
//     fetch(worldMapSVG) // Use o arquivo SVG importado
//     .then((response) => response.text())
//     .then((mapData) => {
//       setMapData(mapData);
//     });
//   }, []);

//   useEffect(() => {
//     // Marcar países no mapa após renderização do SVG
//     if (mapData && svgRef.current) {
//       const svgDoc = svgRef.current.ownerDocument;
//       if (svgDoc) {
//         countries.forEach((country) => {
//           const countryPath = svgDoc.querySelector(`[name="${country}"]`);
//           if (countryPath) {
//             countryPath.setAttribute("fill", "blue");
//           }
//         });
//       }
//     }
//   }, [mapData]);

//   return (
//     <div>
//       {mapData && (
//         <div>
//           <svg
//             ref={svgRef}
//             xmlns="http://www.w3.org/2000/svg"
//             width="1000" // Definindo uma largura fixa para o SVG
//             height="500" // Definindo uma altura fixa para o SVG
//             viewBox="0 0 2000 857" // Configurando a visualização para o SVG
//             dangerouslySetInnerHTML={{ __html: mapData }}
//             />
//         </div>
//       )}
//       <div>
//         {countries.map((country) => (
//           <span key={country}>{country}</span>
//           ))}
//       </div>
//     </div>
//   );
// };

// --------------------------------------------------------------

// import React, { useEffect, useRef, useState } from "react";
// import worldMapSVG from "./assets/world.svg";

// const countries = ["Brazil", "Argentina", "Bhutan", "Bangladesh"];

// export const App = () => {
//   const [mapData, setMapData] = useState<string | null>(null);
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     // Carregar dados do mapa
//     fetch(worldMapSVG) // arquivo SVG
//       .then((response) => response.text())
//       .then((mapData) => {
//         setMapData(mapData);
//       });
//   }, []);

//   useEffect(() => {
//     // Marcar países no mapa após renderização do SVG
//     if (mapData && svgRef.current) {
//       const svgDoc = svgRef.current.ownerDocument;
//       if (svgDoc) {
//         countries.forEach((country) => {
//           const countryPath = svgDoc.querySelector(`[name="${country}"]`);
//           if (countryPath) {
//             countryPath.setAttribute("fill", "blue");
//           }
//         });
//       }
//     }
//   }, [mapData]);

//   return (
//     <div>
//       {mapData && (
//         <div>
//           <svg
//             ref={svgRef}
//             xmlns="http://www.w3.org/2000/svg"
//             width="2000"
//             height="857"
//             viewBox="0 0 2000 857"
//             dangerouslySetInnerHTML={{ __html: mapData }}
//           />
//         </div>
//       )}
//       <div>
//         {countries.map((country) => (
//           <span key={country}>{country}</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// -------------------------------------------

import { useEffect, useState, useRef } from "react";
import worldMapSVG from "./assets/world.svg"; // Importe o arquivo SVG

const countries = [
  "Brazil",
  "Argentina",
  "Faeroe Islands",
  "Malta",
  "United States",
  "Angola",
  "China",
  "Australia",
];

export const App = () => {
  const [mapData, setMapData] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Carregar dados do mapa-múndi
    fetch(worldMapSVG) // Use o arquivo SVG importado
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
    <div>
      {mapData && (
        // <div
        //   dangerouslySetInnerHTML={{ __html: mapData }} // Renderize o SVG
        // />
        <div>
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            width="1500"
            height="857"
            viewBox="0 0 2000 857"
            dangerouslySetInnerHTML={{ __html: mapData }}
          />
        </div>
      )}
    </div>
  );
};
