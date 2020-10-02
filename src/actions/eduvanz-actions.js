import * as actionTypes from './action-types'
import store from "../store"

export function receivedData(data)
{
    return {
        data: data
    }

}

export function incrementalGuest() {
    return {
        type: actionTypes.INCREMENTAL_GUEST
    }
}

export function decrementalGuest() {
    return {
        type: actionTypes.DECREMENTAL_GUEST
    }
}

export function userDetails(data) {
    console.log('dataa ', data);
    return {
        type: actionTypes.INCREMENTAL_GUEST,
        user: data
    }
}

export function getUserDetailStatus()
{
    return (dispatch, getState) => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';

        fetch(url)
            .then((response) =>
                response.json().then(function(data) {
                    dispatch(userDetails(data));
                })
            )
    }
}