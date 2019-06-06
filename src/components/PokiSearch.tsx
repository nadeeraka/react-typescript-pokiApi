import React, { Component } from "react";
import User from "./interface/Use.interface";

export class PokiSearch extends Component<User> {
  render() {
    const { name, numberOfPokies } = this.props;
    return (
      <div>
        <h3>
          {" "}
          {name} {numberOfPokies && <span> has {numberOfPokies} pokemons</span>}
        </h3>
      </div>
    );
  }
}

export default PokiSearch;
