-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 12, 2019 at 06:34 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rungal-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(20) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(2, 'beverages'),
(1, 'food');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `invoice` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `name`, `price`, `quantity`, `date_created`, `invoice`) VALUES
(4, 'Egg', 50000, 10, '2019-10-03 16:28:59', 7901),
(5, 'Noodle', 30000, 10, '2019-10-04 16:29:49', 3452),
(6, 'Aqua', 40000, 10, '2019-09-18 16:48:15', 9405),
(7, 'Cendol', 60000, 10, '2019-10-10 21:50:58', 204),
(8, 'Coffee', 60000, 10, '2019-10-09 21:51:07', 6417),
(9, 'Iced Coffee', 80000, 10, '2019-09-20 21:51:19', 4991),
(10, 'Iced Tea', 50000, 10, '2019-10-11 21:51:29', 6632),
(11, 'Meatball', 70000, 10, '2019-10-11 21:51:39', 4586),
(12, 'Meatball', 70000, 10, '2019-10-12 01:10:01', 9751),
(13, 'Cendol', 60000, 10, '2019-10-12 10:29:28', 876);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` int(20) NOT NULL,
  `price` int(20) NOT NULL,
  `quantity` int(20) DEFAULT NULL,
  `date_added` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `category`, `price`, `quantity`, `date_added`, `date_updated`) VALUES
(1, 'Tempe', 'Tempe is a food made from a fermented soybean seeds.', '1570020744277-tempe.jpg', 1, 1000, 600, '2019-09-24 00:00:00', '2019-10-02 19:52:24'),
(2, 'Rice', '', 'rungal-img-1570023982201rice.jpg', 1, 3000, 180, '2019-09-24 00:00:00', '2019-10-02 20:46:22'),
(3, 'Egg', '', 'rungal-img-1570024250481egg.jpg', 1, 4000, 50, '2019-09-24 00:00:00', '2019-10-02 20:50:50'),
(4, 'Rendang', '', 'rungal-img-1570024966020rendang.jpg', 1, 10000, 20, '2019-09-24 00:00:00', '2019-10-02 21:02:46'),
(5, 'Meatball', '', 'rungal-img-1570025484335bakso.jpeg', 1, 7000, 50, '2019-09-24 00:00:00', '2019-10-02 21:11:24'),
(6, 'Satai', '', 'rungal-img-1570025572666satai.jpeg', 1, 5000, 15, '2019-09-24 00:00:00', '2019-10-02 21:12:53'),
(7, 'Ramen', '', 'rungal-img-1570025965277ramen.jpg', 1, 10000, 100, '2019-09-24 00:00:00', '2019-10-02 21:19:25'),
(8, 'Iced Tea', '', 'rungal-img-1570026573870icedtea.jpg', 2, 5000, 100, '2019-09-24 00:00:00', '2019-10-02 21:29:34'),
(9, 'Cendol', '', 'rungal-img-1570026680790cendol.jpg', 2, 6000, 100, '2019-09-24 00:00:00', '2019-10-02 21:31:21'),
(10, 'Water', '', 'rungal-img-1570026991944water.jpg', 2, 2000, 100, '2019-09-24 00:00:00', '2019-10-02 21:36:32'),
(11, 'Iced Water', '', 'rungal-img-1570028189565water.jpg', 2, 3000, 100, '2019-09-24 00:00:00', '2019-10-02 21:56:30'),
(12, 'Coffee', '', 'rungal-img-1570028385551coffee.jpg', 2, 6000, 100, '2019-09-24 00:00:00', '2019-10-02 21:59:46'),
(13, 'Iced Coffee', '', 'rungal-img-1570028465496iced coffee.jpg', 2, 8000, 100, '2019-09-24 00:00:00', '2019-10-02 22:01:05'),
(14, 'Aqua', '', 'rungal-img-1570629142633aqua.jpg', 1, 4000, 100, '2019-09-25 00:00:00', '2019-10-09 20:52:23'),
(15, 'Nasi Pecel', '', 'rungal-img-1570029089712nasi pecel.jpg', 1, 6000, 50, '2019-09-26 00:00:00', '2019-10-02 22:11:30'),
(16, 'Nasi Kuning', '', 'rungal-img-1570461416579nasi kuning.jpg', 1, 7000, 20, '2019-10-07 22:16:57', '2019-10-07 22:16:57');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(20) NOT NULL,
  `user` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user`, `password`) VALUES
(1, 'test123', '$2a$10$xf6wJjNXkJOjMRwxMY8HauIXoPquE.GKCflVFGBSsXZS7PZadNVlS'),
(2, 'yeay', '$2a$10$1JIGyvei8WK9f6gsrpmHpOUf3v1V1cGe4N1d.cfFZFmDkvHkar3Du'),
(3, 'Adila', '$2a$10$FuRSyliry1h1WxUKNAljnuLRpdSMEe/1A7ApbeZ.p3zYynXncsLlC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`,`category`,`date_added`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
