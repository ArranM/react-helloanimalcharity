import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
    state = {
        authenticated: false
    }

    handleSignedIn = () => { this.setState({ authenticated: true }) }
    handleSignedOut = () => {
        this.setState({ authenticated: false });
        this.props.history.push('/');
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
                    <Menu.Item name="Test" as={NavLink} to='/test' />
                    <Menu.Item>
                        <Button floated="right" positive inverted content="Create Event" as={Link} to='/createEvent' />
                    </Menu.Item>
                    {authenticated ? <SignedInMenu signOut={this.handleSignedOut} /> : <SignedOutMenu signIn={this.handleSignedIn} />}
                </Container>
            </Menu>
        )
    }
}

export default withRouter(NavBar);