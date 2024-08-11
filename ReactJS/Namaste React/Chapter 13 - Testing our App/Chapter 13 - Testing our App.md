### Diff Types of Testing that developer can do 

1. Unit Testing:- Testing one component in isolation is called Unit Testing. Basically it is testing one unit in isolaton.
2. Integration Testing:- Testing the integration of components. 
3. End to End Tesitng (E2E Testing):- Testing all the flows when user landing on the website till user leaves the websitte.

As a developer we are concerned about the first two flows.

#### LIBRARIES USED :- 

1. React Testing Library - It is the most standard way of writing TCs.
2. If we create a app using create react app then the library comes in build.
3. React Testing library use a framework called JEST.

#### Setting Up testing in Our app:- 

1. Install react testing lib.
2. Installed Jest.
3. Installed babel dependencies.
4. Config Babel by adding babel.config.js.
5. Parcel babel config get intruppted by jest babel.
6. So we will add configure parcel config file to disable default babel transpilation.
7. Jest configuration. npx jest --init
8. Here select no for typescript.
9. Select JSDOM - it is the env where these test cases are run. It is like a browser.
10. Install jsdom library.
11. Install this library @babel/preset-react - to make JSX work in test cases.
12. Include @babel/preset-react inside my babel config.
13. Install npm i -D @testing-library/jest-dom.

- Where we write TCs - We have to write in "__test__" and search for.js or ts. Or any file name with header.test.js/ts or header.spect.js/ts

- Two times underscore is called dunder and it is called dunder test.

- Testing does not understand redux and we have to provide the store to the header.

#### Integration Testing :-

When multiple components work together then it is called Integration Testing. 

- import { act } from "react-dom/test-utils";
- Always try to break down into smaller test cases.
- Under the coverage we have html file and if we open that we can et the entire status of coverage.