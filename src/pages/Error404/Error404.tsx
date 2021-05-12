import React from 'react';
import s from './404.module.css';
import { Link } from 'react-router-dom';

const Error404: React.FC = () => {
    return (
        <div>
            <div className={s.errorContainer}>
                <h1 className={s.errorItem}>Page not found</h1>
                <p className={s.errorItem}>You can check <Link to="/">our main page</Link>!</p>
            </div>
        </div>
    )
}

export default Error404;