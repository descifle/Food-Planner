import { FOODS } from '../actions/types'

const INITIAL_OBJECT = {
    id: 'no-id',
    allCalories: 0,
    title: 'food',
    calories: 0
}

const foodsReducer = (state = [INITIAL_OBJECT], action) => {

    const removeDuplicates = (keyFn, array) => {
        let mySet = new Set()
        return array.filter((x) => {
            const key = keyFn(x), isNew = !mySet.has(key)
            if(isNew) mySet.add(key)
            return isNew
        })
    }
    
    

    if(action.type === FOODS) {
        const foods = [...state, ...action.payload]
        return removeDuplicates(food => food.id, foods)
    } else {
        return state
    }
}   

export default foodsReducer