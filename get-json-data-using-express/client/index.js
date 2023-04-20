// run this using node index.js command.

var users

async function getUsers(){
    const getUsers = await fetch("http://localhost:3001");
    users = await getUsers.json();
}

async function run(){
    await getUsers();
    console.log(users);
}
run()

