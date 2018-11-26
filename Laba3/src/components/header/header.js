import React, {Component} from "react";
import "./header.css"

class Header extends Component{

constructor(props){
    super(props);

    this.addTask = this.props.onTaskAdd.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.filterChangeHandler = this.props.onFilterChange.bind(this);
    this.textInput = React.createRef();

    this.state = {
        value: "Pet the dog"
    }
}

addHandler(){
if (this.state.value.trim()){
    this.addTask(this.state.value);
        this.setState({
            value: ""
        })
    }
else alert("Type smth pls")
}

changeHandler(e) {
    this.setState({
        value: e.target.value
    })
}

render(){
    return(
        <div className="header">
            <div className="input-container">
                <input
                type="text"
                className="add-input"
                value={this.state.value}
                onChange={ (e) => {this.changeHandler(e) }}
                ref={this.textInput}
                />

                <button
                className="add-btn"
                onClick={() => {this.addHandler();
                                this.textInput.current.focus();}
                }>
                Add
                </button>
             </div>
         <p>
            <input onChange={(e) => {this.filterChangeHandler(e)}} type="radio" name="filter" value="all" defaultChecked/>All
            <input onChange={(e) => {this.filterChangeHandler(e)}} type="radio" name="filter" value="done"/>Done
            <input onChange={(e) => {this.filterChangeHandler(e)}} type="radio" name="filter" value="not"/>Not
        </p>
         </div>
    )
}
}

export default Header;