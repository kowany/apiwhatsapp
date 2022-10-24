const VerifyToken = (req, res) => {
    try {
        const accessToken = 'RTQLMLS998054KLIRWR6S88521FSFSL';
        const token = req.query('hub.verify_token');
        const challenge = req.body["hub.challenge"];

        if (challenge != null && token != null && token == accessToken) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }
    } catch (e) {
      res.status(400).send();
    }
}

const RecieveMessage = (req, res) => {
    res.send('hola recieve message');
}

module.exports = {
    VerifyToken,
    RecieveMessage
}
