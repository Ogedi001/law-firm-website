const express = require('express')
const path = require('path')

const app = express()
// Set the directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, "public", "home.html"));
})
app.listen(3000, () => {
    console.log('app is live at port 3000');
})