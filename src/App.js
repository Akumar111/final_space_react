import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const fetchItems = async () => {
      const result = await axios(`https://finalspaceapi.com/api/v0/character/`);
      this.setState({ items: result.data });
    };
    fetchItems();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <CharacterGrid items={this.state.items} />
      </div>
    );
  }
}
