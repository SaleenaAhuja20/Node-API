const register = function(username){
    console.log(`user ${username} has been registered`);
}
const login = function(username, password){
    console.log(`user ${username} has logged in`);
}

module.exports = {
    register: register,
    login: login
}