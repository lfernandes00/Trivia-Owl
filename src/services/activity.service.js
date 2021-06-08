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

export const ActivityService = {
    async fetchOneActivityByID(id) {
        const response = await fetch(`${API_URL}/activities/${id}`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("ACTIVITY SERVICE - fetch 1 ACTIVITY")
            console.log(data)
            return data;
        }
        else {
            // console.log("ACTIVITY SERVICE - fetch 1 ACTIVITY")
            // console.log(response)
            throw Error(handleResponses(response.status));
        }
    },

    async fetchAllActivities() {
        // console.log(" USER SERVICE - fetch ALL USERS started...")
        // return axios.get(API_URL + 'admin', { headers: authHeader() });
        const response = await fetch(`${API_URL}/activities`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch ALL USERS")
            // console.log(data)
            return data;
        }
        else {
            // console.log("USER SERVICE - fetch ALL USERS: ERROR ");
            // console.log(response)
            throw Error(handleResponses(response.status));
        }

    },

    async AddLike(like) {
        const response = await fetch(`${API_URL}/activities/${like.activityId}`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify({
                userId: like.userId
            })
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw Error(handleResponses(response.status));
        }
    },

    async RemoveLike(like) {
        const response = await fetch(`${API_URL}/activities/${like.activityId}`, {
            method: "DELETE",
            headers: authHeader(),
            body: JSON.stringify({
                userId: like.userId
            })
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw Error(handleResponses(response.status));
        }
    },

    async AddScore(score) {
        const response = await fetch(`${API_URL}/activities/${score.activityId}/questions`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify({
                userId: score.userId,
                score: score.score
            })
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw Error(handleResponses(response.status));
        }
    },

    async UpdateUser(value) {
        console.log(value)
        const response = await fetch(`${API_URL}/activities/${value.activityId}/questions`, {
            method: "PATCH",
            headers: authHeader(),
            body: JSON.stringify({
                userId: value.userId,
                doneActivities: value.doneActivities,
                points: value.points
            })
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw Error(handleResponses(response.status));
        }
    },

    async CreateActivity(activity) {
        const response = await fetch(`${API_URL}/activities/add`, {
            method: "POST",
            headers: authHeader(),
            body: JSON.stringify({
                name: activity.name,
                course: activity.course,
                subject: activity.subject,
                points: activity.points,
                level: activity.level,
                type: activity.type,
                photo: activity.photo,
                desc: activity.desc,
                question1: activity.question1,
                question2: activity.question2,
                question3: activity.question3,
                question4: activity.question4,
                question5: activity.question5,
                pending: activity.pending
            })
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw Error(handleResponses(response.status));
        }
    },

    async fetchActivityClassification(id) {
        const response = await fetch(`${API_URL}/activities/${id}/classification`, {
            method: "GET",
            headers: authHeader()
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("ACTIVITY SERVICE - fetch 1 ACTIVITY")
            // console.log(data)
            return data;
        }
        else {
            // console.log("ACTIVITY SERVICE - fetch 1 ACTIVITY")
            // console.log(response)
            throw Error(handleResponses(response.status));
        }
    },

    // sends request to API root
    async getPublicContent() {
        // return axios.get(API_URL);
        const response = await fetch(`${API_URL}`, {
            method: "GET" // requires NO authorization header
        });
        if (response.ok) {
            let data = await response.json();
            // console.log("USER SERVICE - fetch WELCOMING MESSAGE")
            // console.log(data) // data = "Welcome to the TUTORIALS api"
            return data;
        }
        else
            throw Error(handleResponses(response.status));
    }
}

export default ActivityService;


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