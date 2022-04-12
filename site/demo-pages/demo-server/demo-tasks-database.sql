create table demo_tasks (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    task_name VARCHAR(50) NOT NULL, 
    project_id INTEGER NOT NULL,
    developer_id INTEGER,
    task_status VARCHAR(25) NOT NULL DEFAULT('Not Started')
);

INSERT INTO demo_tasks (task_name, project_id) VALUES ('Task 1', 1);
INSERT INTO demo_tasks (task_name, project_id) VALUES ('Task 2', 1);
INSERT INTO demo_tasks (task_name, project_id) VALUES ('Task 3', 1);
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 4', 1, 'In Progress');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 5', 1, 'In Progress');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 6', 1, 'In Progress');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 7', 1, 'Completed');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 8', 1, 'Completed');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 9', 1, 'Completed');

INSERT INTO demo_tasks (task_name, project_id) VALUES ('Task 4', 2);
INSERT INTO demo_tasks (task_name, project_id) VALUES ('Task 5', 2);
INSERT INTO demo_tasks (task_name, project_id) VALUES ('Task 6', 2);
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 7', 2, 'In Progress');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 8', 2, 'In Progress');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 9', 2, 'In Progress');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 1', 2, 'Completed');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 2', 2, 'Completed');
INSERT INTO demo_tasks (task_name, project_id, task_status) VALUES ('Task 3', 2, 'Completed');


