const db = require("../models");
const bcrypt = require("bcrypt");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

const { resNotify } = require("../handleNotify/resNotify");

const getAuthor = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await db.tbl_user.findByPk(user_id);
    const { user_password, updatedAt, ...other } = user.dataValues;
    res.status(200).json({
      data: { ...other },
    });
  } catch (error) {
    res.status(404).json({
      ...resNotify("error", error),
    });
  }
};
const getAllAuthor = async (req, res) => {
  try {
    const users = await db.tbl_user.findAll({
      attributes: [
        "id",
        "user_name",
        "user_email",
        "user_avatar",
        "user_country",
        "user_isAdmin",
        "createdAt",
      ],
    });
    res.status(200).json({
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      ...resNotify("error", error),
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { user_name, user_country } = req.body;
    const user_id = req.params.id;
    // const newUpdatedAt = new Date()
    await db.tbl_user.update(
      {
        user_name: user_name,
        user_country: user_country,
        updatedAt: new Date(),
      },
      {
        where: {
          id: user_id,
        },
      }
    );
    const user = await db.tbl_user.findByPk(user_id);
    const { user_password, updatedAt, ...other } = user.dataValues;
    res.status(200).json({
      ...resNotify("success", "Update success"),
      data: { ...other },
    });
  } catch (error) {
    res.status(400).json({
      ...resNotify("error", error),
    });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { user_password, user_password_old } = req.body;
    const user_id = req.params.id;
    const user = await db.tbl_user.findByPk(user_id);
    const rehash = await bcrypt.compare(user_password_old, user.user_password);
    if (!rehash)
      res.status(200).json({
        ...resNotify("error", "Mat khau cu khong dung"),
      });
    else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user_password, salt);
      const newUpdatedAt = new Date();
      await db.tbl_user.update(
        { user_password: hash, updatedAt: newUpdatedAt },
        { where: { id: user_id } }
      );
      res.status(200).json({
        ...resNotify("success", "Cap nhat mat khau thanh cong"),
      });
    }
  } catch (error) {
    res.status(400).json({
      ...resNotify("error", error),
    });
  }
};

const removeAvatarOld = async (user_id) => {
  const user = await db.tbl_user.findByPk(user_id);
  const avatarOld = user.user_avatar;
  if (avatar.indexOf("defaultAvatar") !== 0)
    await cloudinary.uploader.destroy(avatarOld);
};

const updateAvatar = async (req, res) => {
  let namefileUploaded = null;
  try {
    const user_avatar = req.files.file;
    const user_id = req.params.id;
    await removeAvatarOld(user_id);
    //Upload image to cloud
    const resultUpload = await cloudinary.uploader.upload(
      user_avatar.tempFilePath,
      {
        resource_type: "image",
        folder: "blog_food",
      }
    );
    //get name image affter upload
    namefileUploaded = resultUpload.public_id;

    await db.tbl_user.update(
      {
        user_avatar: namefileUploaded,
      },
      {
        where: {
          id: user_id,
        },
      }
    );
    const user = await db.tbl_user.findByPk(user_id);
    const { user_password, updatedAt, ...other } = user.dataValues;
    res.status(200).json({
      ...resNotify("success", "Upload avatar thanh cong"),
      data: { ...other },
    });
  } catch (error) {
    if (namefileUploaded != null)
      await cloudinary.uploader.destroy(namefileUploaded);
    res.status(200).json({
      ...resNotify("error", error),
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    await removeAvatarOld(user_id);
    await db.tbl_user.destroy({
      where: { id: user_id },
    });
    const users = await db.tbl_user.findAll({
      attributes: [
        "id",
        "user_name",
        "user_email",
        "user_avatar",
        "user_country",
        "user_isAdmin",
        "createdAt",
      ],
    });
    res.status(200).json({
      ...resNotify("succsess", "Xoa thanh cong"),
      data: users,
    });
  } catch (error) {
    res.status(200).json({
      ...resNotify("error", error),
    });
  }
};

module.exports = {
  getAuthor,
  getAllAuthor,
  updateUser,
  updatePassword,
  updateAvatar,
  deleteUser,
};
