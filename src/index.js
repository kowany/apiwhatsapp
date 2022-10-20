// EAAFxPHA8E6IBAEERXBR6dq6hHA5wlSWtLUwJbvier7MI02c4lnJIDKXPbVwRFZA0zqpq6af3ZAPn2iDL15zAdIOxCbsgFisrj0jB1zmsB5PZB2VdH29HJrromNxxZBWvYu3ZAeCfHd2iXpl1jdqDYbTiZCZCR0119gF8AT1tJ2HvXTQcSp9kqoQ

const express = require('express');
const apiRoute = require('./routes/routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => console.log(`El puerto es ${PORT}`));