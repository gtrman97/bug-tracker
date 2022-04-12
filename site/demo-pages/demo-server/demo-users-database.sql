create table demo_users (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    full_name VARCHAR(50) NOT NULL, 
    email VARCHAR(50) NOT NULL,
    role_id INTEGER
);
INSERT INTO demo_users (full_name, email, role_id) VALUES ('John Michael', 'john@john-michael.com', 3);
INSERT INTO demo_users (full_name, email, role_id) VALUES ('Alexa Liras', 'alexa@alexa-liras.com', 4);
INSERT INTO demo_users (full_name, email, role_id) VALUES ('Lauren Perrier', 'lauren@lauren-perrier.com', 4);
INSERT INTO demo_users (full_name, email, role_id) VALUES ('Michael Levi', 'michael@michael-levi.com', 2);
INSERT INTO demo_users (full_name, email, role_id) VALUES ('Richard Gran', 'richard@richard-gran.com', 2);
INSERT INTO demo_users (full_name, email) VALUES ('Miriam Eric', 'miriam@miriam-eric.com');
INSERT INTO demo_users (full_name, email, role_id) VALUES ('Jimmy Jones', 'jimmy@jimmy-jones.com', 3);
INSERT INTO demo_users (full_name, email, role_id) VALUES ('Trevor Strnad', 'trevor@trevor-strnad.com', 2);
INSERT INTO demo_users (full_name, email, role_id) VALUES ('Brian Eschbach', 'brian@brian-eschbach.com', 2);

