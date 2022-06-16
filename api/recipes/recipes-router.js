const router = require('express').Router();

router.use('*', (request, response, next) => {
    next({ status: 404, message: 'That URL was not found.' });
});

router.use((error, request, response, next) => {
    response.status(error.status || 500).json({
        message: error.message || 'An error occurred within the recipes router.',
        stack: error.stack
    });
});

module.exports = router;