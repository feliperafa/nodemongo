exports.listAll = (req, res) => {
    const usuarios = [
    {
        nome: 'teste 01',
        email: 'teste@123.com'
    },
    {
       nome: 'teste 02',
       email: 'teste@123.com'
   },
   {
       nome: 'teste 03',
       email: 'teste@123.com'
   }   
]
res.send(usuarios)
   }

   exports.creatOne = (req, res) => {
    const response = {
        message: 'Usuario Cadastrado com Sucesso',
        data: req.body
    }
    res.status(201).json(response)
}