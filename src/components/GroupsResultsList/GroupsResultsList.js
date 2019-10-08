import React, { Component } from 'react'
import _ from 'lodash'
import { Table } from 'semantic-ui-react'

class GroupsResultsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          data: [],
          column: null,
          direction: null,
        };
    }

    handleSort = (clickedColumn) => () => {
      const { column, data, direction } = this.state
  
      if (column !== clickedColumn) {
        this.setState({
          column: clickedColumn,
          data: _.sortBy(data, [clickedColumn]),
          direction: 'ascending',
        })
  
        return
      }
  
      this.setState({
        data: data.reverse(),
        direction: direction === 'ascending' ? 'descending' : 'ascending',
      })
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/groups")
          .then(response => response.json())
          .then(data => this.setState({ data: data.data }));
    }

    render() {
        const { column, data, direction } = this.state

        const renderGroupMembers = (group) => {

          let people = group.person.map((person, index) => {
            return <li key={index}>{person.first_name + ' ' + person.last_name}</li>;
          });

          return <ul>{people}</ul>;
        }

        return (
            <Table celled padded sortable fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    sorted={column === 'group_id' ? direction : null}
                    onClick={this.handleSort('group_id')}
                  >
                    Group ID
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'group_name' ? direction : null}
                    onClick={this.handleSort('group_name')}
                  >
                    Group Name
                  </Table.HeaderCell>
                  <Table.HeaderCell>Group Members</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>

              {
                  data.map((group, index) => {
                      return (
                          <Table.Row key={index}>
                              <Table.Cell>{ group.id }</Table.Cell>
                              <Table.Cell>{ group.group_name }</Table.Cell>
                              <Table.Cell>{ renderGroupMembers(group) }</Table.Cell>
                          </Table.Row>
                      );
                    })
              }

              </Table.Body>
            </Table>
    );
}

}

export default GroupsResultsList;
