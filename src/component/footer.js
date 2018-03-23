import React from 'react';

const Footer = () => (

    <div className="footer">
        <div className="contacts">
            <div className="footer_text_div">
                <h3 className="footer_title"> About the website </h3>
                <p className="footer_text"> This website is made in Tumo Center for Creative Technologies.<br/></p>
            </div>

            <div className="left_side">
                <div className="address"> 
                    <img src="http://iconshow.me/media/images/ui/ios7-icons/png/512/location_1.png" width="50px" alt="Not found"></img> 
                    <p className="adress_text">16 Halabyan Street <br/> <b>Yerevan, Armenia</b> </p>
                </div>

                <div className="phone">
                    <img src="https://png.icons8.com/metro/1600/phone.png" width="35px" alt="Not found"></img>
                    <p className="phone_text">+374 10 398413</p>
                </div>

                <div className="e-mail">
                    <img src="https://image.flaticon.com/icons/svg/59/59965.svg" width="35px" alt="Not found"></img>
                    <a className="e-mail_text" href="mailto:%69%6efo@tu%6do%2e%6f%72g">info@tumo.org</a>
                </div>
            </div>

        </div>
    </div>

);

export default Footer;