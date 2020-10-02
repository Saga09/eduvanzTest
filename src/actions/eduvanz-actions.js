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
