// define a service for accessing USER data
//  GET / -> get API welcoming message
//  GET /users -> get all users (ADMIN only)
//  GET /users/{id} -> get 1 user (ADMIN or authenticated user)

import API_URL from './config.js'

function authHeader() {
    // checks Local Storage for user item
    let user = JSON.parse(localStorage.getItem('user'));

    // if there is a logged in user with accessToken (JWT)
    if (user && user.accessToken) {
        // return HTTP authorization header for Node.js Express back-end
        return {
            'Content-Type': 'application/json',
            'x-access-token': user.accessToken
        };
    } else {
        return { 'Content-Type': 'application/json' }; //otherwise, return an empty object
    }
}

export const TrophyService = {

    async fetchAllTrophies() {
        const response = await fetch(`${API_URL}/trophies`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch ALL USERS")
            // console.log(data)
            return data;
        }
        else
        {
            // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
            // console.log(response)
            throw Error(handleResponses(response.status));
        }
            
    },

    async CompleteTrophy (value) {
        const response = await fetch(`${API_URL}/trophies`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify({
                userId: value.userId,
                trophyId: value.trophyId
            })
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else
        {
            throw Error(handleResponses(response.status));
        }
    },
}

export default TrophyService;


function handleResponses(code) {
    let message = "";
    switch (code) {
        case 401:
            message = "Not allowed to executed this action!";
            break;
        case 403:
            message = "Forbidden access";
            break;
        default:
            message = "Unkown message";
            break;
    }
    return message;
}