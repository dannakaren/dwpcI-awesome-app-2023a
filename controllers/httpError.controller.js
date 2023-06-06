import httpStatus from 'http-status';

export const httpErr = (req, res) => {
  res.status(httpStatus.NOT_FOUND).render('error', {
    layout: false,
    docTitle: 'Error'
  });
};


