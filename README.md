# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Components
jsx
props => properties => this helps us to pass information from parent to child
component tree => parent, children, siblings
styling in react
state => data that is being managed by a specific component

Event handlers => Are js functions that are triggerd when specific event occurs on React component

Click event => an interaction that occurs when a user clicks on a specific element(onClick)
onChange =>this handler is used primarily wit the form elements e.g inputs, textarea, select, radio
onSubmit

state => Data that changes with time in a 

React hooks => special functions that allows functional components to use react features without writing class components

useState hook => function that help us to manage state in react functional componet. It allows creation of stateful variable and a setter function to update it's value in the vatual DOM

const [name, setName]  = useState(true/false)
name => holds initial state
setName => a function that is used to update the state(name)

useState => define our initial state
initial state can be of any data type e.g string, array, object, boolean

<!-- controlled form component -->
form inputs get their values from the state

<!-- <input type="text" placeholder="Enter name....." value={name}> -->

useEffect hook => React hook that enables function components to perform side effect. It allows execution of function after a component renders. It can be configured to run under specific conditions using dependecny array

<!-- Scenarios where useEffect hook is applicable -->
Making networj request
Fecting data from remote api
Setting timeout

<!-- syntax -->

useEffect(()=>{function to be execute, [dependency array]})


without dependency array => Execution occurs anytime the rerenders
when dependency array is empty => function is run once when the page loads
with dependency array provided => Execution occurs when there is change to the dependency varable
s
