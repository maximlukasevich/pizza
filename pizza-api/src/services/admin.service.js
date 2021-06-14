const Admin = require('../models/Admin');

const getAdmins = async () => {
  try {
    const admins = await Admin.find();
    return admins;
  } catch (e) {
    console.error(e);
  }
}

const getAdmin = async (login) => {
  try {
    const admin = await Admin.findOne({login});
    return admin;
  } catch (e) {
    console.error(e);
  }
}

const createAdmin = async (admin) => {
  try {
    const newAdmin = await Admin.create(admin);
    await newAdmin.save();
    return true
  } catch (e) {
    console.error(e);
    return false;
  }
}

const updateAdmin = async (login, update) => {
  try {
    const updatedAdmin = await Admin.findOneAndUpdate({login}, update, {new: true});
    await updatedAdmin.save();
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

const deleteAdmin = async (login) => {
  try {
    await Admin.findOneAndDelete({login});
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

module.exports = {
  getAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin
}