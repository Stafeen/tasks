process.env.MONGODB_URL = "mongodb+srv://Prasamsha12:devil12@cluster0-eshlg.mongodb.net/test?retryWrites=true&w=majority";
process.env.PORT = 3000;

console.log(`
configging -->
  MONGODB_URL: ${process.env.MONGODB_URL}
  PORT: ${process.env.PORT}
`);