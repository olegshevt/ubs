import { Route, Switch } from 'react-router-dom';
import DetailListPage from '../../pages/DetailListPage/DetailListPage';
import ListPage from '../../pages/ListPage/ListPage';
import Error404 from '../../pages/Error404/Error404';

let routes = (
    <Switch>
        <Route exact path="/" render={() => <ListPage />} />
        <Route exact path="/product/:id?" render={() => <DetailListPage />} />
        <Route component={Error404} />
    </Switch>
);

const Routes: React.FC = () => {
    return (
        <>
            {routes}
        </>
    )

}

export default Routes;