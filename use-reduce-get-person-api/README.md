# React Global State Management Template - with useReducer and Context API for Dynamic Data Fetching


This project demonstrates the use of React's useReducer hook combined with custom hooks and the Context API to manage global state in a React application. It provides users with a dynamic way to fetch and display user data, encapsulating complex state management logic within a single reducer function.

## Features

- **Data Fetching and Display**: Users can fetch random user data from an external API and display it in a card format.
- **Error Handling**: Graceful error handling and user feedback for failed API requests.
- **Loading State Management**: Proper indication of data fetching state with a loading indicator.
- **Context API**: Uses React's Context API to manage and distribute the fetched user data globally throughout the application.
- **Custom Hooks**: Leverages custom hooks to encapsulate the logic for fetching data and interacting with the global state, making the codebase cleaner and more maintainable.

## Technology Stack

- **React**: A JavaScript library for building user interfaces with components.
- **Create React App**: A comfortable environment to initialize and work on React applications.
- **Context API**: A feature in React for managing global state without props drilling.
- **useReducer**: A React hook that manages complex state logic with a reducer function.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Node.js and npm should be installed on your local machine.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Credits
This project was inspired by and uses code from the following open-source projects:

- Create React App: A great tool for bootstrapping React applications. [https://create-react-app.dev/](https://create-react-app.dev/)
- Random User API: Used for fetching random user data for demonstration purposes. [https://randomuser.me/](https://randomuser.me/)
