let express = require("express");
let app = express();
let multer = require("multer");
let cors = require("cors");
app.use(cors());

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads");
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

var upload = multer({ storage }).single("file");

app.post("/upload", (req, res) => {
	upload(req, res, (err) => {
		if (err instanceof multer.MulterError || err) {
			return res.status(500).json(err);
		}
		return res.status(200).send(req.file);
	});
});

app.listen(8000, () => {
	console.log("App running on port 8000");
});