create table demo_roles (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    role_name VARCHAR(50) NOT NULL 
);

INSERT INTO demo_roles (role_name) VALUES ('Admin');
INSERT INTO demo_roles (role_name) VALUES ('Project Manager');
INSERT INTO demo_roles (role_name) VALUES ('Developer');
INSERT INTO demo_roles (role_name) VALUES ('Submitter');

