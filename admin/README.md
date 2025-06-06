# Forever Shopping E-comerce Full Stack Website Creating Admin Short Step

### Admin Part
- step-1 : 
    ```sh
    npm create vite@latest 
    ```
- step-2 : created project name `admin` 
- step-3 : selected framwork `react`
- step-4 : seleted variant `JavaScript`
- step-5 : 
    ```sh
    cd frontend
    ```
    ```sh
    npm install
    ```
    ```sh
    npm install axios react-router-dom react-toastify

    ```
    ```sh
    npm run dev
    ```
- step-6 : Install Tailwindcss Using PostCSS (v4.1)
  - Install Tailwind CSS
    ```sh
    npm install tailwindcss @tailwindcss/postcss postcss
    ```

  - Add Tailwind to your PostCSS configuration make the file (postcss.config.js) and copy the code .
    ```sh
    export default {
    plugins: {
        "@tailwindcss/postcss": {},
      }
    }
    ```
  - Import Tailwind CSS Copy the code and paste the index.css file.

    ```sh
    @import "tailwindcss";
    ```
  - Add Tailwind to your PostCSS another configuration make the file (tailwind.config.js) and copy the code.
    ```sh
        /** @type {import('tailwindcss').Config} */
    export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```
  - Start your build process

    ```sh
    npm run dev
    ```
- step-7 : Add Toastify header file in the `App.jsx` file 
    ```sh
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    ```