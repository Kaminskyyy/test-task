import 'dotenv/config'
import app from './app/app.js'

app.listen(process.env.PORT, () => {
	console.log("The server is up");
})