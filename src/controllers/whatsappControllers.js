const VerifyToken = (req, res) => {
    // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];
  let verifyToken = "KEWLXSIUWRW5896217RZVNNCC";
  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === verifyToken) {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
    // try {
    //     const accessToken = 'RTQLMLS998054KLIRWR6S88521FSFSL';
    //     const token = req.query["hub.verify_token"];
    //     const challenge = req.query["hub.challenge"];

    //     if (challenge != null && token != null && token == accessToken) {
    //         res.send(challenge);
    //     } else {
    //         res.status(400).send();
    //     }
    // } catch (e) {
    //   res.status(400).send();
    // }
}

const RecieveMessage = (req, res) => {
    res.send('hola recieve message');
}

module.exports = {
    VerifyToken,
    RecieveMessage
}
