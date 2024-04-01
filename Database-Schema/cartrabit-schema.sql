create database bike_service_Application;
use bike_service_Application;


create table customerInfo(
customerId bigint auto_increment  NOT NULL,
customerName varchar(50) NOT NULL,
city varchar(100) NOT NULL,
emailId varchar(50) NOT NULL,
phoneNumber bigint NOT NULL,
status varchar(10) NOT NULL,
effectiveFrom date NOT NULL,
effectiveTo date NOT NULL,
createdBy varchar(100) NOT NULL,
createdOn datetime NOT NULL,
modifiedBy datetime DEFAULT NULL,
modifiedOn datetime DEFAULT NULL,
PRIMARY KEY (customerId)
) auto_increment=1000;

desc customerInfo;

insert into customerInfo(customerName,city,emailId,phoneNumber,status,effectiveFrom,effectiveTo,createdBy,createdOn)
values("Ramkumar","Kovai","ramkumar@gmail.com",9944897180,'A',current_date(),current_date(),'admin',current_timestamp());

select * from customerInfo;


create table bookingInfo(
bookingId bigint auto_increment  NOT NULL,
customerId bigint NOT NULL,
bookingDate date NOT NULL,
services varchar(100) NOT NULL,
status varchar(10) NOT NULL,
effectiveFrom date NOT NULL,
effectiveTo date NOT NULL,
createdBy varchar(100) NOT NULL,
createdOn datetime NOT NULL,
modifiedBy datetime DEFAULT NULL,
modifiedOn datetime DEFAULT NULL,
PRIMARY KEY (bookingId)
) auto_increment=1000;

desc bookingInfo;

drop table  bookingInfo;

select * from bookingInfo;

insert into bookingInfo( customerId,bookingDate,services,status,effectiveFrom,effectiveTo,createdBy,createdOn)
values(1000,"2023-11-12","waster wash",'A',current_date(),current_date(),'admin',current_timestamp());
