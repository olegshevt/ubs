import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

type PropsType = {
}

let Preloader: React.FC = () => {
    return <div style={{ backgroundColor: 'white', textAlign: 'center' }}>
        <img src={preloader} />
    </div>
}

export default Preloader;