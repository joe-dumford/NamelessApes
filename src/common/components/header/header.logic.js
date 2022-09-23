import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


import HeaderView from './header.view';

const Header = ({
                    children
                }) => {
    const [userDetails, setUserDetails] = useState(undefined);
    const [showDropdown, setShowDropdown] = useState(false);
    // const navigate = useNavigate();

    return (
        <HeaderView
            children={children}
            showDropdown={showDropdown}
            onHandleDropDown={()=>{ setShowDropdown(!showDropdown) }}
        />
    );
};

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
    ])
};

export default Header;
