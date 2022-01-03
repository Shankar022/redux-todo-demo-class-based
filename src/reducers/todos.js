

const todos = (state=[], action) => {
    // write Reducers to handle the actions.
    switch (action.type) {
        case 'ADD_TODO':
            const newItem = {
                id: action.id,
                text: action.text
            }
            // state = state.slice();
            // state.push(newItem);
            return [...state,newItem]

        case 'TOGGLE_TODO':
            return state.map((todo, id) =>
                    id === action.id
                        ? {...todo, completed: true}
                        : {...todo}
                )



            // const updatedArray = list.map(
            // ({id,...item}) => ({...item, active: id === ID ? true:false,id:id}))

            // return  state.map((todo,id) =>
            //     id === action.id
            //         ? {...todo, completed: true}
            //         : {...todo, completed: false})
        default: {
            return state
        }
    }
}

export default todos