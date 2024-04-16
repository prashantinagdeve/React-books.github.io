import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Bookdata from '../Bookdata';


const Bookview = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}> Hello You can Read Book</h1>
            

            <div className='container'>
            
                <div className='row'>

                {
                    Bookdata.map((cval) => {
                        return (
                            <>

                                <div className='col-md-4 mt-5'>
                                    <div className='card ' style={{ width: "18rem" }}>
                                    



                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={cval.cover}  height={400} width={450}/>
                                            <Card.Body>
                                                <Card.Title>{cval.BookName}</Card.Title>
                                                <Card.Title>{cval.Auther}</Card.Title>
                                                <Card.Title>{cval.rating}</Card.Title>
                                                
                                                
                                                <Button href={cval.link} target='_blank' variant="primary">Read now</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                </div>

                            </>

                        )
                    })

                }





                
                </div>
            
            </div>
          
        </>

    )
}

export default Bookview