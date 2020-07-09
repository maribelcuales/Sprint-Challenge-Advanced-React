- [ ] Why would you use class component over function components (removing hooks from the question)?

  Class component comes with special properties and functionalities from React. This means we have access to special methods in React that allow us to build and add functionality to our App.    

- [ ] Name three lifecycle methods and their purposes.

  The three lifecycle methods are the following: 
  1.  componendDidMount()
      - initial data and state is defined
      - it is the last function to run in the "Mounting Phase" 
  2.  componentDidUpdate()
      - it is run if there are any changes to the state from new props, setState(), or forceUpdate() 
      - one must always start with an if statement when using this method to prevent an infinite loop 
  3.  componentWillUnmount()
      - this is used in the 3rd or last stage of the React Lifecycle
      - this method will unmount or clear all data      

- [ ] What is the purpose of a custom hook?

  The purpose of custom hook is to allow code reuse. It lets us create customized hooks that we can use for code that is being repeated throughout the App.

- [ ] Why is it important to test our apps?
  
  Testing apps is very important because it gives us developers a great deal of confidence that we are not introducing bugs into the program. 

  This is very important especially when an App already has a lot of moving parts with a large team working on it. This will help everyone write great code that will not break the App or program. Writing a good test suite will ensure good code and lets the team iterate more quickly.  
