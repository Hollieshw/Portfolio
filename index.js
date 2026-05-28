const path = require('path');
const express = require('express');

const app = express();
//have node serve the static files from the react app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//handle get reqs to the api/route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

//get reqs not handles by the api will be handled by react router
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


//start up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    console.log('press ctrl + c to stop the server');
});