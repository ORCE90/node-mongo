const mongoose = require('mongoose');

mongoose.connect('mongodb://dev:***********!@cluster0-7gtng.mongodb.net:27017/videoteka', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then (res => {
    console.log(res);
})
.catch (err => {
    console.log(err);
})

const Cat = mongoose.model(
    'filmovi', 
        { 
            ime: String,
            godina: Date,
            zanr: [String],
            rezija: String,
            oskar: Boolean,
            akteri:[String],
        
        }
    );
    
    filmovi.find ((err, data) => {
        if(err) {
            console.log('ERROR!')
        }
        console.log(data);
    });


console.log('end');

