const functions = require('firebase-functions');
const qr = require('qr-image');

exports.stringtoCode = functions.https.onRequest( async(req, res) => {
	const text = req.query.text;
	const qr_image = qr.imageSync(text,{type:'png'});
	res.json({'svg':qr_image});
});