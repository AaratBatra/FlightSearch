require('dotenv').config();
dbPassword = process.env.MONGODB_URI;

module.exports = {
    mongoURI: dbPassword
};
