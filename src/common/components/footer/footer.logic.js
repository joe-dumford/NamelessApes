import React, { useState } from 'react';

import FooterView from './footer.view';

import './_footer.scss';

const Footer = (props) => {
    const [mocksModalIsOpen, setMocksModalIsOpen] = useState(false);

    const openMocksModal = () => {
        this.setState({modalIsOpen: true });
    };

    const closeMocksModal = () => {
        this.setState({modalIsOpen: false });
    };

    return (
        <FooterView
            mocksModalIsOpen={mocksModalIsOpen}
            onOpenMocksModal={openMocksModal}
            onCloseMocksModal={closeMocksModal}
        />
    );
}

export default Footer;
