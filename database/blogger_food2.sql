-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 24, 2023 lúc 11:18 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `blogger_food2`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('create-tbl-categories.js'),
('create-tbl-posts.js'),
('create-tbl-users.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_categories`
--

CREATE TABLE `tbl_categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tbl_categories`
--

INSERT INTO `tbl_categories` (`id`, `category_name`, `createdAt`, `updatedAt`) VALUES
(1, 'asian', '2023-02-13 22:51:48', '2023-02-13 22:51:48'),
(2, 'india', '2023-02-13 22:51:48', '2023-02-13 22:51:48'),
(3, 'china', '2023-02-13 22:54:12', '2023-02-13 22:54:12'),
(4, 'viet nam', '2023-02-13 22:54:12', '2023-02-13 22:54:12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_posts`
--

CREATE TABLE `tbl_posts` (
  `id` int(11) NOT NULL,
  `post_title` varchar(255) NOT NULL,
  `post_desc` longtext NOT NULL,
  `post_thumb` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tbl_posts`
--

INSERT INTO `tbl_posts` (`id`, `post_title`, `post_desc`, `post_thumb`, `category_id`, `user_id`, `updatedAt`, `createdAt`) VALUES
(16, 'Hitsumabushi in Nagoya', '<p>If you like unagi, then you’re going to love hitsumabushi. It’s a&nbsp;<a href=\"https://www.willflyforfood.net/nagoya-food-guide/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--mv-trellis-color-link,#a1a48f); background-color: initial;\"', 'oita-yoroduya2_1677210231110.jpeg', 1, 1, '2023-02-24 10:43:51', '2023-02-24 10:43:51'),
(17, 'Xiao Long Bao at Din Tai Fung', '<p>Xiao long bao is actually a Shanghainese dish but this Taiwanese restaurant perfected it. Din Tai Fung has become so successful that they’ve branched out to many countries around the world, including China. In fact, ask a Shanghainese local where they like to go for xiao long bao and many will say Din Tai Fung.</p><p><br></p><p>Xiao long bao refers to a Chinese dumpling traditionally filled with pork and a solid meat aspic that melts into soup when heated. As palatable as it looks, it’s important to eat the dumpling correctly so you don’t burn your mouth.</p><p><br></p><p>To eat, you take a small bite from the top of the xiao long bao, just enough to tear the skin, so you can slurp out the hot soup before plopping the dumpling in your mouth. It’s a ritual that makes eating xiao long bao different from other dumplings.</p><p><br></p><p>Aside from the flavor, what makes Din Tai Fung stand out is their consistency. They consistently make the most perfect dumplings using the thinnest of wrappers. Every dumpling that comes out of their kitchen weighs exactly 21 grams and has 18 pleats.</p><p><br></p><p>My sister and a few friends of ours live in Shanghai and they all say that only Din Tai Fung can make perfect xiao long bao every time. You’ll find several Din Tai Fung outlets in Taiwan, including one at the basement of Taipei 101.</p>', 'din-tai-fung1_1677210378368.jpeg', 1, 1, '2023-02-24 10:46:18', '2023-02-24 10:46:18'),
(18, 'Peking Duck in Beijing', '<p>We’ve been eating&nbsp;<a href=\"https://www.willflyforfood.net/china-peking-duck-four-classic-ways-to-enjoy-beijings-bird/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--mv-trellis-color-link,#a1a48f); background-color: initial;\">peking duck</a>&nbsp;almost all our lives but never in China. According to our Taiwanese friend who’s married to a Beijing local, you haven’t truly eaten peking duck until you’ve had it in Beijing. According to him, it’s worlds apart different and that much better.</p><p><br></p><p>If you’ve never had it, peking duck is an imperial-era Chinese duck dish known for its delicate but thin and supremely crisp skin. Ducks bred specifically for this dish are slaughtered after 65 days and seasoned before being roasted in a closed or hung oven.</p><p><br></p><p>When ready, the duck is carved into slivers in front of the diners, ideally with mostly skin and just a little bit of meat. To eat, the duck is wrapped in palm-sized pancakes with spring onion, cucumber, and a sweet bean sauce. It’s crispy and fatty and supremely delicious.</p><p><br></p><p>Peking duck is one of our favorite Chinese dishes. What we’ve had is already delicious so I can only imagine what it must be like in Beijing. When we do finally eat our way through China, peking duck in Beijing will be at the very top of our must-eat list.</p>', 'duck-dinner_1677210501857.jpeg', 3, 1, '2023-02-24 10:48:21', '2023-02-24 10:48:21'),
(19, 'Masala dosa', '<p><span style=\"background-color: rgb(239, 239, 239);\">Arguably&nbsp;</span><a href=\"https://www.jacadatravel.com/indian-subcontinent/india/keralan-backwaters/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(239, 239, 239); color: rgb(0, 0, 0);\">South India</a><span style=\"background-color: rgb(239, 239, 239);\">’s most renowned culinary export,&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">masala dosas</em><span style=\"background-color: rgb(239, 239, 239);\">&nbsp;are famous the world over. A sort of Indian pancake,&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">dosas&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">are made from a thin batter consisting of rice, flour and lentils. Making dosas is no easy task, with the batter mixture having to soak in water for at least 24 hours before it can be shaped. Once ready, the batter is ladled onto a hot&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">tava&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">(griddle pan) and shaped in a similar way to how the French would shape a crepe. Traditionally,&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">dosas&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">are served folded in half and stuffed with potatoes. Accompaniments like hot&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">sambar&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">give the dish a spicy edge, and whatever you stuff them with,&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">dosas&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">are sure to provide a tasty yet satisfying meal.&nbsp;</span></p>', 'Dosa_1677243871087.jpeg', 2, 1, '2023-02-24 20:04:31', '2023-02-24 20:04:31'),
(20, 'Chaat', '<p><span style=\"background-color: rgb(239, 239, 239);\">Synonymous with&nbsp;</span><a href=\"https://www.jacadatravel.com/indian-subcontinent/india/delhi/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(239, 239, 239); color: rgb(0, 0, 0);\">Delhi</a><span style=\"background-color: rgb(239, 239, 239);\">&nbsp;street food vendors,&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">chaat&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">is one of&nbsp;</span><a href=\"https://www.jacadatravel.com/indian-subcontinent/india/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(239, 239, 239); color: rgb(0, 0, 0);\">India</a><span style=\"background-color: rgb(239, 239, 239);\">’s most delicious savoury snacks. The name derives from three Hindi words meaning ‘a delicacy,’ ‘licking one’s fingers’ and ‘to devour with relish’ and this dish truly does live up to its heritage. Although there’s now a plethora of different varieties, the original&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">chaat&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">is a wonderful combination of diced potato pieces, crispy fried bread and chickpeas garnished with fresh coriander leaves, yoghurt and dried ginger and tamarind sauce. Make like a local and seek out a local&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">dhaba,&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">where the city’s specialist chaat variety will be available at nearly all times of day.</span></p>', 'Delhi_Style_Matar_Chaat_Matra_Recipe_Spicy__Tangy_Dry_Green_Peas_Curry_Curry_Recipe_1677248191353.jpeg', 2, 1, '2023-02-24 21:16:31', '2023-02-24 21:16:31'),
(21, 'Dal makhani', '<p><span style=\"background-color: rgb(239, 239, 239);\">Most foodies will have heard of or tasted&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">dal,&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">but there’s nothing quite like tasting the original dish in the country where it originated from.&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">Dal&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">is the Hindi word for lentils, and this soup-like delicacy is made by stewing small black lentils for hours on end. Whilst there are&nbsp;many different varieties of this lentil dish,&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">dal makhani&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">is in a league of its own. It’s considered the best of the best, and is reserved for big events like wedding celebrations. With&nbsp;</span><em style=\"background-color: rgb(239, 239, 239);\">makhani&nbsp;</em><span style=\"background-color: rgb(239, 239, 239);\">meaning ‘buttery’ in Hindi, there’s no prizes for guessing how rich and creamy this Indian classic tastes. Head to&nbsp;</span><a href=\"https://www.jacadatravel.com/indian-subcontinent/india/amritsar/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(239, 239, 239); color: rgb(0, 0, 0);\">Punjab</a><span style=\"background-color: rgb(239, 239, 239);\">, in India’s north, to taste the real deal.&nbsp;</span></p>', 'ech_1679651982761.jpeg', 2, 1, '2023-03-24 16:59:42', '2023-02-24 21:19:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_avatar` varchar(255) NOT NULL,
  `user_country` varchar(255) NOT NULL,
  `user_isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `user_name`, `user_email`, `user_password`, `user_avatar`, `user_country`, `user_isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'user3', 'ngan@gmail.com', '$2b$10$b1tky5YR7fekOAybQQyriefeRGid6BeNz1BBFFZqoa2iHCGHJr7Uu', 'avt_chibi_1676278417201.png', 'Vietnam', 0, '2023-02-11 23:54:38', '2023-03-24 17:01:44'),
(10, 'dieu', 'vongan3@gmail.com', '$2b$10$Qb0hkqDkU3L/o1OiW.SXUuOZMVwl5mc8IFIEzJ/Qh0ArH1ubQ0RRW', 'chip_1676297805588.png', 'Vietnam', 0, '2023-02-13 21:16:45', '2023-02-13 21:16:45'),
(21, 'ngan dep trai', 'vongan33@gmail.com', '$2b$10$VgiEIsE0rfPFyDIeOsyOCuqcE04FnrugExqHeqVheY/z5b5CubsF6', 'avt_chibi_1679645547194.png', 'vietnam', 0, '2023-03-24 15:12:27', '2023-03-24 15:12:27');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `tbl_categories`
--
ALTER TABLE `tbl_categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_posts`
--
ALTER TABLE `tbl_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`user_id`),
  ADD KEY `fk_category` (`category_id`);

--
-- Chỉ mục cho bảng `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_categories`
--
ALTER TABLE `tbl_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `tbl_posts`
--
ALTER TABLE `tbl_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tbl_posts`
--
ALTER TABLE `tbl_posts`
  ADD CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `tbl_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
