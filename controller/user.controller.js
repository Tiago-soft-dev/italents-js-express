const users = [{
    id: 1,
    nome: "Carlos"
},
    {
        id: 2,
    nome: "Marcos",
},
    {
    id: 3,
    nome: "Edir"
}]

//buscaUsuario
const find = (req, res) => {
    const id = req.params.id;
    let found = false;
    users.map(function(valor){
        if(valor.id == id) {
            found = true;
            return res.send(valor);
        }
    })
}

//buscaUsuarios
const findAllUsers = (req, res) => {
    send.res(users)
}

//criaUsuario
const createUser = (req, res) =>{
    const user = req.body;
    if(Object.keys(user).length === 0) {
        return res.status(400).send({message: "corpo da mensagem vazio"});
        }
    if(!user.id) {
        return res.status(400).send({message: "campo ID não encontrado"});
    }

    if(!user.name) {
        return res.status(400).send({message: "campo NOME não encontrado"});
    }

    users.push(user);
    res.status(201).send(users);
}

const updateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    let found = false;

    if(Object.keys(user).length === 0) {
        return res.status(400).send({message: "corpo da mensagem vazio"})
    }

    if(!user.id) {
        return res.status(400).send({message: "campo ID não encontrado"});
    }

    if(!user.name) {
        return res.status(400).send({message: "campo NOME não encontrado"})
    }

    users.map(function(valor, index){
        if(valor.id == id){
            found = true;
            users[index] = user;
            return res.send(user[index])
        }
    })

    if(!found){
        res.status(404).send({message: "não encontrado"})
    }
}

//deleteUser
const deleteUser = (req, res) =>{
  const id = req.params.id;
  let found = false;

    users.map(function(valor, index){
        if(valor.id == id) {
            found = true;
            users.splice(index, 1);
            return res.send(valor);
        }
    })
if(!found) {
    res.status(404).send({message: "não encontrado"});
}
}

module.exports = {
    find,
    findAllUsers,
    createUser,
    updateUser,
    deleteUser
}



