export const addToUsers = (user) => {
    return {
        type: "ADD",
        payload: user
    }
}

export const authToggle = () => {
    return {
        type: "AUTH_TOGGLE",
    }
}
