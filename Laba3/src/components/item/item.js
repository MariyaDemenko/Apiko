import React, {Component} from 'react'
import './item.css'

class Item extends Component{

constructor(props){
    super(props);

    this.removeHandler = this.props.onRemove.bind(this);
    this.crossChange = this.props.onCrossChange.bind(this);
}

crossHandler(){
    this.crossChange(this.props.item.id);
};

    render(){
        var className = this.props.item.isChecked ? "crossed" : "title";

        return(
            <div className="item">
                <b
                 className={className}
                 onClick={() => {this.crossHandler()}}
                 >{this.props.item.title}
                 </b>

                <button
                 onClick={() => {this.removeHandler(this.props.item.id)}} 
                 className="btn-remove"
                 >
                Remove
                </button>
            </div>
        )
    }
}

export default Item;