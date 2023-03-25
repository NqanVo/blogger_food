const { resNotify } = require("../handleNotify/resNotify");

const midlewareUploadImage = async (req, res, next) => {
  if (!req.files)
    return res.status(200).json({
      ...resNotify("error", "Chưa chọn ảnh"),
    });
  let avatarSize = req.files.file.size;
  if (avatarSize >= 200000)
    return res.status(200).json({
      ...resNotify("error", "Kích thước không được vượt quá 200kb"),
    });
  let avatarType = req.files.file.mimetype.split("/")[1];
  if (!avatarType.match(/(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/))
    return res.status(200).json({
      ...resNotify("error", "File ảnh không hợp lệ"),
    });
  return next();
};

const midlewareUploadImagePost = async (req, res, next) => {
  if (!req.files)
    return res.status(200).json({
      ...resNotify("error", "Chưa chọn ảnh"),
    });
  let avatarSize = req.files.file.size;
  if (avatarSize >= 200000)
    return res.status(200).json({
      ...resNotify("error", "Kích thước không được vượt quá 200kb"),
    });
  let avatarType = req.files.file.mimetype.split("/")[1];
  if (!avatarType.match(/(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/))
    return res.status(200).json({
      ...resNotify("error", "File ảnh không hợp lệ"),
    });
  return next();
};

const midlewareUpdateImagePost = async (req, res, next) => {
  if (!req.files) return next();
  let avatarSize = req.files.file.size;
  if (avatarSize >= 200000)
    return res.status(200).json({
      ...resNotify("error", "Kích thước không được vượt quá 200kb"),
    });
  let avatarType = req.files.file.mimetype.split("/")[1];
  if (!avatarType.match(/(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/))
    return res.status(200).json({
      ...resNotify("error", "File ảnh không hợp lệ"),
    });
  return next();
};

module.exports = {
  midlewareUploadImage,
  midlewareUploadImagePost,
  midlewareUpdateImagePost,
};
