import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
    state = {
        authenticated: true
    }
    render() {
        const { authenticated } = this.state;
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
                        <Button floated="right" positive inverted content="Create Event" as={Link} to='/createEvent' />
                    </Menu.Item>
                    {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
                </Container>
            </Menu>
        )
    }
}

export default NavBar;