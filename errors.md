```
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
```

Occured when trying to seed data. Related to .env file and MONGOURI. temporary Fix was to hardcode local host file into connect.js. Permanent fix unknown.


Not an Error but worth saving:
```
// router.post('/:userId', (req, res)=>{
//     User.findById(req.params.userId).then((user)=>{
//         console.log(user)
//         Transactions.create(req.body).then((transaction)=>{user.transactions.push(transaction._id)})
//         .then(()=>{user.save()}).then(()=>user.populate("transactions"))
        
//     })
// })
```
