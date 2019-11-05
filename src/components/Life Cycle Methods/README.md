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
    static getDrivedStateFromError and componentDidCatch