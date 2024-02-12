import User from "../models/user_model.js";

const updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id, {
    $set: req.body,
  });

  try {
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const getUsers = await User.find();
    res.status(200).json(getUsers);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
    next(error);
  }
};

export { updateUser, deleteUser, getAllUser, getOneUser };
