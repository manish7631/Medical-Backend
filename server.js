
const app = require("./src/index")
const connect = require("./src/configs/db")
const port = process.env.PORT || 8000;
app.listen(port, async() => {
    try {
        await connect();
      } catch (err) {
        console.error(err.message);
      }
      console.log(`listening on port ${port}`);
})