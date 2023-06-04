CREATE database shovadia_designs;

USE shovadia_designs;

DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `user_role` int NOT NULL,
  PRIMARY KEY(`id`),
  constraint FK_USER_ROLES FOREIGN KEY (`user_role`) REFERENCES `roles`(`id`)
);


INSERT INTO `roles` (role, description) values ("guest","A user that just entered the website.");
INSERT INTO `roles` (role, description) values ("subscriber","A user that just entered the website.");
INSERT INTO `roles` (role, description) values ("interested","A user that just entered fiverr via the website.");

insert into `users`
(`email`, `user_role`)
values ("guest", 1);