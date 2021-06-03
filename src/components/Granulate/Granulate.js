
import SideNav from '../SideNav';
import routes from './Routes';
import './Granulate.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

const Granulate = () => {
    return (
        <div className="main" >
            <SideNav />
            <div className="content">
                <Router>
                    <Switch>
                        {routes.map(({path, Component, exact}, index) => {
                            return (
                                <Route path={path}  exact={exact} key={index}>
                                    <Component />
                                </Route>
                            );
                        })}
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Granulate;

