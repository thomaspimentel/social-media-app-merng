import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

export const MenuBar = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick} />
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick} />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={handleItemClick} />
                    <Menu.Item
                        name='register'
                        active={activeItem === 'register'}
                        onClick={handleItemClick} />
                </Menu.Menu>
            </Menu>
            <Segment>
                <img src='/images/wireframe/media-paragraph.png' />
            </Segment>
        </div>
    )
}