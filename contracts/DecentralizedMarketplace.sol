
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;


contract DecentralizedMarketplace {
    
    struct Vendor {
        address payable vendorAddress;
        string name;
        string email;
        uint[] itemIds;
    }

    struct Item {
        uint itemId;
        address payable vendorAddress;
        string name;
        string discription;
        uint priceInwei;
        bool isSold;
    }

    Vendor[] public vendors;
    Item[] public items;
    mapping(address => uint) public vendorIndex;
    mapping(uint => uint) public itemIndex;
    uint public itemCount;
    uint public vendorCount;

    event VendorRegistered(address vendorAddress, string name, string email);
    event ItemListed(uint itemId, address vendorAddress, string name, uint price);
    event ItemPurchased(uint itemId, address buyer, uint price);

    modifier onlyVendor() {
        require(vendorIndex[msg.sender] != 0, "Only registered vendors can perform this action");
        _;
    }
              
    // Register as a vendor
    function registerVendor(string memory name, string memory email) public {
        require(bytes(name).length > 0, "Name is required");
        require(bytes(email).length > 0, "Email is required");
        require(vendorIndex[msg.sender] == 0, "Vendor already registered");

        vendorCount++;
        vendors.push(Vendor(payable(msg.sender), name, email, new uint[](0) ));
        vendorIndex[msg.sender] = vendorCount;

        emit VendorRegistered(msg.sender, name, email);
    }
      //list of item
      function ListItem(string memory name,string memory discription,uint price)public onlyVendor{
               require(bytes(name).length>0,"Name is required");
                  require(bytes(discription).length>0,"Discription is required");
                     require(price>0,"Amounnt is required");
                     uint priceInwei=price*1 ether;
                     itemCount++;
                     items.push(Item(itemCount,payable(msg.sender),name,discription,priceInwei,false));
                     vendors[vendorIndex[msg.sender]-1].itemIds.push(itemCount);
                     itemIndex[itemCount]=items.length-1;
       
                  emit ItemListed(itemCount,msg.sender,name,priceInwei);
                  
      }
      //buy an item
      function buyItem(uint itemId) public payable{
        uint index = itemIndex[itemId];
        Item storage item = items[index];
        require(item.itemId > 0 && item.itemId <= itemCount, "Invalid item ID");
                require(!item.isSold, "Item is already sold");
        require(msg.value == item.priceInwei, "Incorrect value sent");
      
        item.vendorAddress.transfer(msg.value);
        item.isSold = true;

        emit ItemPurchased(itemId, msg.sender, item.priceInwei);
      
      }
        function getVendor(address vendorAddress) public view returns (string memory name, string memory email, uint[] memory itemIds) {
        uint index = vendorIndex[vendorAddress];
        require(index != 0, "Vendor not found");
        Vendor storage vendor = vendors[index - 1];
        return (vendor.name, vendor.email, vendor.itemIds);
    }
          function getItem(uint itemId) public view returns (uint, address, string memory, string memory, uint, bool) {
        uint index = itemIndex[itemId];
        require(index < items.length, "Item not found");
        Item storage item = items[index];
        return (item.itemId, item.vendorAddress, item.name, item.discription, item.priceInwei, item.isSold);
    }
     function getAllVendors() public view returns (Vendor[] memory) {
        return vendors;
    }
     function getAllItems() public view returns (Item[] memory) {
        return items;
    }
}
