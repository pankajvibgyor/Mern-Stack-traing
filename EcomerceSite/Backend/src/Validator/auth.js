const {check,validationResult}=require('express-validator')
exports.validateSignUpRequest=[
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('email')
    .isEmail()
    .withMessage('email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('password is required')
];
exports.validateSignInRequest=[
      check('email')
    .isEmail()
    .withMessage('email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('password is required')
];

exports.isRquestValidated=(req,res,next)=>{
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (errors.array().length>0) {
      return res.status(400).json({ errors: errors.array()[0].msg});
      
    }
next()
}
