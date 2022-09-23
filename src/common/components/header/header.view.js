import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomEventService from '../../services/custom.event.service';

const HeaderView =({
    children,
    showDropdown,
    onHandleDropdown = () => {},
}) => {

    const handleNavigate = (route = 'home') => {
        CustomEventService.navigate(`/namelessapes/${route}`);
    };

    return (
        <div>
            <a className="p-2 text-dark" onClick={() => {handleNavigate('tour')}}>Tour</a>
        </div>
    )
};

HeaderView.propTypes = {
    showDropdown: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
    ]),
    onHandleDropDown: PropTypes.func
}

export default HeaderView;
