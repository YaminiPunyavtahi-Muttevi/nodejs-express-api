const { v4 } = require("uuid");

let itemData = [];

const getItem = (req, res) => {
  res.json(itemData);
};

const addItem = (req, res) => {
  const item = req.body;
  itemData.push({ ...item, id: v4() });
  res.send(`Item "${item.CarModelName}" has been added successfully.`);
};

const getItemId = (req, res) => {
  const { id } = req.params;
  const itemFound = itemData.find((item) => item.id === id);
  console.log(itemFound);
  res.send(itemFound);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  itemData = itemData.filter((item) => item.id !== id);
  console.log(itemData);
  res.send(`Item with id ${id} has been deleted successfully.`);
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { CarModelName, CarModelCode, CityName, CityCode, ModelImage  } = req.body;

  const item = itemData.find((item) => item.id === id);

  
  if (CarModelName) item.CarModelName = CarModelName;
  if (CarModelCode) item.CarModelCode = CarModelCode;
if(CityName) item.CityName = CityName;
if(CityCode) item.CityCode = CityCode;
if(ModelImage) item.ModelImage = ModelImage;

  res.send(
    `Item with id ${id} and name ${item.CarModelName} has been updated successfully`
  );
};

module.exports = { getItem, addItem, getItemId, deleteItem, updateItem };