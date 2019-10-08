import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <NavLink to="/">
            <Menu.Item
            name='people'
            active={activeItem === 'people'}
            onClick={this.handleItemClick}
            >
            People
            </Menu.Item>
        </NavLink>

        <NavLink to="/groups">
            <Menu.Item
            name='groups'
            active={activeItem === 'groups'}
            onClick={this.handleItemClick}
            >
            Groups
            </Menu.Item>
        </NavLink>

        <Menu.Menu position='right'>
          <Modal />
        </Menu.Menu>
      </Menu>
    )
  }
}