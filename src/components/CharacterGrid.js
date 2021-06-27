import React, { Component } from "react";
import CharacterItem from "./CharacterItem";

export default class CharacterGrid extends Component {
  render() {
    return (
      <section className="cards">
        {this.props.items.map((item) => (
          <CharacterItem key={item.id} item={item} />
        ))}
      </section>
    );
  }
}
