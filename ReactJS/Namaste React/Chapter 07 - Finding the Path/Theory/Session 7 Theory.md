## Namaste React Course by Akshay Saini

# Chapter 07 - Finding the Path

## Q: What are various ways to `add images` into our App? Explain with `code examples`.

A: Using the `full URL of the image` for the web (CDN) or any public images.
Example :

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

Adding the image into the project
`Drag your image into your project` and `import it` into the desired component

```
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

## Q: What would happen if we do `console.log(useState())`?

A: If we do `console.log(useState())`, we get an array `[undefined, function]` where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.

## Q: How will `useEffect` behave if we `don't add` a `dependency array`?

A: Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```

## Q: What is `SPA`?

A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?

A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.

## Q: V.V.IMPORTANT INTERVIEW QUES: When useEffect is called?

A: Remember the rendering takes place in this way:- `load->render->api call->again render`

1. If dependency `array is not present` than the `useEffect is called at every render`.
2. If dependenccy `array is empty` than `useEffect is called at initial render and only once`.
3. If there is `something in the dependency` array than `useEffect will be called when that dependency changes`.

## ABOUT ROUTING IN BROWSER (Working with react-browser-router)

Steps:-

1. import the createBrowserRouter in the app.js file.
2. Than provide the configuartion ie
   const appRouter = createBrowserRouter([
   { path: "/", element: <AppLayout /> },
   { path: "/about", element: <About /> },
   { path: "/contact", element: <About /> }
   ]);
   Each object define the different path.
3. Now to provide this router feature we have `RouterProvider` in react. It will provide this routing configuartion to the app.
4. Now instead of root.render(<AppLayout />); we provide root.render(<RouterProvider router={appRouter}>);
5. Thats all now you will be able to route by typing the url.
6. We also have a errorElement also in the configuration to show the error page.
7. There is also one useRouterError hook that gives us the information about the error occured.

## How can we do the child routing ? How to open the page in a common header?

This can be done by providing the children in the configuartion accordingly and thaen we have to use the Outlet functionality of react router dom to execute the page of the basis of the path as in the below code..

onst AppLayout = () => {
return (

<div className="app">
<Header />
<Outlet />
</div>
);
};

const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
errorElement: <Error />,
children: [
{ path: "/", element: <Body /> },
{ path: "/about", element: <About /> },
{ path: "/contact", element: <Contact /> },
],
},
,
]);

Outlet is replaced in html and we cannot see the outlet tag.

## Now how can we click to a click to change the path ?

NOTE:- In this case never use anchor tag. Because in this case whole page iss getting refreshed.
With react we can navigate without reloading the page.

We use `Link` as it will not reload but just refreshes the component.

 <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>

And that is why we usually called React Application to be `Single Page Application`. Because here we can see that there is no reloading of the page.

## Behind the scenes the Link tag is using anchor tag if we see in the console over html.
