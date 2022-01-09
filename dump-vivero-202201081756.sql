-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: vivero
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Herbáceas'),(2,'Matas o subarbustos'),(3,'Arbustos'),(4,'Árboles');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `name` varchar(100) NOT NULL,
  `price` bigint(20) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `categoria_id` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_FK` (`categoria_id`),
  CONSTRAINT `productos_FK` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES ('Ficus ',1200,'El género Ficus contiene alrededor de 900 taxones específicos e infra-específicos aceptados de árboles, arbustos y trepadoras de la familia Moraceae, tribu monogenérica Ficeae, oriundas de la zona intertropical, con algunas de ellas distribuidas por las regiones templadas.','ficus.jpg',1,1),('Santa Rita',1500,'Flor de papel, Santa Rita, o buganvillea menor, es una especie botánica de planta trepadora de la familia de las Nyctaginaceae; y es la más común de las especies para bonsái. Es nativa de Brasil.','santarita.jpg',2,1),('Rosa',2200,'El género Rosa está compuesto por un conocido grupo de arbustos generalmente espinosos y floridos representantes principales de la familia de las rosáceas. Se denomina rosa a la flor de los miembros de este género y rosal a la planta.','rosa.jpg',10,NULL),('Jazmin',1800,'El género Jasminum, cuyas alrededor de 200 especies reciben el nombre común de jazmín, son oriundas de las regiones tropicales y subtropicales del Viejo Mundo y ampliamente cultivadas. Crecen como arbustos y otras como trepadoras sobre otras plantas o guiadas sobre estructuras.','jazmin.jpg',11,NULL),('Limonero',2600,'Citrus  limon, el limonero, es un pequeño árbol frutal perenne. Su fruto es el limón ​ o citrón, ​ una fruta comestible de sabor ácido y extremadamente fragante que se usa principalmente en la alimentación. La mayoría de las variedades producen frutos durante todo el año.','limonero.jpg',12,NULL),('Tato Marti',520,'El tato','image-1641666497439.jpg',13,NULL),('Tato capo',123,'mascapo ronga','image-1641666464127.JPG',14,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(100) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `direction` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('fcasiello@gmail.com','$2a$10$r0o5zOp859R9o/tVD05DJ.Tky2D78QiH0XvRu6TJ99WqN9cIljr2a',1,'Franco Clarabello','2021-11-28 00:00:00','asdasd','avatar-1638675333658.jpg'),('francocasiellasdo@gmaail.comasdasas','$2a$10$lAPBb4i9JgCaB9iuveP1xOknoiU.Phbof06.p15g0ZDF/P8UAjX7O',2,'Luciana M Perez','2021-02-02 00:00:00','asdasd','avatar-1638674211632.jpg'),('im@hotmail.com','$2a$10$Kel9VyXIwTJstyNIoQMlS.ZoG1Rg4Y.4jv8Q4Q4tj4hr6vE0oalU.',3,'Ignacio Marti','1988-04-01 00:00:00','Mitre 1758','avatar-1641674777742.jpg'),('sara@gmail.com','$2a$10$1lj/v8XrY6HONDScEzMHnO5bBsqqVsClspCrp16v/wleHS/.uJZ0u',4,'Sara Caratraste','1988-09-12 00:00:00','Mendzoa 1116','avatar-1641675141038.JPG');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'vivero'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-08 17:56:27
