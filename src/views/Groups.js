import React, {Component} from 'react';
import {App} from '../layouts/App';
import ResultsList from '../components/GroupsResultsList/GroupsResultsList';

class Groups extends Component {
    render(){
        return(
            <App>
                <h1>Groups</h1>
                <ResultsList />
            </App>
        );
    }
}

export default Groups;