pragma solidity >=0.4.25 <6.2.0;

import "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import './openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import "./openzeppelin-solidity/contracts/access/Ownable.sol";


contract Sampark is ERC721 , Ownable {


    using SafeMath for uint256;
    using SafeMath for uint32;
    using SafeMath for uint16;


    event NewArt( uint256 token_id, string name , string skylink , address curOwnerAdd);

    // Global Variable now

    // uint256 token_id;
    // string skylink;
    // string[] public art_work;
    // address ;

    struct Art {
        uint256 token_id;
        string name;
        string skylink;
        address curOwnerAdd;
    }

    Art[] public  allartwork;

    mapping (string => bool) _artwork_exist;
    mapping (uint256 => address) public ArtToOwner;
    mapping (string => uint256) public NeedTokenId;
    // Constructor

    constructor() ERC721("Art","ART") public {

    }
    // mint function to create new tokens

      function CreateArt(string memory _artwork, string memory Name) public {
// returns(uint256 _token_id, string memory _name,string memory _skylink, address _curOwnerAdd)
      require(!_artwork_exist[_artwork]);
      require(bytes(_artwork).length > 0);
      require(bytes(Name).length > 0);
      require(msg.sender!=address(0));

      uint256 id = allartwork.length;
      allartwork.push(Art(id,Name, _artwork, msg.sender));

      ArtToOwner[id] = msg.sender;
      NeedTokenId[_artwork] = id;
      emit NewArt(id, Name ,_artwork,  msg.sender );
      // uint256 _id = art_work.push(_artwork);
       // uint _id = allartwork.push(Art(Name, msg.sender , _artwork));


      // allartwork.push(Art(Name, msg.sender , _artwork));

      // _mint(msg.sender, _artwork);
      _artwork_exist[_artwork] = true;

      // Art memory art = Art({
      //       token_id: art_work.push(_artwork),
      //       name: Name,
      //       curOwnerAdd: msg.sender,
      //       skylink: _artwork
      //   });
      //
      //   allartwork.push(art);

      // return (art.token_id ,art.name , art.skylink, art.curOwnerAdd);

    }

    // function buy(address _from ,address _to,uint256 _token_id) public returns(bool){
    //
    //    safeTransferFrom(_from,  _to,  _token_id);
    //
    //   // ArtToOwner[_token_id] = _to;
    //
    //   return true;
    // }
    //
    // function checkOwner(string memory _token_id) public returns(address){
    //
    //   return ArtToOwner[_token_id];
    // }


    function buy(address from , address to, string memory skylink) private {


      _transfer( from,  to,  NeedTokenId[skylink]);
      ArtToOwner[NeedTokenId[skylink]] = to;

    }

    function checkOwner(string memory skylink) public view  returns (address) {

      ownerOf(NeedTokenId[skylink]);
      return ArtToOwner[NeedTokenId[skylink]];
    }

    // function _transfer(address _from, address _to, uint256 _token_id) private override {
    //
    //   ArtToOwner[_token_id] = _to;
    //   emit Transfer(_from, _to, _token_id);
    // }

  }
