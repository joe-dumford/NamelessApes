import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from'prop-types';
import { Facebook, Instagram, Spotify, Youtube } from 'react-bootstrap-icons';

// import MocksModal from '../../modals/mocks/mocks.modal';
// import AppConstants from '../../services/app.constants';

const FooterView = ({
                        modalIsOpen = false,
                        onOpenMocksModal = () => { },
                        onCloseMocksModal = () => { }
                    }) => {

    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md px-md-4">
                                Call To Action Component
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md">
                                <div>
                                    <a>
                                        <Spotify style={{ color: '#1DB954', margin: '5px' }}/>
                                    </a>
                                    <a href="https://www.instagram.com/thenamelessapes/" target="_blank">
                                        <Instagram style={{ color: '#E1306C', margin: '5px' }} />
                                    </a>
                                    <a>
                                        <Facebook style={{ color: '#4267B2', margin: '5px' }}/>
                                    </a>
                                    <a>
                                        <Youtube style={{ color: '#FF0000', margin: '5px' }} />
                                    </a>
                                </div>
                                <div>
                                    <p className="text-center">&copy; 2020 Nameless Apes. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterView;
