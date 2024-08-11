Here's a properly formatted markdown file for your TypeScript notes:

```markdown
# TypeScript Notes

## Type Annotation
- When we define the datatype of the function or the variable explicitly, it is called type annotation.

## Type Inference
- When TypeScript picks up the datatype on its own.

### Points to Note:
- When the type is obvious, use inference.
- For complex cases, define explicitly.

## Optional & Default Parameters
### Optional Parameter:
```typescript
const func = (param?: string) => {};
```

## Array
### Define 1:
```typescript
const numbers: number[] = [1, 2, 3, 4, 5, 6];
```

### Define 2:
```typescript
const numbers1: number[] = new Array(1, 2, 3, 4, 5, 6);
```

### Define 3:
```typescript
const names: string[] = Array.of("vinod", "shivam");
```

## Array Methods
1. `arr.push(1)`: - Returns the length of the array. It changes the real array.
2. `arr.pop()`: - Returns the data that got popped out.

## Objects Methods
```typescript
const person = {
  name: 'Shivam Dubey',
  age: 27,
  isStudent: true,
  address: {
    city: 'Pune',
    country: 'India',
  }
};
```

## Type Alias in TypeScript
```typescript
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: { city: string; country: string };
  class?: string; // Optional
};

const person1: Person = {};
```

## Function Call Signatures
In this, we define the signature of the function, how the function should behave.

```typescript
type Signature = {
  function1: (param1: string) => string;
};

const fun: Signature = {
  function1: (param1: string) => `Hello bro ${param1}`,
};

console.log(fun.function1("Shivam"));
```

## Enums
```typescript
enum Roles {
  user = 'user',
  admin = 'admin',
}

type UserDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: UserDetails = {
  email: 'shivamdubey1081@gmail.com',
  password: 'qwew',
  role: Roles.admin,
};

const user2: UserDetails = {
  email: 'shivamdubey1801@gmail.com',
  password: 'qwew',
  role: Roles.user,
};

const isAdmin = (user: UserDetails): string => {
  const { email, role } = user;
  return role === 'admin' ? 'Is admin' : 'Not an admin';
};
```

## Tuples
- Fixed number of elements but can have different datatypes.
- Order matters in tuples.

### Example:
```typescript
type Person = [string, number, boolean];

const person1: Person = ['Shivam', 25, true];
const person2: Person = ['Dubey', 25, true];

const displayInfo = (person: Person): string => {
  const [name, age, hasLicense] = person;
  return `${name} is ${age} years old and Driving license ${hasLicense ? 'Yes' : 'No'}`;
};

console.log(displayInfo(person1));
```

* Here we have to make the tuples readonly:
```typescript
type Person = readonly [string, number, boolean];
```
Now we cannot push anything into the tuples.

## Unions and Intersections in TypeScript
### Unions:
```typescript
const userInput = (input: string | number): string | number => {
  if (typeof input === 'string') return 'It is a string';
  else if (typeof input === 'number') return 'It is a number';
  else return 'Invalid Input';
};

console.log(userInput("Shivam"));
```

### Intersections:
```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  empName: string;
  empId: number;
};

type EmployeeDetails = Employee & Person;

const empDetails: EmployeeDetails = {
  name: 'Shivam',
  age: 25,
  empName: 'shivam.d.dubey',
  empId: 13239787,
};

console.log(empDetails);
```

## Generics
- In this, we define the type as the generic type. Here "Type" is only a placeholder and it can be any variable.

```typescript
function genericConcept<Type>(value: Type): Type {
  return value;
}

const result1 = genericConcept(25);
const result2 = genericConcept("Shivam");
const result3 = genericConcept(true);

console.log(result1);
console.log(result2);
console.log(result3);
```

## Function Overloading
```typescript
function add<T, U>(a: T, b: U) {
  console.log(typeof(a));
  console.log(typeof(b));
}

add('shivam', 5);
```
```

`src\g_mut_var_constraints.ts`
1. **Important:** When using generic and non-generic types together, while calling the function, we need to define the type in a specific manner. But with non-generics, we don't need to.

    ```typescript
    // function add(a: number, b: number): number;
    // function add(a: string, b: string): string;
    // function add(a: any, b: any): any {
    //     return a + b;
    // }
    ```

2. Generic function definition:

    ```typescript
    function add<T, U>(a: T, b: U, c: boolean) {
        console.log(typeof a);
        console.log(typeof b);
        console.log(typeof c);
    }

    add<number, string>(5, "thapa", true); // Output: 
    add<string, number>("Hello, ", 5, false);
    ```

3. Declaring `result1` and `result2` variables:

    ```typescript
    const result1;
    const result2;
    ```

4. Defining a function `addTwo`:

    ```typescript
    const addTwo = (num1: number, num2: number) => {
        return num1 + num2;
    };

    console.log(addTwo(5, 19));
    ```

