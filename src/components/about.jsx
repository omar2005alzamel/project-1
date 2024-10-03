
import Container from 'react-bootstrap/Container';
import img2 from '../image/img2.png'
const About = () => {
    return (
        <div>
            <div className="about">
                <Container className='d-flex justify-content-between'>
                    <div className="box d-flex ">
                        <div className="image">
                        <img src={img2} alt="" />
                        </div>
                        <div className="info">
                            <h1>IPHONE 12 PRO MAX</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odit! </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default About;
