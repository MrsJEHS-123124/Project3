Name: Jessica E.H. Smith

OverView: 

LuckyCharm Todos is a React-structured wellness task app.
Uses can choose a concern they may have for their health like stress, 
sprained ankle, or weightloss and based on the health concern this
will assist them in generating a set of suggested tasks, and then
help manage thier to-do list by adding, completeing and filtering 
the task.

How to Use

 1. Choose a health concern to load to suggested tasks
 2. Add your own tasksin the input form
 3. Click a task to mark it complete or incomplete
 4. Use filter buttons to veiw all, completed, or
    incomplete tasks
 5. Click on contact to navigate to contact page using
    nav bar links.
 6. User can submit their information using the 
    form.                                                                                                                                  

Technologies Used: 

- HTML
- CSS
- JAVASCRIPT
- REACT
- REACT DOM ROUTER
 
Future Improvements:

1. Add a user authentication so users can create account
   with e-mail and password, giving the user the ability
   to sign in and out easily.
2. Add a search-powered resource section using an API to
   allow the user to recieve in depth articles or info 
   based on the health concern they select
3. Make app fully mobile-responsive

User Stories: 

* As a user, I want to select a health concern and based
  on the  selection recieve targeted task suggestions to
  support my wellness goals.
* As a user, I want to mark off tasks as complete or  
  incomplete so I can keep track of my progress.
* As a user, I want to add my own custom tasks so I can 
  personalize my to-do list.
* As a user, I want to delete tasks I no longer need so
  I can stay organized.
* As a user, I want to have access to deeper resources
  or articles specific to my health concern so I can
  learn more about ways to help patients or myself
  maintain track of wellness goals.

State Trees: 

TodosView
|___selectedConcern: string
|___tasks: string[]
|___completed: string[]
|___newTask: string
|___filter: string ("all" | "completed" | "incompleted")

ContactView
|---name: string
|---email: string
|---message: string

Wireframe:

+---------------------------------+
|    Nav: [Todos]  [Contact]      |
+---------------------------------+

[TodosView]

+------------------------------+
|  Select Concern Dropdown     |
+------------------------------+

+-----------------------------------+
| Add Task Form                     |
| [input]       [Add button]       |
+-----------------------------------+

[Filter Buttons: All | Completed | Incomplete]

+-----------------------------+
|  Task List                 |
|  [ ] Take a walk           |
|   [x]  Drink water         |
+------------------------------+

[Contact View]

+---------------------------------+
| Contact Us Header               |
| Empty Fields Name Email         |
+---------------------------------+
