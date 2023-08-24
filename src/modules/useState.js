export default function useState(initialState){
    var currentState = initialState
    function setState(callback) {
        currentState = callback(currentState)
    }
    return [currentState,setState]
}