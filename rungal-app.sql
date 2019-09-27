-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2019 at 06:53 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.31

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
  `quantity` int(20) NOT NULL,
  `date_added` date NOT NULL,
  `date_updated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `category`, `price`, `quantity`, `date_added`, `date_updated`) VALUES
(1, 'Tempe', 'Tempe is a food made from a fermented soybean seeds.', '', 1, 1000, 600, '2019-09-24', '2019-09-24'),
(2, 'Rice', 'White Rice is the main dish to every menu in Indonesia', '1569547430558-adila.jpg', 1, 3000, 200, '2019-09-24', '2019-09-27'),
(3, 'Egg', '', '', 1, 3000, 50, '2019-09-24', '2019-09-24'),
(4, 'Rendang', '', '', 1, 8000, 20, '2019-09-24', '2019-09-24'),
(5, 'Meatball', '', '', 1, 5000, 50, '2019-09-24', '2019-09-24'),
(6, 'Satai', '', '', 1, 5000, 15, '2019-09-24', '2019-09-24'),
(7, 'Noodle', '', '', 1, 4000, 100, '2019-09-24', '2019-09-24'),
(8, 'Iced Tea', '', '', 2, 5000, 100, '2019-09-24', '2019-09-24'),
(9, 'Iced Tea Lemon', '', '', 2, 5000, 100, '2019-09-24', '2019-09-24'),
(10, 'Water', '', '', 2, 2000, 100, '2019-09-24', '2019-09-24'),
(11, 'Iced Water', '', '', 2, 3000, 100, '2019-09-24', '2019-09-24'),
(12, 'Coffee', '', '', 2, 3000, 100, '2019-09-24', '2019-09-24'),
(13, 'Iced Coffee', '', '', 2, 6000, 100, '2019-09-24', '2019-09-24'),
(14, 'Bottled Water', '', '', 2, 3000, 100, '2019-09-25', '2019-09-25'),
(15, 'Nasi Pecel', '', '', 1, 5000, 50, '2019-09-26', '2019-09-26'),
(16, 'Nasi Uduk', '', '1569597321944-adila.jpg', 1, 7000, 40, '2019-09-27', '2019-09-27'),
(17, 'Fried Rice', '', '1569597600282-adila.jpg', 1, 10000, 0, '2019-09-27', '2019-09-27'),
(18, 'Lemon Tea', '', '1569597676237-adila.jpg', 2, 4000, 0, '2019-09-27', '2019-09-27');

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
(1, 'adilaw', '12345'),
(2, 'adilaw12', '12345');

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
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
