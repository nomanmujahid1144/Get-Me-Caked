const ErrorResponse = require('../utils/errorResponse');
const { uploadImage } = require('../helpers/helpers');
const HeaderImage = require('../models/HeaderImage');
const mongoose = require('mongoose');



exports.AddHeaderImage = async (req, res, next) => {
  try {

    let body = req.body;

    if (req.files) {
      if (req.files.headerPhoto) {
        const coverPhotoUploaded = await uploadImage(
          req.files.headerPhoto,
          next
        );
        body.headerPhoto = coverPhotoUploaded.photoPath;
      }
      if (req.files.sliderPhoto) {
        const secondPhotoUploaded = await uploadImage(
          req.files.sliderPhoto,
          next
        );
        body.sliderPhoto = secondPhotoUploaded.photoPath;
      }
    }

    const findImage = await HeaderImage.find({})

    let headerImg;

    if (findImage.length != 0) {
      headerImg = await HeaderImage.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(findImage[0]._id) }, body)
    } else {
      const images = new HeaderImage({
        headerPhoto: body.headerPhoto,
        sliderPhoto: body.sliderPhoto
      });

      headerImg = images.save();
    }


    if (!headerImg) {
      return next(new ErrorResponse("add Header Images failed", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Added",
      data: headerImg,
    });

  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};

exports.GetHeaderImage = async (req, res, next) => {

  try {
    const headerImg = await HeaderImage.find({})

    if (!headerImg) {
      return next(new ErrorResponse("add Header Images failed", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Added",
      data: headerImg,
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
