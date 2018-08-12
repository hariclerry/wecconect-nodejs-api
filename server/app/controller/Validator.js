
class Validator {
    static validateSignup (req, res, next) {
        req.checkBody('firstName', 'Please supllied a valid first name')
        .notEmpty()
        .isLength({ min: 1 });

        if (!req.validationErrors()) {
            return next();
          }
          return req.getValidationResult()
            .then(result => res.status(400).json({ validation: false, result: result.mapped() }));
    }

};

export default Validator;