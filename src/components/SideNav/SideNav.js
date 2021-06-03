
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
    return (
        <Router>
            <div className="side-nav">
                <ul>
                    <li>
                        <Link to="/" >
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/info" >
                            <svg viewBox="0 0 24 24">
                                <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
};

export default SideNav;