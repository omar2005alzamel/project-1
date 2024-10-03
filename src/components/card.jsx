import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Cardd = ({item}) => {
    return (
        <div>
            <Container className='d-flex flex-wrap justify-content-between '> 
                {
                    item.length >=1 ? (
                        item.map((item)=>{
                            return (
                            <Card style={{ width: '18rem' }} className='my-5' key={item.id}>
                                <Card.Img variant="top" src={item.img}  style={{width:'100px', margin:'auto'}}/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <p>company:{item.company}</p>
                                    <p>manufacture:{item.manufacture}</p>
                                    <Card.Text>
                                    {item.price}
                                    </Card.Text>
                                    <Link to={`/lastcard/${item.id}`}><Button variant="primary">buy</Button></Link>
                                </Card.Body>
                            </Card>
                            )
                        })
                    ) : <h1>لا توجد بيانات</h1>
                }
            </Container>
        </div>
    );
}

export default Cardd
