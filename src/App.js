import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filteredEmoji from "./filterEmoji"
import './App.css';

export default class App extends PureComponent(){
  constructor(props){
    super(props);
    this.state = {
      filteredEmoji: filteredEmoji("", 20)
    };

    handleSearchChange = event => {
      this.setState({
        filteredEmoji: filteredEmoji(event.target.value, 20)
      });
    }
  }
  render(){
    return <div className="App">
      <Header />
      <SearchInput textChange={this.handleSearchChange}/>
      <EmojiResults emojiData={this.state.filteredEmoji}/>
    </div>;
  }
  
}


