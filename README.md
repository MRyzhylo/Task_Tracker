--> # Task_Tracker ENG
GET Requests: 
'/api/createdb' 
This key crates a data base with the name:  " taskTracker "  

'/api/createemployeetable/:name' 
Creates an employees' table in DB 
where :name means the name of this table 
The table includes following fields: 
id: will be filled out automatically,        
user_id:  Number (will be filled out by user), 
first_name:  String (will be filled out by user), 
last_name: String (will be filled out by user)  

'/api/createtasktable/:name'
Creates an employees' table in DB, where :name means the name of this table 
The table includes following fields: 
id will be filled out automatically 
user_id: Number (will be filled out by user; This user id must be identical with user id in employees’ table),  
title: String (will be filled out by user),  
description: String (will be filled out by user), 
status: String (will be filled out by user)  

'/api/getcard/:tablename/:id'
Can be used to get a single card from a chosen table 
:tablename - the name of the table that includes a required card 
:id – id of the card that must be received  

'/api/getcards/:tablename'
Can be used to get all cards from a chosen table 
:tablename - the name of the table that includes a required cards   

POST Requests: 
'/api/addemployeecard/:tablename' 
Creates a user (an employee) card in a table where the table's name is passed to the key :tablename 
In the following format:  
{         
user_id: Number,         
first_name: String,          
last_name: String  
}  

'/api/addtaskcard/:tablename' 
Creates a task's card in a table where the table's name is passed to the key :tablename 
In the following format:   
{         
user_id: Number,         
title: String,          
description: String,         
status: String   
}  

PUT Requests: 
'/api/redactemployeecard/:tablename/:id'
Allows you to edit an employee's card in a specified table. 
Keys for this request are: 
:tablename – the table's name that will be edit 
:id – id of the user whose card needs to be edit  

'/api/redacttaskscard/:tablename/:id' 
Allows you to edit a task's card in a specified table. 
Keys for this request are: 
:tablename - the table's name that will be edit 
:id - id of the task's card that needs to be edit  

'/api/updateuserintask/:tablename/:id' 
Allows you to change a task's card in a specified table. 
You can change a user (an employee) who was assegned to this task. 
It is neede to replace a user id with a user id of another user (employee) 
{ 
user_id: 
}Keys for this request are: 
:tablename - the table's name that will be edit 
:id - id of the task's card that needs to be edit  

'/api/updatestatusintask/:tablename/:id' 
Allows you to change a status of a task in a task's card in a specified tableStatuses of the tasks that must be used:  
"View", "In Progress", "Done"  
{ 
status: 
}
Keys for this request are: 
:tablename - the table's name that will be edit 
:id - id of the task's card that needs to be edit  

DELETE Request: 
'/api/deletecard/:tablename/:id' 
Deletes a spacified card in a spacified table. 
:tablename - the table's name that will be edit 
:id – id of the task's card that needs to be edit

--> # Task_Tracker RUS
GET Requests:
'/api/createdb'
Данный ключ создает базу данных с именем  " taskTracker "

'/api/createemployeetable/:name'
Создает таблицу сотрудника в БД где 
:name  имя создаваемой таблицы
с полями:
id автоматическое заполнение,       
user_id:  Number (заполняет пользователь),
first_name:  String (заполняет пользователь),
last_name: String (заполняет пользователь)

'/api/createtasktable/:name'
Создает таблицу задания в БД где 
:name  имя создаваемой таблицы
с полями:
id автоматическое заполнение
user_id: Number (заполняет пользователь, должен совпадать с user_id в таблице сотрудников), 
title: String (заполняет пользователь), 
description: String (заполняет пользователь),
status: String (заполняет пользователь)

'/api/getcard/:tablename/:id'
Позволяет получить отдельную карту из выбранной таблицы
:tablename - название таблицы в которой находиться искомая карта
:id – id карты которую нужно получить

'/api/getcards/:tablename'
Позволяет получить все карты из выбранной таблицы
:tablename - название таблицы в которой находиться искомые карты


POST Requests:
'/api/addemployeecard/:tablename'
Создает карту пользователя (сотрудника) в таблице где имя таблицы передается в ключ :tablename
В формате:
 {
        user_id: Number,
        first_name: String, 
        last_name: String
 }

'/api/addtaskcard/:tablename'
Создает карту задания в таблице где имя таблицы передается в ключ :tablename
В формате:
  {
        user_id: Number,
        title: String, 
        description: String,
        status: String
  }

PUT Requests:
'/api/redactemployeecard/:tablename/:id'
Дает возможность редактировать карту сотрудника в заданной таблице
Где ключи 
:tablename - название таблицы в которой будут производиться изменения и 
:id - id пользователя чью карту необходимо отредактировать

'/api/redacttaskscard/:tablename/:id'
Дает возможность редактировать карту заданий в заданной таблице
Где ключи 
:tablename - название таблицы в которой будут производиться изменения и 
:id - id задания чью карту необходимо отредактировать

'/api/updateuserintask/:tablename/:id'
Дает возможность редактировать карту задания в заданной таблице, а именно изменить сотрудника на которого было привязано задание на другого сотрудника путем изменения 
{
user_id:
}
Где ключи 
:tablename - название таблицы в которой будут производиться изменения и 
:id - id задания чью карту необходимо отредактировать

'/api/updatestatusintask/:tablename/:id'
Дает возможность редактировать карту задания в заданной таблице, а именно изменить статус задания.
Допустимо изменять только на значения:  "View", "In Progress", "Done" 
{
status:
}
Где ключи 
:tablename - название таблицы в которой будут производиться изменения и 
:id - id задания чью карту необходимо отредактировать

DELETE Request:
'/api/deletecard/:tablename/:id'
Удаляет выбранную карту в выбранной таблице
:tablename - название таблицы в которой нужно произвести удаление
:id – id карты которую нужно удалить
