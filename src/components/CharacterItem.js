import React, { Component } from "react";

export default class CharacterItem extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={this.props.item.img_url} alt="" />
          </div>
          <div className="card-back">
            <h1>{this.props.item.name}</h1>
            <ul>
              <li>
                <strong>Name:</strong> {this.props.item.name}
              </li>
              <li>
                <strong>Gender:</strong> {this.props.item.gender}
              </li>
              <li>
                <strong>Species:</strong> {this.props.item.species}
              </li>
              <li>
                <strong>Alias:</strong> {this.props.item.alias}
              </li>
              <li>
                <strong>Status:</strong> {this.props.item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
