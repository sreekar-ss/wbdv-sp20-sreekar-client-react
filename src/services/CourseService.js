

import {API_URL} from "../components/common/constants";

export const createCourse = async (course) =>
{

    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteCourse = async (courseId) => {
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const findAllCourses = () => {
    return fetch(API_URL)
        .then(response => response.json())
}



