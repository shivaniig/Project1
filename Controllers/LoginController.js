// loginController.js

const { generateToken } = require('../Utils/authUtils');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Logic to authenticate user
    const user = await UserModel.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate the JWT token using the utility function
    const token = generateToken(user);

    // Return the token in the response
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginUser };
