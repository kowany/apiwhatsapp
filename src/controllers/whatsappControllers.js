const VerifyToken = (req, res) => {
    res.send('hola verify token');
}

const RecieveMessage = (req, res) => {
    res.send('hola recieve message');
}

module.exports = {
    VerifyToken,
    RecieveMessage
}
