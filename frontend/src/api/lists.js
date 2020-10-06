const API_URL = "http://127.0.0.1:8000/api";

export const getLists = async () => {
    const response = await fetch(`${API_URL}/lists`);
    return await response.json();
};

export const createList = async (title) => {
    const response = await fetch(`${API_URL}/list`, {
        method: "POST",
        body: { title },
    });
    return await response.json();
};
export const updateList = async (id, title) => {
    const response = await fetch(`${API_URL}/list/${id}`, {
        method: "PUT",
        body: { title },
    });
    return await response.json();
};
export const deleteList = async (id) => {
    const response = await fetch(`${API_URL}/list/${id}`, {
        method: "DELETE",
    });
    return await response.json();
};
