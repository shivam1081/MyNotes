# Chapter 9 Optimising our app 

### # Single responsibility prnciple 
Each of the component should have a singe repsonsibility. 

Advantages for this approach are:- 
1. It makes our code east to test.
2. Code becomes more reusable.

### # Creating our custom Hooks

#### Ques:- Why we need to create a custom hook ?
#### Ans:- 
1. There is always single functionality.
2. Always create a separate file for separate hook.
3. Always use keyword `'use'` while creating the hook.

#### Ques:- Is it necessary to use the word use in custom hooks ?
#### Ans:- It is not necessary but some projects use linter and it could through a error if we are not using the convention.

#### Ques:- What is Chunking, Code Splitting, Dynamic Bundling ?

#### Ans:- It refers to bundling the code into smaller chunks of code. Earlier what happen there is only one JS file that is created in the application.

- To break down your app into smaller logical chunks.
- It is required basically for big applications.
- This is called lazy loading becuase initially it will not load the grocery page. When we go to that link then only it will be loaded. This is also called 'On Demand loading'
- This is also called ad dynamic loading.

const Grocery = lazy(() => import("./components/Grocery"));
- Error can come because it could take sometime to load and react will throw an error.

- For the above case use Suspense and give it a fallback.Fallback contains the code for loadding logic that will run till the code is not loaded.  

- NOTE: Always use this when we are having some totally different component and the size of the component is huge ie it is having many child components.

