#Learning Life cycle Methods
1. **Mounting** - 
    When an instance of a component is being created and inserted into DOM.
    Different Methods in Mounting
    constructor,static getDerivedstatesfromprops,render,componentDidMount.
2. **Updating** - 
    When a component has been rerendered as a result of changes to either its props or state.
    Different Methods in Updating Cycle
    static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and ComponentDidUpdate.
3. **Unmounting** - 
    When a component is removed from DOM.
    componentWillUnmount
4. **Error Handling** - 
    When there is error during rendering, in a lifecycle method, or in the constructor of any child component.
    static getDrivedStateFromError and componentDidCatch.

#Donts in constructor(props)
Never do HTTP requests from constructor.
super(props) is called to overwrite this.state.

Then static getDerivedStateFromProps(props,state)
No HTTP Requests.

render()
Read props and State and Returns JSX.
Do not change state or interact with DOM or make AJAX Calls.
When this runs Children's Lifecycle's method also Runs.

componentDidMount()
Immediately called after a component and all its children components have been rendered to the DOM.
Best Place to Make AJAX Requests