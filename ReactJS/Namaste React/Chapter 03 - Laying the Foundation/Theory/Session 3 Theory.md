## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Q: What is role of `Babel`?
A: Babel converts the new version of code to the older vresion of code.
It is responsible for the polyfill. 
Polyfill refers to the process in which the new version of code is converted to older compatible version of the code for old browsers.

Babel only understand the html inside the JS ie. JSX

Babel comes along with parcel.

## Q: What is `JSX`?
A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.
## NOTE:- 
JSX is not html inside JS
It is the html like syntax but not html in JS.
JSX (Babel is used here)=> React.createElement=> Object => HTML(DOM)

### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
This is called JSX Expression.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: Superpowers of `JSX`.
A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```
Some advantages of JSX:-
- Improves the readability.
- Syntactic sugar

## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

## IMPORTANT NOTES
- In package.json, under scripts we can provide "start":"parcel index.html", than use simply npm run start
  Similarly we can provide the build command like "build":"parcel build index.html"
  Provide npm run to run any script. npm run=npx.
  There is shortcut to run `npm run` is `npm start`

- Parcel does not remove the console.log by itself 
If we want to remove console.log from the project than we have to use 
`babel-plugin-tranform-remove-console`
we have to install this plugin
we have to create the .babelrc to configure the babel

- Why we require the key ?

If there are more than  one children and if insert one more children than react have to do a lot of work to render and degrade the performance.
So we have to provide a unique id so that the react can understand the exact spot where it have to render and insert the object.

- React.createElement gives us an object => converted to HTML(DOM)

### About Functional Components and Class Based Components

- If we have a variable like 
const title=(
  <h1 id="title">Namaste React</h1>
);
than we have to call it in curly brackets ie {title}

But functional components are called like <FunctionalComponent/>






