import { Component } from 'react';
import TitleComponent from './title/title';

class ItemListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '...'
         }
    }
    render() { 
        return ( 
            <div>
                <TitleComponent name={this.state.name} />
            </div>
         );
    }
}
 
export default ItemListContainer;
