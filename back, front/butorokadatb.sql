-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Okt 18. 10:02
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `butorokadatb`
--
CREATE DATABASE IF NOT EXISTS `butorokadatb` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `butorokadatb`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `butorok`
--

CREATE TABLE `butorok` (
  `id` int(11) NOT NULL,
  `név` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `ár` int(11) NOT NULL,
  `szín` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `méret` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `anyag` varchar(20) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `butorok`
--

INSERT INTO `butorok` (`id`, `név`, `ár`, `szín`, `méret`, `anyag`) VALUES
(1, 'Ágy NK278', 170100, 'fehér, fekete', '830x420x1950x2400 mm', 'Öko bőr'),
(2, 'IDANÄS, 6-fiókos szekrény', 119900, 'sötétbarna', '162x95 cm', 'Bükk'),
(3, 'IKEA PS LÖMSK', 22990, 'fehér, piros', ' 59x62x75x82x17 cm', 'Poliészter'),
(4, 'HAUGA, tolóajtós gardróbszekrény', 69990, 'fehér', '118x55x199 cm', 'Forgácslemez'),
(5, 'KALLAX, Polcos elem', 29990, 'fehérre pácolt tölgy', '147x147 cm', 'Forgácslemez'),
(6, 'MYLLRA, Rácsos ágy fiókkal', 89990, 'halvány rózsaszín', '60x120 cm', 'Tömör bükk'),
(7, 'Kanapé', 30000, 'piros', '30x40x100cm', 'bőr'),
(8, 'Szék', 10000, 'kék', '20x50x60 cm', 'fém');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `butorok`
--
ALTER TABLE `butorok`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `butorok`
--
ALTER TABLE `butorok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
