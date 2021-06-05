# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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


## eslint setup for project error linking

- install eslint to visual code editor
- npm install -D eslint
- run ./node_modules/.bin/eslint --init
- create frontend/.env
- Add SKIP_PREFLIGHT_CHECK= true

## redux
- npm install redux react-redux
- create store.js
--- Having two things initialState and reducer. reducer function will return modified states. both used in createStore(reducer, initialState)
- CONSTANTS
---create src/constants/eachConstant.js
- ACTIONS
---CREATE src/action/eachAction.js
---Actions are arrow functions returns other async function which accept dispatch as paramerter. Dispatch will field by redux-thunk. Dispatch accept object [ object have type ] type is same as constant for which action is created.
--- Dispatch ({type: ACTION_TYPE, payload: objectHaveReducerStates }) 
--- component -> create action & dispatch action to redux store to change strate.
- Reducer
---Function accept paramertes (state, action). Use switch case for actionType. Each case return state. For updated states 
we use action.payload - All reducer states available in action payload.
- Add reducer to store
---It use combine reducer parameter object where we pass the reducer
- UseSelector
--- used to get object from redux store.
--- function accepts function as paramerter state.
- Get data in component 
--- use dispatch(callFunction())
-useDispatch
--- function to use react actions in component.
-steps
1)install redux, react-redux, redux-thunk
2) add provider
3)create store with redux and apply thunk middleware
4)Define constants and actions
5)create reducer
6)fetch data from backend useDispatch