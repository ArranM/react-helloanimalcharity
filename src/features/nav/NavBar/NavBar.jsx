import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} to='/' exact header>
                        <img src="/assets/logo.png" alt="logo" />
                        H.A.C
                      </Menu.Item>
                    <Menu.Item name="Events" as={NavLink} to='/events' />
                    <Menu.Item name="People" as={NavLink} to='/people' />
                    <Menu.Item>
                        <Button floated="right" positive inverted content="Create Event" as={Link} to='/createEvent'/>
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Button basic inverted content="Login" />
                        <Button basic inverted content="Sign Out" style={{ marginLeft: '0.5em' }} />
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}

export default NavBar;