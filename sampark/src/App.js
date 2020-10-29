import Sampark from "./abis/Sampark.json";
import React, { Component } from 'react';
import logo from './logo.svg';
import Web3 from 'web3';
import  { SkynetClient }  from "./skynet-js";
// import CryptoJS from "./crypto-js";
//import Portis from '../node_modules/@portis/web3';
import swal from '@sweetalert/with-react';
import './App.css';
import {Navbar , Card , Button, Jumbotron , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fileUpload.js';


//skylink new cliennt
const client = new SkynetClient();



class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }




  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    //console.log(accounts[0])
    const networkId = await web3.eth.net.getId()
    const networkData = Sampark.networks[networkId]


    if(networkData) {
      const sampark = new web3.eth.Contract(Sampark.abi, networkData.address)
      this.setState({ sampark })
      const assetCount = await this.state.Sampark.methods.assetCount().call()
      this.setState({ assetCount })

    } else{
      window.alert('Incorrect Network')
    }

    for (var i = 1; i <= assetCount ; i++) {
      const asset = await Sampark.methods.asset(i).call()
      this.setState({
        assets: [...this.state.asset, asset]
      })
    }
  }

//

  // async loadWeb3() {
  //
  // }

  // import Portis from '@portis/web3';
  // import Web3 from 'web3';
  //
  // const portis = new Portis('bbced70d-d863-4024-9722-61e987ebaa3e', 'mainnet');
  // const web3 = new Web3(portis.provider);

  // function ArtUp(e) {
  //     console.warn(e.target.files[0]);
  //     const files = e.target.files;
  //   }
  //
  //


  captureFile = event => {

    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
    this.setState({ buffer: Buffer(reader.result) })
    console.log('buffer', this.state.buffer)
    }
  }

  async ArtUpload() {
    try {
      const client = new SkynetClient("https://siasky.net/");
      const  skylink  = await client.uploadFile(this.state.buffer);
      console.log(skylink)

      const web3 = window.web3
      const accounts = await web3.eth.getAccounts()
      const n = await this.state.sampark.methods.CreateArt(skylink).send({from : accounts[0]})
      const l = n.transactionHash
      console.log(l)
    } catch (error) {
      console.log(error)
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      sampark: null,
      assets: [],
    }

    this.ArtUpload = this.ArtUpload.bind(this)
    this.captureFile = this.captureFile.bind(this)
  }

render(){
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

                  <form onSubmit={(event) => {
                    event.preventDefault()
                //    const description = this.imageDescription.value
                    this.ArtUpload()
                  }} >
                    <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.captureFile} />
                      <div className="form-group mr-sm-2">
                        <br></br>

                       </div>
                    <button type="submit" className="btn btn-primary btn-block btn-lg" onClick={this.ArtUpload}>Upload!</button>
                    </form>
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
}

export default App;
