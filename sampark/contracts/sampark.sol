pragma solidity >=0.4.22 <6.2.0;

import "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import './openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';


contract Sampark is ERC721 {

    using SafeMath for uint256;

    // Global Variable now

    uint256 token_id;
    // string skylink;
    string[] public art_work;
    // address ;

    struct Art {
        uint256 token_id;
        address curOwnerAdd;
        string skylink;

    }

    Art[] public allartwork;

    mapping (string => bool) _artwork_exist;

    // Constructor

    constructor() ERC721("Art","ART") public {

    }
    // mint function to create new tokens

    function mint(string memory _artwork) public returns(uint256 _token_id, string memory _skylink, address _curOwnerAdd){

      require(!_artwork_exist[_artwork]);

      //uint256 _id = art_work.push(_artwork);
      _mint(msg.sender, art_work.push(_artwork));
      _artwork_exist[_artwork] = true;

      Art memory art = Art({
            token_id: art_work.push(_artwork),
            curOwnerAdd: msg.sender,
            skylink: _artwork
        });

        allartwork.push(art);

      return (art.token_id  , art.skylink, art.curOwnerAdd);

    }

    function buy(address _from ,address _to,uint256 _token_id) public returns(bool){

      safeTransferFrom(_from,  _to,  _token_id);

      return true;
    }

    function checkOwner(uint256 _token_id) public returns(address){

      return ownerOf(_token_id);
    }
  }
