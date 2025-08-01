### 🚀 Forever Shopping – Full Stack E-commerce Website: Short Guide to Creating the Frontend Folder

#### Frontend Part
- step-1 : 
    ```sh
    npm create vite@latest
    ```
- step-2 : created project name `frontend` 
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
    npm install react-router-dom react-toastify
    ```
    ```sh
    npm run dev
    ```
- step-6 : Install Tailwindcss Postcss
    ```sh
    npm install -D tailwindcss postcss autoprefixer
    ```
    ```sh
    npx tailwindcss init -p
    ```
- step-7 : Install axios
    ```sh
     npm i axios
    ```
 



 

### For Deployment in Vercel the follow some step
create `vercel.json` file insite the `frontend` root folder and paste the bellow code.
Vercel json config to support React Router in frontend

```bash
  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/"
      }
    ]
  }
```
