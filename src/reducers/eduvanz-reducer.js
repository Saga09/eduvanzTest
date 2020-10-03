import * as actionType from '../actions/action-types';

const initialState = {
    guest: 0,
    userDetails: [
        {
            "id": 1,
            "full_name": "Con",
            "dob": "11/20/2000",
            "age": 30,
            "guest": 1,
            "profession": "Employed",
            "locality": "Mumbai",
            "address": "1PCZo1JCKiXLVTGDeTLHK8VRnDJxpdr47Q"
        },
        {
            "id": 2,
            "full_name": "Terrance",
            "dob": "9/11/1990",
            "age": 20,
            "guest": 1,
            "profession": "Employed",
            "locality": "Delhi",
            "address": "18fxdiAN1XSTfEy6msC7rBP4TvYzTmaubd"
        },
        {
            "id": 3,
            "full_name": "Lucais",
            "dob": "2/3/1990",
            "age": 15,
            "guest": 2,
            "profession": "Students",
            "locality": "Pune",
            "address": "1EhPi9utSmRVRPapmWkYRtbHKYT9Uvpy6v"
        },
        {
            "id": 4,
            "full_name": "Georgi",
            "dob": "8/9/1993",
            "age": 12,
            "guest": 1,
            "profession": "Employed",
            "locality": "Bangalore",
            "address": "1LEn7jTuBspm1Pq78bnAFgnRQMbtQFLeeU"
        },
        {
            "id": 5,
            "full_name": "Cathi",
            "dob": "4/19/1992",
            "age": 45,
            "guest": 1,
            "profession": "Employed",
            "locality": "Mumbai",
            "address": "1Ldo7treFd5Jh4drCeUmmhn8vQzhJkMkWJ"
        },
        {
            "id": 6,
            "full_name": "Employed",
            "dob": "5/8/1994",
            "age": 55,
            "guest": 2,
            "profession": "Employed",
            "locality": "Mumbai",
            "address": "1B3MxUme1jVL69opMnPkRVM7Y5KKdgCq38"
        },
        {
            "id": 7,
            "full_name": "Ailee",
            "dob": "5/22/1991",
            "age": 22,
            "guest": 2,
            "profession": "Students",
            "locality": "Delhi",
            "address": "1JhkoRmUBEjPKf95gxtf19MqxZLs8aMNmv"
        },
        {
            "id": 8,
            "full_name": "Kristen",
            "dob": "12/15/1992",
            "age": 68,
            "guest": 2,
            "profession": "Students",
            "locality": "Bangalore",
            "address": "1EjkqUB5PXJdTKLy3ahD9Zq6YVXscF8my8"
        },
        {
            "id": 9,
            "full_name": "Vaclav",
            "dob": "4/19/1991",
            "age": 19,
            "guest": 2,
            "profession": "Employed",
            "locality": "Mumbai",
            "address": "1FJvjzYrT8eeqZ9EceqocNgJywchibYrNP"
        },
        {
            "id": 10,
            "full_name": "Paulie",
            "dob": "9/13/1995",
            "age": 20,
            "guest": 1,
            "profession": "Employed",
            "locality": "Pune",
            "address": "1K5QA55BQJSJ51dHs2ypE8XVzaMriowFfY"
        }
    ],
    user: {}
};


const eduvanzReducer = function (state = initialState, action) {
    switch (action.type) {
        case actionType.INCREMENTAL_GUEST:
            return Object.assign({}, state, {guest: state.guest + 1});
        case actionType.DECREMENTAL_GUEST:
            return Object.assign({}, state, {guest: state.guest - 1});
        case actionType.GET_USER_DATA:
            return Object.assign({}, state, {user: action.user});
    }

    return state
};

export default eduvanzReducer;