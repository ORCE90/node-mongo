const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dev:***********!@cluster0-7gtng.mongodb.net/school?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then (res => {
    console.log(res);
})
.catch (err => {
    console.log(err);
});

const Students = mongoose.model (
    'students',
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        average_grade: String,
        courses: [String],
        email: String,
        birthday: Date,
        _created: Date,
        _modified: Date,
    }),
)

var o = new Students ({
    first_name: "Orce",
    last_name: "Apostolovski",
    average_grade: "9",
    courses: ["HTML", "CSS", "NodeJS"],
    email: "apostolovski.orce@hotmail.com",
    birthday: new Date ('1990-09-16T05:00:00Z'),
    _created: new Date (),
    _modified: new Date (),
});

// o.save(err => {
//     if(err) {
//         console.log ('could not save klient');
//         return;
//     }
//     console.log('save successfull');
// });


Students.find ({}, (err, data) => {
    if(err){
        console.log('could not read data');
        return;
    }
    console.log(data);
});
