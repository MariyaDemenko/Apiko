import React, {Component} from 'react'

class Footer extends Component{
    render(){
        var items = this.props.itemList;
        return(
            <div className="footer">
                <hr></hr>
                <p><b>{items.length}</b> in total</p>
                <p><b>{items.filter(i => (i.isChecked)).length}</b> done | 
                   <b> {items.filter(i => (!i.isChecked)).length}</b> - not
                </p>
            </div>
        )
    }
}

export default Footer 