create table demo_projects (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    project_name VARCHAR(50) NOT NULL, 
    project_manager_id BIGSERIAL NOT NULL,
    project_status VARCHAR(25) NOT NULL
);
INSERT INTO demo_projects (project_name, project_manager_id, project_status) VALUES ('Project 1', 4, 'In Progress');
