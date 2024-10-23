let count = 0;
function increment() {
    count++;
}

function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

function updateUser(user) {
    user.name = "Updated Name";
}

const fs = require('fs');

function writeToFile(data) {
    fs.writeFileSync('data.txt', data);
}