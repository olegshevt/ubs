import React from 'react';
import Preloader from '../../components/common/Preloader/Preloader';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import { useActions } from '../../hooks/useActions';
import { useParams } from "react-router-dom";
import s from '../ListPage/ListPage.module.css';
import { Link } from 'react-router-dom';

interface ParamTypes {
    id: string
}

const DetailListPage: React.FC = () => {

    const { fetchMusicItem } = useActions();
    const { error, data, loading } = useTypedSelector((state) => state.musicItem);
    let { id } = useParams<ParamTypes>();

    React.useEffect(() => {
        fetchMusicItem(id);
    }, []);

    if (loading) {
        return (
            <Preloader />
        )
    } else {
        return (
            <div>
                <h1>{data.title}</h1>
                <table className={s.listTable}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>{data.title}</td>
                            <td>{data.price}</td>
                            <td>{data.description}</td>
                        </tr>
                    </tbody>
                </table>
                <p><Link to='/'>Back</Link></p>
            </div>

        )
    }
}

export default DetailListPage;