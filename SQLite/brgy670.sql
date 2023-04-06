CREATE TABLE senior_citizens_info(id int IDENTITY(1,1) NOT NULL,
                                Last_Name VARCHAR(255) NOT NULL, 
                                First_Name VARCHAR(255) NOT NULL,
                                Age int NOT NULL,
                                Birth_month DATE NOT NULL,
                                Address VARCHAR(255) NOT NULL,
                                ContactNo int NOT NULL,
                                PRIMARY KEY (id)
                                );