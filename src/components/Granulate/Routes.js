import InstanceSelection from '../InstanceSelection';
import Info from '../Info';

const routes = [{
    path: '/',
    Component: InstanceSelection,
    exact: true
},{
    path: '/info',
    Component: Info,
    exact: true
}];
export default routes;