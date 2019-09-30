-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 30, 2019 at 06:55 PM
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
(1, 'Tempe', 'Tempe is a food made from a fermented soybean seeds.', '1569843452903-Screenshot from 2019-09-30 16-43-33.png', 1, 1000, 600, '2019-09-24 00:00:00', '2019-09-30 18:37:33'),
(2, 'Rice', 'White Rice is the main dish to every menu in Indonesia', '1569547430558-adila.jpg', 1, 3000, 180, '2019-09-24 00:00:00', '2019-09-27 00:00:00'),
(3, 'Egg', '', '', 1, 3000, 50, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(4, 'Rendang', '', '', 1, 8000, 20, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(5, 'Meatball', '', '', 1, 5000, 50, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(6, 'Satai', '', '', 1, 5000, 15, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(7, 'Noodle', '', '', 1, 4000, 100, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(8, 'Iced Tea', '', '', 2, 5000, 100, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(9, 'Iced Tea Lemon', '', '', 2, 5000, 100, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(10, 'Water', '', '', 2, 2000, 100, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(11, 'Iced Water', '', '', 2, 3000, 100, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(12, 'Coffee', '', '', 2, 3000, 100, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(13, 'Iced Coffee', '', '', 2, 6000, 100, '2019-09-24 00:00:00', '2019-09-24 00:00:00'),
(14, 'Bottled Water', '', '', 2, 3000, 100, '2019-09-25 00:00:00', '2019-09-25 00:00:00'),
(15, 'Nasi Pecel', '', '', 1, 5000, 50, '2019-09-26 00:00:00', '2019-09-26 00:00:00'),
(16, 'Nasi Uduk', '', '1569597321944-adila.jpg', 1, 7000, 40, '2019-09-27 00:00:00', '2019-09-27 00:00:00'),
(17, 'Fried Rice', '', '1569597600282-adila.jpg', 1, 10000, 0, '2019-09-27 00:00:00', '2019-09-27 00:00:00'),
(18, 'Lemon Tea', '', '1569597676237-adila.jpg', 2, 4000, 0, '2019-09-27 00:00:00', '2019-09-27 00:00:00'),
(19, 'euy', 'euy', NULL, 1, 5000, NULL, '2019-09-30 18:34:57', '2019-09-30 18:34:57'),
(20, 'euy11', 'euy11', '1569844176136-Screenshot from 2019-09-30 16-43-33.png', 1, 7000, NULL, '2019-09-30 18:49:36', '2019-09-30 18:49:36'),
(21, 'euy113', 'euy113', '1569844421794-Screenshot from 2019-09-30 16-43-33.png', 1, 7000, NULL, '2019-09-30 18:53:42', '2019-09-30 18:53:42');

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
(1, 'test123', '$2a$10$xf6wJjNXkJOjMRwxMY8HauIXoPquE.GKCflVFGBSsXZS7PZadNVlS');

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
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
