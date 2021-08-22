import React from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import s from "./ListPage.module.css";
import Preloader from "../../components/common/Preloader/Preloader";

const ListPage: React.FC = () => {
  const { fetchMusic } = useActions();
  const { error, data, loading } = useTypedSelector((state) => state.music);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchMusic();
  }, []);

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <div>
        <h1>Music list Important Staff</h1>
        <h2>Here is a list of Important Staff</h2>
        <table className={s.listTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          {error && <h3>{error}</h3>}
          {loading && <Preloader />}
          <tbody>
            {!error &&
              !loading &&
              data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link className={s.rowLink} to={`/product/${item.id}`}>
                      {item.id}
                    </Link>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListPage;
