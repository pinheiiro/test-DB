
// Middleware para checar se os campos obrigatórios estão preenchidos

function checkRecord(req, res, next) {
    const {name, age} = req.body;
    if (!name || !age) {
        res.status(404).json({message: 'Não é possível cadastrar'});
    } else {
        next();
    }
}

module.exports = checkRecord;