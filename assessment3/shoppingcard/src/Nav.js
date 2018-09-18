import React from 'react';
const Nav = ({ activeTab, onTabChange }) => (
    <nav className="App-nav">
    <ul>
    {/* {`App-nav-item ${activeTab === 0 && 'selected'}`} */}
    <li className="App-nav-item">
    <a onClick={() => onTabChange(0)}>Items</a>
    </li>
    {/* {`App-nav-item ${activeTab === 1 && 'selected'}`} */}
    <li className="App-nav-item">
    <a onClick={() => onTabChange(1)}>Cart</a>
    </li>
    </ul>
    </nav>
    );
export default Nav;