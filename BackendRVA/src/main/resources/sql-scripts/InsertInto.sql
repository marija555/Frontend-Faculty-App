insert into "fakultet" ("id", "naziv", "sediste")
values(nextval('fakultet_seq'), 'Fakultet tehničkih nauka', 'Novi Sad');
insert into "fakultet" ("id", "naziv", "sediste")
values(nextval('fakultet_seq'), 'Prirodno-matematički fakultet', 'Beograd');
insert into "fakultet" ("id", "naziv", "sediste")
values(nextval('fakultet_seq'), 'Arhitektonski fakultet', 'Beograd');
insert into "fakultet" ("id", "naziv", "sediste")
values(nextval('fakultet_seq'), 'Poljoprivredni fakultet', 'Novi Sad');
insert into "fakultet" ("id", "naziv", "sediste")
values(nextval('fakultet_seq'), 'Fakultet za medije i komunikacije', 'Beograd');
insert into "fakultet" ("id", "naziv", "sediste")
values(-100, 'Test', 'Novi Sad');

insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za biologiju i ekologiju', 'BE', 2);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Socijalni rad', 'SR', 5);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za veterinarsku medicinu', 'VM', 4);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za arhitekturu', 'AR', 3);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Digitalne umetnosti', 'DU', 5);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za uređenje voda', 'UV', 4);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za urbanizam', 'UR', 3);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za građevinarstvo i geodeziju', 'GG', 1);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za matematiku', 'MA', 2);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Digitalni marketing', 'DM', 5);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za arhitektonske tehnologije', 'TE', 3);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za saobraćaj', 'DS', 1);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za stočarstvo', 'ST', 4);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za industrijsko inženjerstvo i menadžment', 'DIIM', 1);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za energetiku, elektroniku i telekomunikacije', 'EET', 1);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(nextval('departman_seq'), 'Departman za fiziku', 'FI', 2);
insert into "departman"("id", "naziv", "oznaka", "fakultet")
values(-100, 'Test', '', 2);

insert into "status"("id", "naziv", "oznaka")
values(nextval('status_seq'), 'Samofinansiranje', 'S');
insert into "status"("id", "naziv", "oznaka")
values(nextval('status_seq'), 'Budžet', 'B');
insert into "status"("id", "naziv", "oznaka")
values(-100, 'Test', 'T');

insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Ana', 'Jovanović', 'IT12-2016', 2 , 14);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Jovan', 'Ilić', 'EI25-2017', 1 , 15);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Marija', 'Jović', 'PI60-2017', 2 , 16);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Aleksa', 'Savić', 'IM80-2018', 2 , 12);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Jovana', 'Maksimović', 'ZI50-2017', 1 , 10);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Miloš', 'Antić', 'II76-2016', 1 , 4);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Sergej', 'Vulić', 'KO96-2017', 2 , 3);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Nemanja', 'Marković', 'SW51-2017', 1 , 2);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Anđela', 'Kanlić', 'HK21-2017', 2 , 4);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Milica', 'Milić', 'PP98-2016', 2 , 13);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(nextval('student_seq'), 'Kristina', 'Kojić', 'IP36-2016', 2, 9);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman")
values(-100, 'Test', ' ', 'IT12-2016', 2 , 14);
