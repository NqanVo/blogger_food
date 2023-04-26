# Back End Api: NodeJs, Express, Express-uploadfile, JWT
## Update 26/04/2023
## Posts
Get posts: http://ec2-13-250-12-33.ap-southeast-1.compute.amazonaws.com:7070/api/posts?author=&authorID=&category=&order=&pages=&limit=
Get single post: http://ec2-13-250-12-33.ap-southeast-1.compute.amazonaws.com:7070/api/posts/21
## Users
Get users: http://ec2-13-250-12-33.ap-southeast-1.compute.amazonaws.com:7070/api/users/author
Get single user: http://ec2-13-250-12-33.ap-southeast-1.compute.amazonaws.com:7070/api/users/author/10

## Auth
### Register: Method: Post, /api/auth/register
#### Req, Body: 
{
user_name: "...", 
user_email: "...", 
user_password: "...",
user_country: "...",
file : File
}
### Login: Method: Post, api/auth/login
#### Req, Body: 
{
  user_email: "...",
  user_password: "..."
}
### Logout: Method: Post, api/auth/logout

## category
### Get category: Method Get, /api/category
#### Res:
{
    "data": [
        {
            "category_id": 1,
            "category_name": "asian"
        },
        {
            "category_id": 2,
            "category_name": "india"
        },
        ...
    ]
}

## Posts
### Get multi posts: Method: get, api/posts
#### Query options: author, authorID, category, order, pages, limit: /api/posts?author=ngan&category=india&pages=1&order=DESC&limit=2
#### Res:
{
 "data": {
        "posts": [
            {
                "post_id": 21,
                "post_title": "Dal makhani",
                "post_desc": "...",
                "post_thumb": "dal-makhani-featured-image-500x500_1677248355465.jpeg",
                "createdAtPost": "2023-02-24T14:19:15.000Z",
                "dataUser": {
                    "user_id": 1,
                    "user_name": "user3",
                    "user_avatar": "avt_chibi_1676278417201.png",
                    "user_country": "Iceland",
                    "createdAtUser": "2023-02-11T16:54:38.000Z"
                },
                "dataCategory": {
                    "category_name": "india"
                }
            },
            ...
        ],
        "pages": 2
    }
}
### Get single post: Method: Get, api/posts/{id_post}
#### Res:
{
    "data": {
        "post_id": 21,
        "post_title": "Dal makhani",
        "post_desc": "...",
        "post_thumb": "dal-makhani-featured-image-500x500_1677248355465.jpeg",
        "createdAtPost": "2023-02-24T14:19:15.000Z",
        "dataUser": {
            "user_id": 1,
            "user_name": "user3",
            "user_avatar": "avt_chibi_1676278417201.png",
            "user_country": "Iceland",
            "createdAtUser": "2023-02-11T16:54:38.000Z"
        },
        "dataCategory": {
            "category_name": "india"
        }
    }
}
### Create post: Method: Post, /api/posts/create-post/{user_id}
#### Req, Body:
{
    post_title : "...",
    post_desc: "...",
    category_id: "...",
    file: File
}
### Update post: Method: Put, /api/posts/update-post/{user_id}/{post_id}
#### Req, Body:
{
    post_title : "...",
    post_desc: "...",
    category_id: "...",
    file: File
}
### Delete post: Method: Delete, /api/posts/delete-post/{user_id}/{post_id}

## User
### Get Author: Method: Get, /api/users/author/{user_id}
#### Res:
{
    "data": {
        "id": 1,
        "user_name": "user3",
        "user_email": "ngan@gmail.com",
        "user_avatar": "avt_chibi_1676278417201.png",
        "user_country": "Iceland",
        "user_isAdmin": false,
        "createdAt": "2023-02-11T16:54:38.000Z"
    }
}
### Update user: Method: Put, /api/users/update/{user_id}
#### Req, Body:
{
    "user_name":"...",
    "user_country": "..."
}
### Update password: Method: Put, /api/users/update-password/{user_id}
#### Req, Body:
{
    "user_password":"...",
    "user_password_old": "..."
}
### Update password: Method: Put, /api/users/update-avatar/{user_id}
#### Req, Body:
{
    "file": File
}
### Delete user: Method: Delete, /api/users/delete/{user_id}
