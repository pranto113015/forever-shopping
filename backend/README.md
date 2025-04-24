# Forever Shopping E-comerce Full Stack Website Creating Backend Short Step

### Backend Part

- step-1 :
Close all the frontend file and folder then create backend folder. After create backend folder look like `backend` now select the folder and right click and select the menu option `Open in Integrated Terminal` now the the another terminal for backend.

- step-2 : Now create the another file `server.js` inside the backend folder.

- step-3 : Now go to the backend terminal and follow the code.
    ```sh
    npm init
    ```
- step-4 : Then created the `package.json` file now open this file and remove the `"test": "echo \"Error: no test specified\" && exit 1",` line from the `Script` tag value and save change. 

- step-5 : Now we will install some dependencise for backend so follow the code.

    ```sh
    npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay strip validator cloudinary bcrypt
    ```

  **Explanation of Dependencise Packages:**

  - `cors` - Middleware for enabling CORS (Cross-Origin Resource Sharing) in Express.
  - `dotenv` - Loads environment variables from a .env file.
  
  - `express` - Web framework for Node.js.

  - `jsonwebtoken` - For generating and verifying JWT (JSON Web Tokens) for authentication.

  - `mongoose` - MongoDB ODM (Object Data Modeling) for Node.js.

  - `multer` - Middleware for handling file uploads.

  - `nodemon` - Utility to automatically restart the Node.js server during development (usually installed as a dev dependency).

  - `razorpay` - Official Node.js SDK for Razorpay payment gateway.

  - `stripe` - Official Stripe API library for payments.

  - `validator` - Library for string validation and sanitization.

  - `cloudinary` - SDK for Cloudinary (image/video upload and management).

  - `bcrypt` - Library for hashing passwords securely.

- step-6: Then we will create some folder inside the backend folder.

     `config`, `controllers`, `middleware`, `models`, `routes` etc.
- step-7: If we run the server then follow the code 

    ```sh
    npm run server
    ```
