import headshot from '../head_circle.jpg';

function Contact() {
    return (
        <div className="contactContainer">
            <div id="contactPic">
                <img src={headshot} alt="My headshot" width="200em" height="200em" />
            </div>
            <div id="contactInfo" className="contactInfo">
                <h1>Megan Juell</h1>
                <h2>SCUBA Instructor</h2>
                <p>meganljuell@gmail.com</p>
                <p>+52 987 141 6220</p>
                <p>+1 760 452 0726</p>
            </div>
        </div>
    );
};

export default Contact;