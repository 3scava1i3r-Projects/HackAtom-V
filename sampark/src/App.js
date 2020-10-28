import React, { Component } from 'react';
import logo from './logo.svg';
import Web3 from 'web3';
import  { SkynetClient }  from "./skynet-js";
// import CryptoJS from "./crypto-js";
import Portis from '../node_modules/@portis/web3';
import swal from '@sweetalert/with-react';
import Sampark from "./abis/Sampark.json";
import './App.css';
import {Navbar , Card , Button, Jumbotron , Container}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fileUpload.js';


function App() {


  const client = new SkynetClient();





  async function ArtUpload() {
  try {
    const client = new SkynetClient("https://siasky.net/");
    const skylink = await client.uploadFile();
  } catch (error) {
    console.log(error)
  }
}
  // async loadWeb3() {
  //
  // }

  // import Portis from '@portis/web3';
  // import Web3 from 'web3';
  //
  // const portis = new Portis('bbced70d-d863-4024-9722-61e987ebaa3e', 'mainnet');
  // const web3 = new Web3(portis.provider);

  function ArtUp(e) {
      console.warn(e.target.files[0]);
      const files = e.target.files;
    }



  return (
    <div className="App">

      <div className="nav">
          <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="require(./logo.png)"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Sampark
          </Navbar.Brand>
        </Navbar>
      </div>

      <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
    </Jumbotron>


      <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Issue Token</h1>
                <br/>
                


                <input type="file"

									style={{ display: 'none' }}
								/>
                <input style={{
                  marginDown:'10rem'

                }}

                  type='submit'
                  className='btn btn-block btn-primary'
                  value='Upload to get skylink'
                />
                <br/>
                <input
                  type='text'
                  className='form-control mb-1'
                  placeholder='Upload and Mint'

                />

                <input
                  type='submit'
                  className='btn btn-block btn-primary'
                  value='MINT'
                />

              </div>
            </main>
          </div>
        </div>

      <div className="body">
        <div className="row">
          <Card style={{
             width: '18rem',
             margin: '3rem',
             padding: '2rem'
           }}>
              <Card.Img variant="top" src="./logo.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>

          <Card style={{
             width: '18rem',
             margin: '3rem',
             padding: '2rem'
           }}>
              <Card.Img variant="top" src="./logo.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>

          <Card style={{
             width: '18rem',
             margin: '3rem',
             padding: '2rem'
           }}>
              <Card.Img variant="top" src="./logo.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default App;
