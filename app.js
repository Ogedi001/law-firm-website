const express = require('express')
const path = require('path')

const app = express()
console.log(express.static(path.join(__dirname, "html")));
// Set the directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
   res.sendFile(path.join(__dirname, "html", "home.html"));
})
app.listen(3000, () => {
    console.log('app is live at port 3000');
})