## Higher  Order Component :- 

#### ** Remember that there is a Data layer and UI layer. **

#### It is a function that takes a component and return an component by adding some more features to it.
#### In this we don't have to change the main component.

## Controlled and Uncontrolled Components:- 

#### When the parent is controlling the functioning of the component then it is called controlled component.

#### But when a component is not controlled by parent then it is a uncontrolled component.



## Lifting the state up:- (Read more about this from the react docs new one)

#### Props Drilling:- 

Basically it refers to passing the props from parents to child.

But it is a very complex process so we can use context in React.

## Context in React:- 

- It is a global place from where we can access the data.
- Always remember that always but the data that we are using at multiple places.
- In this we have Consumer by which we can consume the context value.
- We also have a provider by which we can over write the value of context.
- Remember that overwrite context value will only be available to the components that are wrapped inside it 

 <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>

- In class based componnet we have to use consumer to get the Context Data.
- To Modify we have to provide the Value in the provider to update or overwrite the context variable value.

- IMP:- Context is basically provided by react and it is used for small and mid sized applications.
- Redux is a state management libraray and used for bigger applications. It offers us thunks and middlewares.
   