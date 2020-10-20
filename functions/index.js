const functions = require('firebase-functions');

exports.addMessage = functions.https.onRequest(	async (req,res) => {
	const text = req.query.text;
	const modifiedText = text.toUpperCase();
	res.json({'result':`${text} and ${modifiedText}`});
});