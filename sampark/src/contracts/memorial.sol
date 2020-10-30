pragma solidity >=0.4.25 <6.2.0;

contract memorial {

  string public name;
  uint public imageCount = 0;
  mapping(uint => Image) public images;

  struct Image {
    uint id;
    string hash;
    string description;
    address payable author;
  }

  event ImageCreated(
    uint id,
    string hash,
    string description,
    address payable author
  );


  constructor() public {
    name = "memorial";
  }

  function uploadImage(string memory _imgHash, string memory _description) public {
    require(bytes(_imgHash).length > 0);
    require(bytes(_description).length > 0);
    require(msg.sender!=address(0));

    imageCount ++;

    images[imageCount] = Image(imageCount, _imgHash, _description, msg.sender);
    emit ImageCreated(imageCount, _imgHash, _description, msg.sender);
  }


}
