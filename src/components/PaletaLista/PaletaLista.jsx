import React, { useState } from "react";
import "./PaletaLista.css";
import PaletaItem from "components/PaletaItem/PaletaItem";
import { paletas } from "mocks/paletas.js";

function PaletaLista() {
  const [paletaSelecionadas, setPaletaSelecionadas] = useState({});

  function adicionarItem(index) {
    const initialValue = Number(paletaSelecionadas[index] || 0);

    const paleta = {
      [index]: initialValue + 1,
    };

    setPaletaSelecionadas({ ...paletaSelecionadas, ...paleta });
  }

  function removerItem(index) {
    const initialValue = Number(paletaSelecionadas[index] || 0);
    const paleta = {
      [index]: initialValue - 1,
    };
    setPaletaSelecionadas({ ...paletaSelecionadas, ...paleta });
  }

  return (
    <div className="PaletaLista">
      {}
      {paletas.map((paleta, index) => {
        return (
          <PaletaItem
            key={index}
            adicionarItem={adicionarItem}
            removerItem={removerItem}
            quantidadeSelecionada={paletaSelecionadas[index]}
            index={index}
            paleta={paleta}
          />
        );
      })}
    </div>
  );
}

export default PaletaLista;
