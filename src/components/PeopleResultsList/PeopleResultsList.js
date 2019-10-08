import React, { Component } from 'react'
import _ from 'lodash'
import { Table } from 'semantic-ui-react'

class PeopleResultsList extends Component {
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
        fetch("http://localhost:8000/api/people")
          .then(response => response.json())
          .then(data => this.setState({ data: data.data }));
    }

    render() {
        const { column, data, direction } = this.state

        return (
            <Table celled padded sortable fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell 
                  singleLine
                  sorted={column === 'first_name' ? direction : null}
                  onClick={this.handleSort('first_name')}
                  >
                    First Name
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'last_name' ? direction : null}
                    onClick={this.handleSort('last_name')}
                  >
                    Last Name
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'email_address' ? direction : null}
                    onClick={this.handleSort('email_address')}
                  >
                    Email
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'status' ? direction : null}
                    onClick={this.handleSort('status')}
                  >
                    Status
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    sorted={column === 'group_id' ? direction : null}
                    onClick={this.handleSort('group_id')}
                  >
                    Group ID
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>

              {
                  data.map((person, index) => {
                      return (
                          <Table.Row key={index}>
                              <Table.Cell>{ person.first_name }</Table.Cell>
                              <Table.Cell>{ person.last_name }</Table.Cell>
                              <Table.Cell>{ person.email_address }</Table.Cell>
                              <Table.Cell>{ person.status }</Table.Cell>
                              <Table.Cell>{ person.group_id }</Table.Cell>
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
