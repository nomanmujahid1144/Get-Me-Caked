import classes from "./Layout.module.css";
import { Navbar } from "../major-components/Navbar";
import Instagram from '../../assets/icons/instagram_logo.gif';
import phone from '../../assets/icons/Circle-icons-phone.png';

function Layout(props) {
    return (
        <div >
            <Navbar />
            <main className={classes.main}>{props.children}</main>
            <div className="floating-container">
                <div className="floating-button">+</div>
                <div className="element-container">
                    <span className="float-element">
                        <a className='trans' href='#' target='_black'>
                            <img src={Instagram} />
                        </a>
                    </span>
                    <span className="float-element">
                        <a className='trans' href='tel:+1-949-405-4130'>
                            <img src={phone} />
                        </a>
                    </span>
                    <span className="float-element">
                        <a className='trans' href='tel:+1-657-254-6496'>
                            <img src={phone} />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Layout;
