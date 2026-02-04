# HOW TO RUN
npm install
node app.js

## Project Structure
https://dev.to/moibra/best-practices-for-structuring-an-expressjs-project-148i

1. Separate Concerns: Use MVC Pattern
Models - Handle database interactions
Controllers - Contain business logic (handling requests and responses)
Routes - Define API endpoints

2. Use environment variables
Never hardcode sensitive information like API keys, database credentials, or JWT secrets. Instead, store them in a .env file and load them using dotenv.

3. Use Middleware for Code Reusability
Middleware helps keep the main logic clean and reusable.
See src/middlewares/logger.js

4. Implement Proper Herror Handling
Centralized error handling prevents redundant error-handling code.
See src/middlewares/errorHandler.js

5. User Services for Business Logic
Keep business logic separate from controllers by using a services layer.
See userService.js and userController.js

6. Database Connection in a Separate File
To keep the app.js clean, manage the database connection separately.
