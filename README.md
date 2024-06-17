BankAPI
BankAPI is a RESTful API service built with Node.js and Sequelize ORM, providing endpoints to access information about banks and their branches.

Features
REST API Endpoints: Access bank and branch information through RESTful endpoints.
Sequelize ORM: Data modeling and interaction with the PostgreSQL database.
Supabase Integration: Utilizes Supabase as the backend database service.

Installation
Clone the repository: git clone https://github.com/Dash10107/BankAPI.git

Install dependencies:

cd BankAPI
npm install

Set up environment variables:

Create a .env file in the root directory and add the following environment variables:

plaintext
Copy code
DB_HOST=your_supabase_host
DB_USER=your_supabase_user
DB_PASSWORD=your_supabase_password
DB_NAME=your_supabase_database_name
DB_PORT=your_supabase_port

Start the server: node server.js

Endpoints

Bank Endpoints
GET /api/banks: Get a list of all banks.


Branch Endpoints
GET /api/branches/:ifsc: Get details of a specific branch by ID.
GET /api/banks/:bankName/branches: Get details of all the branches based on bank name. 
GET /api//branches/city/:cityName : Get details of all the branches based on city name. 

Video Tour of Testing These APIs : 
[screen-capture.webm](https://github.com/Dash10107/BankAPI/assets/97282628/3248b894-2a46-446f-9259-2bee2317c7de)
