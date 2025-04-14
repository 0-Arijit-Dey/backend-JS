// using Promise

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise
    .resolve(requestHandler(req, res, next))
    .catch((err) => next(err));
  };
};




export { asyncHandler };







/*

// useing async, await

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      sucess: false,
      message: err.message,
    });
  }
};

*/
