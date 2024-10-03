import Container from 'react-bootstrap/Container';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const Lastcard = ({item}) => {
    const param=useParams()
    console.log(param)
    const product = item.find((p) => p.id === parseInt(param.id));
    console.log(product)
    return (
        <div>
            <div className="lastcard my-2">
                <Container>
                        <div className="description d-flex  justify-content-around" >
                        <div className="info py-5">
                            <p>name: {product.name}</p>
                            <p>Container:{product. company}</p>
                            <p>manufacture:{product.manufacture}</p>
                            <p>price:${product.price}</p>
                        </div>
                        <div className="image">
                            <img src={product.img} alt="" style={{width:'200px'}} />
                        </div>
                    </div>
                    <div className="title ">
                        <h2>description</h2>
                        <p>description:  {product.description}</p>
                    </div>
                    <Link to='/'><Button className='my-1'>Home</Button></Link>
                </Container>
            </div>
        </div>
    );
}

export default Lastcard;
