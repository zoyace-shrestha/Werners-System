create table if not exists Announcement (
  idAnnouncement int not null primary key auto_increment,
  title varchar(255) not null,
  description varchar(255),
  type varchar(255),
  link varchar(255),
  background varchar(255),
  publishDate date,
  expirationDate date,
  isDraft bool,
  priority int
);