import React from "react";
import Card from "./Card";
import articuno from "../media/articuno.png";
import blastoise from "../media/blastoise.png";
import charizard from "../media/charizard.png";
import dialga from "../media/dialga.png";
import giratina from "../media/giratina.png";
import groudon from "../media/groudon.png";
import infernape from "../media/infernape.png";
import kyogre from "../media/kyogre.png";
import latias from "../media/latias.png";
import latios from "../media/latios.png";
import lugia from "../media/lugia.png";
import mew from "../media/mew.png";
import mewtwo from "../media/mewtwo.png";
import moltres from "../media/moltres.png";
import palkia from "../media/palkia.png";
import pikachu from "../media/pikachu.png";
import rayquaza from "../media/rayquaza.png";
import sceptile from "../media/sceptile.png";
import venusaur from "../media/venusaur.png";
import zapdos from "../media/zapdos.png";

const Cards = () => {
  //prettier-ignore
  const pokemons = [[articuno, "Articuno"], [blastoise, "Blastoise"], [charizard, "Charizard"], [dialga, "Dialga"], [giratina, "Giratina"], [groudon, "Groudon"],
    [infernape, "Infernape"], [kyogre, "Kyogre"], [latias, "Latias"], [latios, "Latios"], [lugia, "Lugia"], [mew, "Mew"], [mewtwo, "Mewtwo"], [moltres, "Moltres"],
    [palkia, "Palkia"], [pikachu, "Pikachu"], [rayquaza, "Rayquaza"], [sceptile, "Sceptile"], [venusaur, "Venusaur"], [zapdos, "Zapdos"]];

  const shuffleCards = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[random]] = [arr[random], arr[i]];
    }
  };

  return (
    <div className="cards">
      {(() => {
        let container = [];
        shuffleCards(pokemons);
        const arr = pokemons;
        arr.forEach((element, index) => {
          container.push(<Card key={index} image={element[0]} name={element[1]} />);
        });
        return container;
      })()}
    </div>
  );
};

export default Cards;
