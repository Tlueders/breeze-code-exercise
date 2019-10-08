import React, {Component} from 'react';
import {App} from '../layouts/App';
import GroupsResultsList from '../components/GroupsResultsList/GroupsResultsList';

class Groups extends Component {
    render(){
        return(
            <App>
                <h1>Groups</h1>
                <GroupsResultsList />
            </App>
        );
    }
}

export default Groups;