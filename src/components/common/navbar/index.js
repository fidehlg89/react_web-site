import React, { useState } from 'react'
import './navbar.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';

const menu = [
    {
        title: 'Quem somos',
        link: '#section2'
    },
    {
        title: 'Projetos',
        link: '#section3'
    },
    {
        title: 'Contato',
        link: '#section4'
    }
]

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className="container-fluid" color="transparent" light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <ul className="navbar-nav ml-auto navbar-fix">
                    {
                        menu ? menu.map((item, index) => (
                            <NavItem key={index}>
                                <NavLink href={item.link}>{item.title}</NavLink>
                            </NavItem>
                        )
                        ) : null
                    }
                </ul>
            </Collapse>
        </Navbar>
    );
}

export default NavigationBar