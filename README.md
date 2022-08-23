# Description

This application is our term project for CPSC 471 - Data Base Management Systems. 

# Getting Started
In order to run our software directly from your device, you must have Node.js and mySQL
installed beforehand, along with an IDE of your choosing. You can then download the repository
from out github by pressing the green “Code” button and downloading the ZIP.

Extract the zip to any location of your choosing. Locate the Database.sql file and add into your
mySQL program. To connect the mySQL database, go into the localuser.json file and edit the
“user” and “password” fields to match your SQL server.

### **Example:**
&nbsp; &nbsp; &nbsp; &nbsp;
{
"user": "root",
"password":"password",
"port": 5001
} (default)
</br>
</br>
&nbsp; &nbsp; &nbsp; &nbsp;
{
"user": "sadia",
"password":"test123",
"port": 5001
}

# Installing Modules

Although node-modules are included, if you face any troubles with them, follow these steps to install them:

In your IDE, make sure you are in the 471app folder. If not, please change your directory using
the “cd” command.

  ### **Example:** 
  &nbsp; &nbsp; &nbsp; &nbsp; 
  directory in IDE:
  </br>
  &nbsp; &nbsp; &nbsp; &nbsp;
  C:\Users\sadia\Documents\GitHub\471app>

Then open a new terminal and enter the following command to install the required dependencies:
### `npm i`

# Starting the Application

Within the 471app directory, open a new terminal and enter the following command to open the
website (frontend):
### `npm start`

Then in another new terminal, enter the following command to connect the server (database):
### `node server.js` 

You should now be able to access our website on your local browser. The frontend (client)
should be available at http://localhost:3000 (or any other port) and the backend (server) should
be available at http://localhost:5001
