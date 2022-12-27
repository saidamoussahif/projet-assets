# projet-assets
 CRUD Image.

# Technologies

- React
- Node
- Express
- Multer
- Mongoose
- MongoDB 


We will build a basic React front end with a file picker as our interface to post to the backend. For the backend we will use
Node with express to create an API that will interact with MongoDB's new database as a service Atlas, to store our images.

# Front End App

Let's quickly get our front end up and running using create-react-app. If you have not already installed this globally in your cmd prompt run npm i --g create-react-app then navigate to the parent folder you want to store the project in and run create-react-app crud_image once complete cd crud_image and yarn start or npm run start

To make things easy we will the front end very quickly using tailwindcss just to get an interface up and running. 

# Back End
On the backend, we will get started by creating a folder called server in the root directory of our app in your terminal you can navigate to the root and run mkdir server && cd server. Next, in the folder, we will initialize with npm init accepting all the defaults. Now we can install all the necessary packages, express mongoose multer npm i -D nodemon.
