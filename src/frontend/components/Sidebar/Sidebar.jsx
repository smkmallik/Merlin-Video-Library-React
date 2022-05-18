import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div>
                <ul className='sidebar__sidebarOptions'>
                    <li className='sidebar__sidebarOptionItem'>Home</li>
                    <li className='sidebar__sidebarOptionItem'>Explore</li>
                    <li className='sidebar__sidebarOptionItem'>Playlists</li>
                    <li className='sidebar__sidebarOptionItem'>Liked</li>
                    <li className='sidebar__sidebarOptionItem'>History</li>
                    <li className='sidebar__sidebarOptionItem'>Watch Later</li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;