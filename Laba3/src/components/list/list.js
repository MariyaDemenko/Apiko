import React, {Component} from 'react'
import Item from '../item/item.js'

class List extends Component{
    constructor(props){
        super(props);

        this.onRemoveItem = this.props.onTaskRemove.bind(this);
        this.onCrossChange = this.props.onCrossChange.bind(this);

    }

    render(){
        var itemsList = this.props.itemList.map(i => {
            return([
                    <Item 
                        key={i.id}
                        item={i} 
                        id={i.id}
                        onRemove={this.onRemoveItem}
                        onCrossChange={this.onCrossChange}/>
                    ]
                )
            })

        if (this.props.filter !== 'all'){
            var t = this.props.filter === 'done' ? true : false;
            itemsList = itemsList.filter(i => (i[0].props.item.isChecked === t));
        }

        return(
            <div className="list">
                {itemsList}
            </div>
        )

    }
}

export default List;