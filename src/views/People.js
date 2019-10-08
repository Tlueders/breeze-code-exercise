import React, {Component} from 'react';
import {App} from '../layouts/App';
import ResultsList from '../components/ResultsList/ResultsList';

class People extends Component {
    render(){
        return(
            <App>
                <h1>People</h1>
                <ResultsList />
            </App>
        );
    }
}

export default People;