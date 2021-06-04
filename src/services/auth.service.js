/*
The service provides three important methods with the help of FETCH 
for HTTP requests & reponses:
    login(): POST {username, password} & save JWT to Local Storage
    logout(): remove JWT from Local Storage
    register(): POST {username, email, password} 
*/

// import axios from 'axios';
// const API_URL = 'http://localhost:8080/api/';
import API_URL from './config.js'

export const AuthService = {
    async login(user) { // payload = user (username + password)
        const response = await fetch(`${API_URL}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            })
        });
        if (response.ok) {
            const data = await response.json();
            // console.log("LOGIN SERVICE OK")
            console.log(data)
            if (data.accessToken)
                localStorage.setItem('user', JSON.stringify(data));
            return data;
        } else {
            throw Error(handleResponses(response.status));
        }
    },

    async logout() {
        localStorage.removeItem('user');
    },

    async register(user) {
        const response = await fetch(`${API_URL}/home/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
                name: user.name,
                birthDate: user.birthDate,
                course: user.course,
                level: user.level,
                photo: user.photo,
                doneActivities: user.doneActivities,
                points: user.points,
                typeId: user.typeId
            })
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(handleResponses(response.status));
        }
    }
}


function handleResponses(code) {
    let message = "";
    switch (code) {
        case 400:
            message = "Username already exists.";
            break;
        case 401:
            message = "Wrong credentials";
            break;
        case 404:
            message = "User not found";
            break;
        default:
            message = "Unkown message";
            break;
    }
    return message;
}

export default AuthService;