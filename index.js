const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressFileUpload = require("express-fileupload");
const routeUsers = require("./src/routes/users");
const routePosts = require("./src/routes/posts");
const routeAuth = require("./src/routes/auth");
const routeCategory = require("./src/routes/category");
const cloudinary = require("cloudinary").v2;
const app = express();

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(
  expressFileUpload({
    createParentPath: true,
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
cloudinary.config({
  cloud_name: "dtqkrubpj",
  api_key: "929311573298736",
  api_secret: "T88zOi2ZLj9fEhC9m8WTc_B9S8o",
  secure: true,
});
// app.use(express.static("./src/uploads/"));
//routes api
app.use("/api/users", routeUsers);
app.use("/api/posts", routePosts);
app.use("/api/auth", routeAuth);
app.use("/api/category", routeCategory);

//404 api
app.use((req, res) => {
  res.send("something wrong! 404");
});

app.listen(7070, () => {
  console.log("Connected to port 7070");
});
