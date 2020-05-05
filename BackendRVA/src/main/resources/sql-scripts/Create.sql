DROP TABLE IF EXISTS fakultet cascade;
DROP TABLE IF EXISTS departman cascade;
DROP TABLE IF EXISTS student cascade;
DROP TABLE IF EXISTS status cascade;

DROP SEQUENCE IF EXISTS fakultet_seq;
DROP SEQUENCE IF EXISTS departman_seq;
DROP SEQUENCE IF EXISTS student_seq;
DROP SEQUENCE IF EXISTS status_seq;


create table fakultet(
	id integer not null,
	naziv varchar(100) not null,
	sediste varchar(50) 
);

create table departman(
	id integer not null,
	naziv varchar(100) not null,
	oznaka varchar(10) not null,
	fakultet integer not null
);

create table student(
	id integer not null,
	ime varchar(50) not null,
	prezime varchar(50) not null,
	broj_indeksa varchar(20) not null,
	status integer not null,
	departman integer not null
);

create table status(
	id integer not null,
	naziv varchar(100) not null,
	oznaka varchar(10) not null
);

alter table fakultet add constraint
PK_fakultet primary key(id);
alter table departman add constraint
PK_departman primary key(id);
alter table student add constraint
PK_student primary key(id);
alter table status add constraint
PK_status primary key(id);

alter table departman add constraint
FK_departman_fakultet foreign key(fakultet) references fakultet(id);
alter table student add constraint
FK_student_status foreign key(status) references status(id);
alter table student add constraint
FK_student_departman foreign key(departman) references departman(id);

create index IDXFK_departman_fakultet 
on departman(fakultet);
create index IDXFK_student_status 
on student(status);
create index IDXFK_student_departman 
on student(departman);

create sequence fakultet_seq
increment 1;
create sequence departman_seq
increment 1;
create sequence student_seq
increment 1;
create sequence status_seq
increment 1;

