create table demo_users (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    full_name VARCHAR(50) NOT NULL, 
    email VARCHAR(50) NOT NULL,
    title VARCHAR(25)
);
INSERT INTO demo_users (full_name, email, title) VALUES ('John Michael', 'john@john-michael.com', 'Developer');
INSERT INTO demo_users (full_name, email, title) VALUES ('Alexa Liras', 'alexa@alexa-liras.com', 'Submitter');
INSERT INTO demo_users (full_name, email, title) VALUES ('Lauren Perrier', 'lauren@creative-tim.com', 'Submitter');
INSERT INTO demo_users (full_name, email, title) VALUES ('Michael Levi', 'michael@michael-levi.com', 'Project Manager');
INSERT INTO demo_users (full_name, email, title) VALUES ('Richard Gran', 'richard@richard-gran.com', 'Project Manager');
INSERT INTO demo_users (full_name, email) VALUES ('Miriam Eric', 'miriam@miriam-eric.com');
INSERT INTO demo_users (full_name, email, title) VALUES ('Jimmy Jones', 'jimmy@jimmy-jones.com', 'Developer');
INSERT INTO demo_users (full_name, email, title) VALUES ('Trevor Strnad', 'trevor@trevor-strnad.com', 'Project Manager');
INSERT INTO demo_users (full_name, email, title) VALUES ('Brian Eschbach', 'brian@brian-eschbach.com', 'Project Manager');

