require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET;
const UPLOAD_PRESET = process.env.UPLOAD_PRESET || 'ml_default';



module.exports = {
	PORT,
	MONGODB_URI,
	SECRET,
	UPLOAD_PRESET,
};
