```
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
```

Occured when trying to seed data. Related to .env file and MONGOURI. temporary Fix was to hardcode local host file into connect.js. Permanent fix unknown.

