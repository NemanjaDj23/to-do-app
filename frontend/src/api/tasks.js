const API_URL = "http://127.0.0.1:8000/api";

export const getTasks = async () => {
    const response = await fetch(`${API_URL}/tasks`);
    return await response.json();
};

export const createTask = async (task) => {
    const response = await fetch(`${API_URL}/task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    return await response.json();
};
export const updateTask = async (id, task) => {
    const response = await fetch(`${API_URL}/task/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    return await response.json();
};
export const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}/task/${id}`, {
        method: "DELETE",
    });
    return await response.json();
};
