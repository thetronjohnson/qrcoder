const functions = require('firebase-functions');
const qr = require('qr-image');

exports.stringtoCode = functions.https.onRequest( async(req, res) => {
	const text = req.query.text;
	const qr_image = qr.imageSync(text,{type:'svg',size:'10'});
	res.status(200).send(`
		<html>
		<head><title>QR coder</title>
		    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
			<style type="text/css">
    		  .top{
      			  margin-top: 10rem;
     		 }
     		 .image{
     		 	margin-top:5rem;
     		 }
    		</style>
		</head>
		<body>
	 	<div class="container top d-flex justify-content-center">
		<h1>Your QR Code</h1>
		</div>
		<div class='image d-flex justify-content-center'>
		${qr_image}
		<div>
		</body>
		</html>
	`);
});