const Data = require('../Models/Data');

const submitData = async (req, res) => {
  try {
    const newData = new Data({
      ...req.body,
      userId: req.userId,
    });
    await newData.save();
    res.status(200).send('Data saved successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const getData = async (req, res) => {
  try {
    const data = await Data.find({ userId: req.userId });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  submitData,
  getData,
};
