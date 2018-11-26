import React, { Component } from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import List from './components/list/list.js';
import './App.css';

class App extends Component {

constructor(){
  super();

  document.title = "To-do list";

  this.addTask = this.addTask.bind(this);
  this.removeTask = this.removeTask.bind(this);
  this.crossChange = this.crossChange.bind(this);
  this.filterChange = this.filterChange.bind(this);

  this.state = {
    items: JSON.parse(localStorage.getItem("tasks")) || [
        {id: "_testTask", title: "Pet the cat", isChecked: false}
    ],
    filter: "all",
}
}

idGen() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

refreshLocalStorage(){
   localStorage.setItem("tasks", JSON.stringify(this.state.items));
}

removeTask(p){
  this.setState({
    items: this.state.items.filter(function(i){
      return i.id !== p
    })
  }, () => {this.refreshLocalStorage()})
}

addTask(p){
  this.setState({
    items: [{id: this.idGen(), title: p, isChecked: false}, ...this.state.items]
   },() => {this.refreshLocalStorage()})
}

crossChange(p){
  this.setState({
    items: this.state.items.map(function(i){
      return p === i.id ? {id: i.id, title: i.title, isChecked: !i.isChecked} : i
    })
  }, () => {this.refreshLocalStorage()})
}

filterChange(e){
  this.setState({
    filter: e.target.value
  })
}

render() {
    return (
      <div className="App">

        <Header
          onTaskAdd={this.addTask}
          onFilterChange={this.filterChange}
        />

        <List 
          filter={this.state.filter}
          itemList={this.state.items}
          onTaskRemove={this.removeTask}
          onCrossChange={this.crossChange}
        />

        <Footer
          itemList={this.state.items}
        />
      </div>
    );
  }
}

export default App;
