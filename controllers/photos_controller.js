var mongoose = require('mongoose'),
	Photo = mongoose.model('Photo');
exports.getPhoto = function (req ,res ){
	Photo.findOne({name : req.query.photoName})
		.exec(function (err ,photo){
			if(!photo){
				res.json(404 ,{msg : 'Photo Not Found'});
			}else{
				res.json(photo);
			}
		});
};
exports.getPhotos = function (req ,res ){
	Photo.find()
		.exec(function (err ,photos){
			if(!photos){
				res.json(404 ,{msg : 'Photos Not Found'});
			}else{
				res.json(photos);
			}
		});
};