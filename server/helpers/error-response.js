let errorResponse = (statusCode, message) => {
  let type;
  switch (statusCode) {
    case 404:
      type = 'ZERO_RESULTS';
      break;
    case 400:
      type = 'INVALID_REQUEST';
  }

  return {
    error: {
          message: message ? `(${statusCode}) ${message}` : 'Undefined error',
          type: type ? type : 'ZERO_RESULTS',
          statusCode: statusCode ? statusCode : 0
        }
  };
};

module.exports = { errorResponse };
