import React, {useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';

import TourBaseView from 'tour.base.view';

const Tour = (props) => {
    // const navigate = useNavigate();
    const [useTourState, setTourState] = useState('Apes');
    useEffect(() => {}, []);
    const initApp = () => {

        // setTourState({
        //     loading: false,
        // })
    };

    return (
        <TourBaseView />
    )
};

export default Tour;
