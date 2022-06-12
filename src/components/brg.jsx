import React from 'react';
import './iconexpanded.css';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faInstagram,faFacebook,faPinterest} from "@fortawesome/free-brands-svg-icons";

const Brg = () => {

    return (
        <div className='iconexpanded'>
            <div className="brgnavbar">
                <button>
                    <div className="close">
                        <div className="closebutton">
                            <span className='l cross1'></span>
                            <span className='l cross2'></span>
                        </div>
                        <p>CLOSE</p>
                    </div>
                </button>
               
                <div className="logo">
                    <img src="https://www.alterego-group.com/img/logo_white.svg" alt="logo" />
                </div>
                <div className="languages">

                        <a href="/en/" class="l01">eng</a>
                        <a href="/it/" class="l02">it</a>
                        <a href="https://essence.alterego-group.com/fr/" class="l02">fr</a>
                        <a href="https://essence.alterego-group.com/ar/" class="l02">عربي</a>
                        <a href="/" class="l02">ru</a>

                </div>
            </div>
            <div className="brgcontent">
                <div className="main">
                    <div className="title"><h1>MAIN</h1></div>
                    <div className="lititems">
                        <ul>
                            <li><a href="http://">AWARDS</a></li>
                            <li><a href="http://">PORTFOLIO</a></li>
                            <li><a href="http://">WORLDWIDE</a></li>
                        </ul>
                    </div>
                </div>
                <div className="About">
                    <div className="title"><h1>ABOUT</h1></div>
                    <div className="lititems">
                        <ul>
                            <li><a href="http://">TEAM</a></li>
                            <li><a href="http://">OFFICES</a></li>
                            <li><a href="http://">MEDIA</a></li>
                            <li><a href="http://">EVENTS</a></li>
                            <li><a href="http://">FRIENDS</a></li>
                            <li><a href="http://">PARTNERS</a></li>
                        </ul>
                    </div>
                </div>
                <div className="services">
                    <div className="title"><h1>SERVICES</h1></div>
                    <div className="lititems">
                        <ul>

                            <li><a href="http://">TURNKEY PROJECTS</a></li>
                            <li><a href="http://">ARCHITECTURE</a></li>
                            <li><a href="http://">INTERIOR DESIGN</a></li>
                            <li><a href="http://">FINISHING WORKS</a></li>
                            <li><a href="http://"> CONCEPTS</a></li>
                            <li><a href="http://"> CONSULTING</a></li>
                        </ul>
                    </div>
                </div>
                <div className="port">
                    <div className="title"><h1>PORTFOLIO</h1></div>
                    <div className="lititems">
                        <ul>
                            <li><a href="http://">  YACHTS AND PRIVATE JETS</a></li>
                            <li><a href="http://">DEVELOPMENT PROJECTS</a></li>
                            <li><a href="http://">OFFICES AND BOUTIQUES</a></li>
                            <li><a href="http://">HOTELS</a></li>
                            <li><a href="http://">PENTHOUSES AND APARTMENTS</a></li>
                            <li><a href="http://">COUNTRY HOUSES AND VILLAS</a></li>
                            <li><a href="http://">MANSIONS AND ESTATES</a></li>
                        </ul>
                    </div>
                </div>
                <div className="contacts">
                    <div className="title"><h1>CONTACTS</h1></div>
                    <div className="lititems">
                        <ul>
                            <li><a href="http://">MILAN</a></li>
                            <li><a href="http://">ABUJA</a></li>
                            <li><a href="http://">  SAINT-TROPEZ</a></li>
                            <li><a href="http://">  SAINT-TROPEZ</a></li>
                            <li><a href="http://">SARDINIA</a></li>
                            <li><a href="http://">ONLINE</a></li>
                            <li><a href="http://">MONACO COMING SOON</a></li>
                        </ul>
                    </div>
                </div>
                <div className="blog">
                    <div className="title"><h1>BLOG</h1></div>
                    <div className="lititems">
                        <ul>
                            BLOG                            
                            <li><a href="http://">AWARDS</a></li>
                            <li><a href="http://">BLOG</a></li>
                            <li><a href="http://">ART</a></li>
                            <li><a href="http://">REVIEWS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="left">
                    <div style={{opacity:0.5}}>BOOK A MEETING</div>
                    <div><a className='nothover'href="mailto:WELCOME@ALTEREGO-GROUP.COM">WELCOME@ALTEREGO-GROUP.COM</a></div>
                    <div style={{ opacity: 0.5 }}>PARTNERSHIP</div>
                    <div><a className='nothover' href="mailto:PARTNERS@ALTEREGO-GROUP.COM"></a>PARTNERS@ALTEREGO-GROUP.COM</div>

                </div>
                <div className="middle">
                    <div className="suggest">We would love to share ideas, suggest options and answer your questions</div>
                    <div className="invite"><a href="http://"> WE INVITE YOU TO DISCUSS YOUR PROJECT </a> <span className='l'></span></div>
                </div>
                <div className="right">
                    <div className="sm">
                       <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faPinterest} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Brg

