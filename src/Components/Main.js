import React, {Component} from 'react';
import List from './List';
import Title from './Title';


class Main extends Component {
    render(){
        return (
            <div> 
                <Title title ={'To DO List'}/>
                <List tasks ={['Mow the lawn', 'walk the dog']}/>
                <List tasks ={['laundry']}/>
                <List tasks ={['hose the driveway', 'dig the trench']}/>
            </div>
        )
    }
}

export default Main;