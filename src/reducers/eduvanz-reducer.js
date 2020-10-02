import * as actionType from '../actions/action-types';

const initialState = {
    guest: 0,
    userDetails: [
        {
            "id": 1,
            "full_name": "Chrisse",
            "dob": "3/22/2020",
            "guest": "2",
            "profession": "Employed",
            "locality": "Batou",
            "address": "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016\n"
        },
        {
            "id": 2,
            "full_name": "Sagar",
            "dob": "3/22/2020",
            "guest": "1",
            "profession": "Employed",
            "locality": "Batou",
            "address": "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016\n"
        },
        {
            "id": 3,
            "full_name": "Yanshul",
            "dob": "3/22/2020",
            "guest": "1",
            "profession": "Employed",
            "locality": "Batou",
            "address": "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016\n"
        },
        {
            "id": 4,
            "full_name": "Akhil",
            "dob": "3/22/2020",
            "guest": "2",
            "profession": "Employed",
            "locality": "Batou",
            "address": "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016\n"
        },
        {
            "id": 5,
            "full_name": "Pranay",
            "dob": "3/22/2020",
            "guest": "1",
            "profession": "Employed",
            "locality": "Batou",
            "address": "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016\n"
        },
    ]

};


const eduvanzReducer = function (state = initialState, action) {
    switch (action.type) {
        case actionType.INCREMENTAL_GUEST:
            return Object.assign({}, state, {guest: state.guest + 1});
        case actionType.DECREMENTAL_GUEST:
            return Object.assign({}, state, {guest: state.guest - 1});
        case actionType.GET_USER_DATA:
            return Object.assign({}, state, {});
    }

    return state
};

export default eduvanzReducer;
