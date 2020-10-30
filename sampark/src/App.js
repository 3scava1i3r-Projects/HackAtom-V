// import Sampark from "./abis/Sampark.json";
import memorial from "./abis/memorial.json";
import React, { Component } from 'react';
import logo from './logo.svg';
import Web3 from 'web3';
import  { SkynetClient }  from "./skynet-js";
import swal from '@sweetalert/with-react';
import './App.css';
import {Navbar , Card , Button, Jumbotron , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fileUpload.js';



//skylink new cliennt
const client = new SkynetClient();
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "hash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "author",
        "type": "address"
      }
    ],
    "name": "ImageCreated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "imageCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "images",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "hash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "address payable",
        "name": "author",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_imgHash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "uploadImage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

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

      swal("Non-Ethereum browser detected", "You should consider trying MetaMask!", "warning");
    }
  }




  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(accounts)
    const networkId = await web3.eth.net.getId()
    const networkData = memorial.networks[networkId]

    if(networkData) {
      const memorial = new web3.eth.Contract( abi, networkData.address)
      this.setState({ memorial })
      const imagesCount = await memorial.methods.imageCount().call()
      this.setState({ imagesCount })

      for (var i = 1; i <= imagesCount ; i++) {
        const asset = await memorial.methods.images(i-1).call()
        this.setState({
          images: [...this.state.images, asset]
        })
      }
      console.log(this.state.images)

    } else{
      swal("Incorrect Chain", "Try reconnecting", "warning");
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
      const gg  = await client.uploadFile(this.state.buffer);
      const skylink = gg.slice(4,);
      console.log(skylink)

      const web3 = window.web3
      const accounts = await web3.eth.getAccounts()
      const n = await this.state.memorial.methods.uploadImage(skylink , 'hello').send({from : accounts[0]})
      const l = n.transactionHash
      console.log(l)
    } catch (error) {
      console.log(error)
    }
  }

async PaymentForSupport(){
    try {

      web3.eth.sendTransaction(
        from:accounts[],
        to:{image.author}
      )
    }
    catch (error) {
      console.log(error)
    }
}



  constructor(props) {
    super(props)
    this.state = {
      account: '',
      memorial: null,
      images:[],

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
                src="https://cdn0.iconfinder.com/data/icons/digital-nomad-freelancer-aqua-vol-1/500/Good_Internet-512.png"
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
                  //  this.ArtUpload()
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

            <p>&nbsp;</p>  <p>&nbsp;</p>




            {
              this.state.images.map((image,key) => {
                return(


                  <div className="row">
                    <div className="col-md-3" align="center">
                      <Card style={{
                       width: '18rem',
                       margin: '3rem',
                       padding: '2rem'
                     }}>
                        <Card.Img variant="top" src={`https://siasky.net/${image.hash}`}/>
                        <Card.Body>
                          <Card.Title>{image.description}</Card.Title>
                          <Card.Text>
                          {image.author}


                          </Card.Text>
                          <Button variant="primary"
                            onClick={
                              try {

                                web3.eth.sendTransaction(
                                  from:accounts[],
                                  to:{image.author}
                                )
                              }
                              catch (error) {
                                console.log(error)
                              }


                            }>
                            Support them
                          </Button>
                        </Card.Body>
                    </Card>
                    </div>



                  </div>



                  )
                }
              )
            }

      </div>
    );
  }
}

export default App;
