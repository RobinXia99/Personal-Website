import rx from '../images/rx.gif';
import '../styles/aboutme.css';

const AboutMe = () => {


    return (
        <div className="main_container">
            <div className="about_me_container">
                <aside><span>&lt;aboutme&gt;</span></aside>

                <div>
                    <div className='name_container'>
                        <h1>I'm Robin Xia</h1>
                        <h4>App & Web development student</h4>
                    </div>

                    <p className='info_body'>
                        <h4>
                            What I enjoy the most is the creative freedom that
                            frontend development brings. 
                        </h4>
                        <h4>
                            It lets you turn all your visions into reality and it
                            brings you a mix of satisfaction and hunger for more.
                        </h4>
                    </p>

                </div>
                
                

                <aside><span>&lt;/aboutme&gt;</span></aside>
            </div>
            <img src={rx} className='logo'></img>
        </div>
    )

}

export default AboutMe;