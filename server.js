const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/angular-profile'));

// Link index.html of build folder with router.
app.get('/*', (req,res,next) => {
  res.sendFile(path.join(__dirname + '/dist/angular-profile/index.html'));
});


app.listen(process.env.PORT || 8000);
