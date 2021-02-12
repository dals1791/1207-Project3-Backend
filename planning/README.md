# Project 3 - MERN - BUDGTPAD!

## Project Links

- [Frontend Repo Link](https://github.com/dals1791/1207-Project3-Frontend)
- [Backend Repo Link](https://github.com/dals1791/1207-Project3-Backend)
- [Netlify Link](https://budgtpad.netlify.app)
- [Heroku Link](https://project3-backend-1207.herokuapp.com/)

## Project Description

Our team will be building and deploying a full-stack application that will allow users to manage their income and expenses in their bank account. Their income and expenses will be visualized by a bar/pie chart on the main page. Users will be able to add daily transactions and see what their spending habits are on. Users can enter transactions based on category, cost, and even place date/time stamps for reference.

Tnis application will of course be built mobile first, followed by tablet and then desktop.

## Project Completion status

| Project Phase | Status/Notes | 
| --- | :---: |  
| Group meeting to decide what our application will do | Complete| 
| Front-End Architecture Planning  | Complete | 
| Back-End Architecture Planning | Complete | 
| Initializing React/Express for basic set-up use | Complete |
| Primary assembly of Express API Server | Complete |
| Primary assembly of React front-end application | Complete |
| Setting useState and useEffect hooks | Complete |
| Calling API to React application | Complete |
| Testing of bare-bone application for functionality | Pending |
| CSS Styling | Complete - Post-MVP Styling in progress |


## API

Our team will be constructing our own API on an Express server. This API will have the following schema as an example transaction:

**User Schema**
- Contains user info - first and last name, email, password
- User will reference the Budget model which contains their income and how much they are willing to spend. 
- User will also reference a Transaction Model which contains details of what they spend money on.
```
User: {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    Budget: ref 'Budget' ,
    Transaction: ref 'Transactions'
}
```
**Budget Schema**
- This has an Income number for how much money user has right now.
- There is a Spend Goal amount which represents how much user is willing to spend monthly. (Not required)
- Spend Category is for which categories user would like to spend on.  (Not required)
```
Budget: {
    Income: Number,
    SpendGoal: {type: Number, required: false },
    SpendCategory: {type: String, required: false }
}
```
**Transactions Shcema**
- Description of transaction made ex: 'Sushi with family'
- Category of the transaction ex: Food, Gas, Travel, Groceries.
- Amount of money for the transaction
- The date transaction was made
- What type of transaction? Routine Yes/No? --> Routine is for bills. If user has monthly bills to pay, that becomes a routine transaction.
- What type of transaction? Expense Yes/No? --> User can spend money or receive money. If someone pays them back or the user gets paid for work, the transaction is added to their income.

```
Transactions: {
    Description: String,
    Category: String,
    Amount: Number,
    Time: Date,
    Routine: {type: Boolean, required: false}
    Expense: {type: Boolean, required: false}
}
```
## User Stories

- [User Stories](https://docs.google.com/spreadsheets/d/1Jt04_3x2bBOjLyEk1pWXB2FXh_d--9XjrhQ5qbZH9aM/edit#gid=0)

## Wireframes

Here are the official wireframes for our budget application. The first two links are the Figma wireframes for both mobile and desktop applications. Our architecture for our React front-end, and Express back-end are attached as well.

- [WireFrame - Mobile](https://www.figma.com/file/DfRQa0bx3jLrD2q41igogW/BUDGTPAD-WireFrame-Mobile-name-is-not-final?node-id=4%3A2)
- [WireFrame - Tablet](https://www.figma.com/file/TRBwOlsBBOdenVc0IDT9Yb/BUGTPAD-Wireframe-Tablet?node-id=0%3A1)
- [WireFrame - Desktop](https://www.figma.com/file/njd9KOGH3tyByGZcg606vH/BUDGTPAD-WireFrame-Desktop?node-id=0%3A1)
- [Front-End Architecture](https://docs.google.com/document/d/1cihabkw6SrNlEe_E8MJKUVV-zLnOUvzDcJDbjgFdojk/edit?usp=sharing)
- [Back-End Architecture](https://docs.google.com/spreadsheets/d/1XECmUmoJZeuVNIFufisZjdueglj_SYs-7OsxV74k5nQ/edit#gid=0)


### Technical Requirements - Two Separate Repos

- [Frontend Repo Link](https://github.com/dals1791/1207-Project3-Frontend)
- [Backend Repo Link](https://github.com/dals1791/1207-Project3-Backend)


## MVP 

### Backend
- Backend Repo wth readme that describes backend.
- Planning Directory that has full backend/frontend planning.
  - Contains user stories, backend architecture, frontend architecture, and wireframes
- Use Node, express, and mongoosedb
- Create a minimum of 2 models.
  - User, Budget, and Transaction
- Models have at least one association. (1 to 1, 1 to Many, Many to Many)
  - Create 1 to Many association
- Full CRUD on at least one model. (where it makes sense)
- Create logically named routes/urls.
- Deployed via Heroku

### Frontend
- Frontend Repo with readme that describes frontend.
- Uses React App. 
- React app leverages backend API information. 
- Uses React Router to handle multiple views
- Communicate with backend DB using Fetch or Axios.
  - Communicate with fetch. 
  - Render data to frontend.
- Contains project team page
- Be responsive (Mobile, Tablet, and Desktop).
- Deployed via Netlify or Vercel 

## Functional Aspect
- user can log in (default page).
- landing page shows summary of monthly (default) expenses. 
  - income, expenses, pie or bar chart with breakdown of transactions, net gain/loss.
- user has ability to navigate to home, transactions, user info, or porject team pages via navbar. 
- user can add a transaction (expense or income) anytime via nav-bar.
  - populates transactions page and updates landing page.
- transactions page shows following infomration:
  - routine transactions aka monthly bills (utilities, rent, insurance, etc)
  - non-routine transactions i.e. dining out, spntaneous purchases, groceries, etc. 
  - shows transactions based on time stamp.
- user can add user information and create expense goals per month

#### Post-MVP
- User authentication for people to be able to make accounts and log-in.
- Sorting transactions (monthly, daily).
- Edit a transaction based on clicking the transaction versus clicking a button. 
- Settings page for users to configure light and dark mode.
- historical trending, analysis, comparisons. (daily, monthly, yearly)

## Front-End Pages and Components
Initial components decided for Project. 

| Pages | Description | 
| --- | :---: | 
| App.js | Main page to store and render all components |
| Login | Lets users log on the application. |
| Landing | Render pie chart, transactions and income. |
| Transactions | Shows daily transactions of user. |
| User info | Account infomation of user. |

| Components | Description | 
| --- | :---: |
| Team | Shows user stories and team members that worked on this app. |
| User Login Form | Lets users create account using email and password. |
| Pie Chart | Visual diagram of user income and expenses. |
| Add Transaction | Allows users to log transaction based on category, description, cost, date and time. |
| Add Income/Goal | Adding user income and goals of spending habits.       |
| NavBar | Navigation Bar for the app. |
| Category Drop Menu | Drop-down menu for categories. |
| Landing | Component rendered on landing page. |
| Summary | Summarizes all transactions. |
| Topbar | Landing page top bar. |
| Update Transaction | Allows user to update transactions. |

## MVP Time-Frames

| Task | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create database/seed data | H | 6 hrs | 8 hrs | 8 hrs |
| Create routes/test | H | 8 hrs | 9 hrs | 9 hrs |
| Create React Skeleton React Components | H | 5 hrs | 8 hrs | 8 hrs |
| React Routes/Paths linking to components | H | 1 hr | 1 hr | 1 hr |
| API fetch to grab data in React | H| 1 hr | 2 hrs | 2 hrs |
| Login page - check user Input | H | 4 hrs | 8 hrs  | 8hrs |
| Landing page - Render pie chart and income data | H | 8 hrs | 12 hrs | 12 hrs |
| Transactions page - Render transactions data | H| 4 hrs| 6 hrs | 6 hrs |
| Transactions Form component - add new transaction and display it on Transactions page | H| 3 hrs| 5 hrs | 5 hrs |
| User Info page - render data | H| 3 hrs| 8 hrs | 8 hrs |
| User Info Form Component - Edit user info: name, email, password, income | H | 3 hrs | 10 hrs | 10 hrs |
| Teams page | H | 2 hrs | 8 hrs | 8hrs |
| Mobile Layout | M | 15 hrs | 20 hrs | 20 hrs |
| Tablet Layout | M | 15 hrs | 25 hrs | 20 hrs |
| Desktop Layout | M | 15 hrs | 25 hrs | 25 hrs |
| Total Time | H |  93 hrs | 146 hrs | 146 hrs |


## Post MVP Time-Frames
| Task | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| User authentication | H | 10 hrs | 0 hrs | 0 hrs |
| Sorting transactions (monthly, daily, yearly) | M | 6 hrs | 0 hrs | 0 hrs |
| Edit a transaction based on clicking the transaction versus clicking a button.  | MH | 10 hrs | 0 hrs | 0 hrs |
| Settings page for users to configure light and dark mode. | L | 6 hrs | 0 hrs | 0 hrs |
| Historical trending, analysis, comparisons of spending data. (daily, monthly, yearly) | L | 20 hrs | 0 hrs| 0 hrs |
| Total Time | H |  52 hrs | 0 hrs | 0 hrs |


## Additional Libraries
Our team will probably use the following libraries and frameworks:

- React.js
- React-Router
- Express.js
- Mongo Shell
- Mongoose
- Bootstrap
- Chart.js

## Tasks for Team Members

Official tasks assigned to each team member. Collaboration will be done on Trello.

**Sean:**
- Set-up the Express server and configured schema/models.
- Back-End Developer, received assistance from Anny.
- Creating planning directory and architecture.
- Linked API to React app.

**Anny:**
- Assisted Sean and Steve with both back-end and front-end.
- Created state and other hooks for React Application.
- Helping out with routes, back-end and front-end.
- Troubleshooted the bugs we had during development.

**Steven:**
- Planning of the application, project worksheet, wireframes. 
- Front-end Designer - received assistance from Anny and Sean.
- Set-up React server, boilerplates and basic configuration of components.
- Updated project worksheet with times and updates.

