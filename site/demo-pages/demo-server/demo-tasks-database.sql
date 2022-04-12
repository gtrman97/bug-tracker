create table demo_tasks (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    task_name VARCHAR(50) NOT NULL, 
    project_id INTEGER NOT NULL,
    developer_id INTEGER,
    task_status VARCHAR(25) NOT NULL DEFAULT('Not Started')
);

INSERT INTO demo_tasks (task_name, project_id) VALUES ('Task 1', 1);
