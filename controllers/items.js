const { v4 } = require("uuid");

let itemData = [];

const getItem = (req, res) => {
  res.json(itemData);
};

const addItem = (req, res) => {
  const item = req.body;
  itemData.push({ ...item });
  res.send(`Item "${item.name}" has been added successfully.`);
};

/* const getItemId = (req, res) => {
 // const { id } = req.params;
  //const itemFound = itemData.find((item) => item.id === id);
  //console.log(itemFound);
  //res.send(itemFound);
}; */

const deleteItem = (req, res) => {
  //const { id } = req.params;
  //itemData = itemData.filter((item) => item.id !== id);
  console.log(itemData);
  res.send(`Item with id ${id} has been deleted successfully.`);
};

const updateItem = (req, res) => {
  //const { id } = req.params;
  const { label, value } = req.body;
  // test
  //const item = itemData.find((item) => item.id === id);

  if (label) item.label = label;
  if (value) item.value = value;
  

  res.send(
    `Item with name ${item.name} has been updated successfully`
  );
};

const getAllItems = (req,res)=> {

  
  res.json(itemData);

};

module.exports = { getItem, addItem, deleteItem, updateItem,getAllItems};

