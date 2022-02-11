
let mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express')
const app = express()
const port = 3000
let user = require ('./models/Users')

//connection 
dotenv.config();
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()

user.create([{ name: 'amani', PhoneNumber: 321568552 },
{ name: 'zouhour', PhoneNumber: 99325123 },
{ name: 'oumaima', PhoneNumber: 3212555369 }], function(err, arrayOfPeople){
  if (err) { throw err; }
  console.log(arrayOfPeople);
})


app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})

//GetHome
app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

//GetRead
app.get('/users', function(req,res) {
  module.exports = new Database()
  user.find({}).then(doc => {
     res.send(doc)
     console.log('ok')
    })
    .catch(err => {
    console.error(err)
    })
})

//PostWrite
app.post('/users', function(req,res) {
  let NewUser = new user({ name: req.body.name, PhoneNumber: req.body.PhoneNumber});
  NewUser.save( function (err, data) {
  if (err) { throw err; }
  res.send(data);
  console.log('ko')
  });
})

//PutUpdateData
app.put('/users/:id', function(req,res) {
    user.findByIdAndUpdate({_id : req.params['id']},{name : "amoula"}, (err,data)=>{
      if (err) { throw err; }
      data.save
      res.send(data);
      console.log('ok')
  });
}) 

//DeleteDAta
app.delete('/users/:id', function(req,res) {
  user.findByIdAndRemove({_id : req.params['id']}, (err,data)=>{
    if (err) { throw err; }
    res.send(data);
    console.log('ok')
});
}) 