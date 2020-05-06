// import React from 'react';
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./table";
import Form from "./form";


class App extends Component {
  state = {
    characters : [],
  }
  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }


  removeCharacter = (index) => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }


  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }


}

export default App;
