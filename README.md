# Cook Assitant
![Image of Cutting Board](https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80)

## Project Description
Cook Assistant is a working, interactive, React application that recieved data from Edamam, the third-party API. The app allows users to find a recipe that fits their dietary needs and search for any key ingredient that the user wants in the recipe. Click on the link below and start cooking!

**Link To Site:** https://cook-assistant.netlify.app/

### Programs/Application Used:
- React
- BootStrap
- JSX
- CSS
- Yarn

## Learning Experience

### Setting Up Project
One of the key feature of React is the compostion of the components. Similar to function in vanilla Javascript, components are reuseable function in React. Before diving into the creating the app, understanding the components hierarchy. 

![Component Hierarchy 001](https://media.git.generalassemb.ly/user/36270/files/e39c6980-d50a-11eb-8f71-9302d491dad6) 

### Setting Up Core Structure

#### React Components

The Component Hierarchy diagram, above, represents of how the components are struture in this app. In the Cook Assistant App, there are 7 components. Each being a child of the 'App' components, minus the 'Recipes' and 'Recipe'.

In this case, all of the event listeners and the main API calls was done in the 'App.js' file and is passed down to the Search Components, then to Recipes and Recipe. 

#### Dynamic API Calls

By using Edamam, the third party API, the App is able to make dynamic request. For this app, the recipes endpoint was used. So different props variables were created to make multiple calls. 

One of the element added was the 'mode'. Please reference to Problem Areas of this README for more information. 

```JS
const searchOptions = {
        key: process.env.REACT_APP_EDAMAM_KEY,
        id: process.env.REACT_APP_EDAMAM_ID,
        api: 'https://api.edamam.com/api/recipes/v2?type=public&'
    }

    const getApiData = async () =>{
        const apiEndPoint = `${searchOptions.api}q=${searchString}&app_id=${searchOptions.id}&app_key=${searchOptions.key}&health=${searchHealth}`;
        try{
            const response = await fetch(apiEndPoint, {
                mode: 'cors'
            });
            const data = await response.json();
            // console.log(data);
            setRecipes(data.hits);
        }catch(error){
            console.log(error)
        }
    }
```

Reference to the Edamam site for more documentation on the API call. 

A second API call was made in the Recipe component. Since there is a route for each individual recipe, each recipe had to match the id. In this case, params was an object that had the key 'recipe' and 'label'. By concat the value, the name matched the id. This allow only one recipe to be render and used.

```JS
const [uniqueRecipe, setUniqueRecipe] = useState(null);
    const name = routeProps.match.params.recipe+routeProps.match.params.label;

    const getApiData = async () =>{
        const apiEndPoint = `${routeProps.searchOptions.api}q=${name}&app_id=${routeProps.searchOptions.id}&app_key=${routeProps.searchOptions.key}&health=${routeProps.searchHealth}`
        try{
            const response = await fetch(apiEndPoint, {
                mode: 'cors'
            });
            const data = await response.json();
            // console.log(data);
            setUniqueRecipe(data.hits[0].recipe);
        }catch(error){
            console.log(error)
        }
    }

    console.log(uniqueRecipe);

    useEffect(()=>{
        getApiData();
    },[])
```

#### Focusing on User Experience
1. Creating a responsive App. During my last project, I created an app that was not mobile friendly. With that in mind, this app was to ensure it was responsive. With the help of bootstrap and flex, the app can be view on different media screen. 

#### Lessons Learned
1. Cut problems into smaller pieces and console.log any unknown data. By writing small lines of code and console.log any data, I understood where the bug located and what output I was receiving. 

## Problem Areas
1. One of the problem area was the API call being blocked by the CORS poilcy. Cross-origin resource sharing (CORS) allows the server to indicate other origins. To bypass the error, mode is a read only property that contains different type of mofe of request, one of which is 'cors'.

```JS
const getApiData = async () =>{
        const apiEndPoint = `${searchOptions.api}q=${searchString}&app_id=${searchOptions.id}&app_key=${searchOptions.key}&health=${searchHealth}`;
        try{
            const response = await fetch(apiEndPoint, {
                mode: 'cors'
            });
            const data = await response.json();
            // console.log(data);
            setRecipes(data.hits);
        }catch(error){
            console.log(error)
        }
    }
```

2. Understanding conditional rendering. One of the issue is having fetch statement running before my JSX. To prevent that from happening, conditional rending to show a loading message to allow the request to catch up. 

```JS
if (!uniqueRecipe){
        return <h1>Loading...</h1>;
    }else{
    return (
        <div className='recipe'>
            <h1>{name}</h1>
            <img src={uniqueRecipe.image} alt={uniqueRecipe.label}/>
```

3. Error Message for Bad Strings. Think about the user experiences, there should be a message to indicate to the user the input does not yield any results. 

By setting a truthy and falsey statement depending on output. I.E if the data.hit yield an array with no length then set props variable error true. Then passing the props down to the 'Search' component to render depending on if the statement is true.
```JS
// App.js
if(searchString){
      try{
        const response = await fetch(apiEndPoint, {
          mode: 'cors'
        });
        const data = await response.json();
        setError(false);
        setRecipes(data.hits);
        setSearch(true);
        setSearchString('')
          if (!data.hits.length){
            setError(true);
          }
        }catch(error){
            console.log(error);
            setError(true);
        }
      }
  }

  // Search.js
  {search && !error &&(
                <Recipes 
                recipes={recipes}
            />
            )}
            {search && error && (
                <h1>No recipes have been found with that ingredient. Please search another ingredient.</h1>
            )}  
```

## Future Directions
- 

## Accomplishments
- Cook Assistant is fully functional App.
- Dietary Retriction has been added and is functional.
- The app is responsive.

## References
- [Edamam API](https://www.edamam.com/)
- [Cutting Board Photo](https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80)
- [React](https://reactjs.org/)
- [Icon](https://www.flaticon.com/authors/smashicons)
- [CSS Tricks](https://css-tricks.com/)


<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
