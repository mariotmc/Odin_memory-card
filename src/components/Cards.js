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
  return (
    <div className="cards">
      <Card image={articuno} name={"Articuno"} />
      <Card image={blastoise} name={"Blastoise"} />
      <Card image={charizard} name={"Charizard"} />
      <Card image={dialga} name={"Dialga"} />
      <Card image={giratina} name={"Giratina"} />
      <Card image={groudon} name={"Groudon"} />
      <Card image={infernape} name={"Infernape"} />
      <Card image={kyogre} name={"Kyogre"} />
      <Card image={latias} name={"Latias"} />
      <Card image={latios} name={"Latios"} />
      <Card image={lugia} name={"Lugia"} />
      <Card image={mew} name={"Mew"} />
      <Card image={mewtwo} name={"Mewtwo"} />
      <Card image={moltres} name={"Moltres"} />
      <Card image={palkia} name={"Palkia"} />
      <Card image={pikachu} name={"Pikachu"} />
      <Card image={rayquaza} name={"Rayquaza"} />
      <Card image={sceptile} name={"Sceptile"} />
      <Card image={venusaur} name={"Venusaur"} />
      <Card image={zapdos} name={"Zapdos"} />
    </div>
  );
};

export default Cards;
