create table demo_tasks (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    task_name VARCHAR(50) NOT NULL, 
    project_id BIGSERIAL NOT NULL,
    developer_id BIGSERIAL NOT NULL,
    task_status VARCHAR(25) NOT NULL
);