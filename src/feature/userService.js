import axios from "axios";

const getUsers = async () => {
    console.log("getUsers");
    try {
        const response = await axios.get("http://localhost:5000/user/getUsers/");
        return response.data;
    } catch (error) {
        console.log("Error fetching users");
    }
}

const createAUser = async (data) => {
    console.log("createAUser");
    try {
        const response = await axios.post("http://localhost:5000/user/createAUser", data);
        return response.data;
    } catch (error) {
        console.log("Error creating the user");
    }
}

const updateAUser = async (data) => {
    console.log("updateAUser");
    try {
        const response = await axios.put(`http://localhost:5000/user/updateAUser/${data?.id}`, data);
        return response.data;
    } catch (error) {
        console.log("Error updating the user");
    }
}

const deleteAUser = async(id) => {
    console.log("deleteAUser");
    try {
        const response = await axios.delete(`http://localhost:5000/user/deleteAUser/${id}`);
        return response;
    } catch (error) {
        console.log("Error deleting the user");
    }
}

const userService = {
    getUsers,
    createAUser,
    updateAUser,
    deleteAUser
}

export default userService;