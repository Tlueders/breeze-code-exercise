import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { groupBy } from '../../../../../Library/Caches/typescript/3.6/node_modules/rxjs/internal/operators/groupBy';

class PeopleResultsList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/groups")
          .then(response => response.json())
          .then(data => this.setState({ data: data.data }));
    }

    render() {
        var data = this.state.data || [];

        return (
            <Table celled padded>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell singleLine>Group Name</Table.HeaderCell>
                  <Table.HeaderCell>Group Members</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>

              {
                  data.map((group, index) => {
                      return (
                          <Table.Row key={index}>
                              <Table.Cell singleLine>{ group.group_name }</Table.Cell>
                              <Table.Cell singleLine>{ group.members }</Table.Cell>
                          </Table.Row>
                      );
                    })
              }

              </Table.Body>
            </Table>
    );
}

}

export default PeopleResultsList;
