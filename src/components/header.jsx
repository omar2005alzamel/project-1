import logo from '../image/logo.png'
import serach from '../image/serach.svg'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';




const Header = ({Filtersearch}) => {
    const [saerchvalue,setsearch]=useState('');
    const onsearch = ()=>{
        Filtersearch(saerchvalue)
        setsearch('')
    }
    return (
        <div>
            <div className="header p-3">
                <Container className='d-flex justify-content-between'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="serach">
                    <img src={serach} alt="" />
                    <from>
                    <input value={saerchvalue}    onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='search' />
                    <Button onClick={()=>onsearch()} variant="light" className='mx-2 p-1'>search</Button>
                    </from>
                </div>
                </Container>
            </div>
        </div>
    );
}

export default Header;
