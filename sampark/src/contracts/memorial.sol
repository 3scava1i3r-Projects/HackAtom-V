pragma solidity >=0.4.25 <6.2.0;

contract memorial {

  string public name = 'memorial';
  uint public imageCount = 0;
  mapping(uint => Image) public images;

  struct Image {
    uint id;
    string hash;
    address payable author;
  }

  event ImageCreated(
    uint id,
    string hash,
    address payable author
  );


  constructor() public {
    name = "memorial";
  }

  function uploadImage(string memory _imgHash) public {
    require(bytes(_imgHash).length > 0);

    require(msg.sender!=address(0));

    imageCount ++;

    images[imageCount] = Image(imageCount, _imgHash, msg.sender);
    emit ImageCreated(imageCount, _imgHash, msg.sender);
  }


}
