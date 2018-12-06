import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { cats } from './cats';
import './App.css';
import Scroll from './Scroll.js';


class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: [],
            searchField: ''  
        }
        console.log('LifeCycle Hook #1 - Constructor')
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ cats: users }))
        //this.setState( { cats: cats } )
        console.log(`LifeCycle Hook #2 - I'm lexically second, but last in the mounting
        lifecycle - I'm componentDidMount`);
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    
    render() {  
        const { cats, searchField } = this.state;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        } )
        console.log(`LifeCycle Hook #3 - I'm lexically third, but I get run second
        because there is no 'componentWillMount', then again when 'componentDidMount'
        changes the cats array to the imported and destructured cat object)`);
        return !cats.length ?
            <h1>Loading... </h1> :
         (
            <div className="tc">
                <h1 className='f1'>MiaowyFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList cats={filteredCats} />
                </Scroll>
            </div>
        );
     };
};

export default App;