const db = require("../models");
const { Op, sequelize } = require("sequelize");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

const { resNotify } = require("../handleNotify/resNotify");

const removeThumbOld = async (post_id) => {
  const post = await db.tbl_post.findByPk(post_id, {
    attributes: ["post_thumb"],
  });
  const thumb = post.post_thumb;
  //   fs.unlinkSync(`./src/uploads/${thumb}`);
  await cloudinary.uploader.destroy(thumb);
};

const attributesGetPosts = [
  ["id", "post_id"],
  "post_title",
  "post_desc",
  "post_thumb",
  ["createdAt", "createdAtPost"],
];
const includeGetPosts = [
  {
    model: db.tbl_user,
    as: "dataUser",
    attributes: [
      ["id", "user_id"],
      "user_name",
      "user_avatar",
      "user_country",
      ["createdAt", "createdAtUser"],
    ],
  },
  {
    model: db.tbl_category,
    as: "dataCategory",
    attributes: ["category_name", ["id", "category_id"]],
  },
];
const getPosts = async (req, res) => {
  try {
    let { author, category, pages, order, limit, authorID } = req.query;
    const Au = author
      ? await db.tbl_user.findAll({
          attributes: [["id", "user_id"]],
          where: {
            user_name: {
              [Op.substring]: author,
            },
          },
        })
      : [];
    const Cat = category
      ? await db.tbl_category.findAll({
          attributes: [["id", "category_id"]],
          where: {
            category_name: category.split(","),
          },
        })
      : [];
    limit = limit ? parseInt(limit) : 10;
    let page =
      pages == 0 || pages == 1 || !pages ? 0 : parseInt(pages * limit) - limit;
    let orderBy = "";
    switch (order) {
      case "DESC":
        orderBy = "DESC";
        break;
      case "ASC":
        orderBy = "ASC";
        break;
      default:
        orderBy = "DESC";
        break;
    }
    let userID = [];
    let catID = [];
    for (let i = 0; i < Au.length; i++) {
      userID.push(Au[i].dataValues.user_id);
    }
    for (let j = 0; j < Cat.length; j++) {
      catID.push(Cat[j].dataValues.category_id);
    }

    let where = {};
    if (authorID) where = { ...where, user_id: authorID };
    if (author) where = { ...where, user_id: userID };
    if (category) where = { ...where, category_id: catID };

    const posts = await db.tbl_post.findAll({
      attributes: attributesGetPosts,
      where: where,
      order: [["post_id", orderBy]],
      offset: page,
      limit: limit,
      include: includeGetPosts,
    });
    const { count, rows } = await db.tbl_post.findAndCountAll({
      where: where,
    });
    res.status(200).json({
      data: { posts, pages: Math.ceil(count / limit) },
    });
  } catch (error) {
    res.send(error);
  }
};

const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await db.tbl_post.findByPk(id, {
      attributes: attributesGetPosts,
      include: includeGetPosts,
    });
    res.status(200).json({
      data: post,
    });
  } catch (error) {
    res.send(error);
  }
};

const createPost = async (req, res) => {
  let namefileUploaded = null;
  try {
    const user_id = req.params.id;
    const { post_title, post_desc, category_id } = req.body;
    const post_thumb = req.files.file;

    //Upload image to cloud
    const resultUpload = await cloudinary.uploader.upload(
      post_thumb.tempFilePath,
      {
        resource_type: "image",
        folder: "blog_food",
      }
    );
    //get name image affter upload
    namefileUploaded = resultUpload.public_id;

    await db.tbl_post.create({
      post_title: post_title,
      post_desc: post_desc,
      post_thumb: namefileUploaded,
      category_id: category_id,
      user_id: user_id,
    });

    res.status(200).json({
      ...resNotify("success", "Create success"),
    });
  } catch (error) {
    if (namefileUploaded != null)
      await cloudinary.uploader.destroy(namefileUploaded);
    res.send(error);
  }
};
const updatePost = async (req, res) => {
  let namefileUploaded = null;
  try {
    const user_id = req.params.id;
    const post_id = req.params.post_id;
    const { post_title, post_desc, category_id } = req.body;
    const post_thumb = req.files;
    let thumb = {};
    if (post_thumb) {
      await removeThumbOld(post_id);
      //Upload image to cloud
      const resultUpload = await cloudinary.uploader.upload(
        post_thumb.file.tempFilePath,
        {
          resource_type: "image",
          folder: "blog_food",
        }
      );
      //get name image affter upload
      namefileUploaded = resultUpload.public_id;
      thumb = { ...thumb, post_thumb: namefileUploaded };
    }
    await db.tbl_post.update(
      {
        post_title: post_title,
        post_desc: post_desc,
        category_id: category_id,
        updatedAt: new Date(),
        ...thumb,
      },
      {
        where: {
          id: post_id,
          user_id: user_id,
        },
      }
    );
    res.status(200).json({
      ...resNotify("success", "Update success"),
    });
  } catch (error) {
    if (namefileUploaded != null)
      await cloudinary.uploader.destroy(namefileUploaded);
    res.status(200).json({
      ...resNotify("error", "something error"),
    });
  }
};

const deletePost = async (req, res) => {
  const post_id = req.params.post_id;
  const user_id = req.params.id;

  await removeThumbOld(post_id);
  await db.tbl_post.destroy({ where: { id: post_id } });

  const posts = await db.tbl_post.findAll({
    attributes: attributesGetPosts,
    where: { user_id: user_id },
    order: [["post_id", "DESC"]],
    limit: 10,
    include: includeGetPosts,
  });
  const { count, rows } = await db.tbl_post.findAndCountAll({
    where: { user_id: user_id },
  });
  res.status(200).json({
    ...resNotify("success", "Delete post success"),
    data: { posts, pages: Math.ceil(count / 10) },
  });
};

module.exports = {
  getPosts,
  getPost,
  updatePost,
  createPost,
  deletePost,
};
