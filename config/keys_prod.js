module.exports = {
NODE_ENV: process.env.NODE_ENV,
PORT=process.env.PORT,

MONGO_URI : process.env.MONGO_URI,

JWT_SECRET:process.env.JWT_SECRET,
JWT_EXPIRE:process.env.JWT_EXPIRE,
JWT_COOKIE_EXPIRE:process.env.JWT_COOKIE_EXPIRE,

SMTP_HOST : process.env.SMTP_HOST,
SMTP_PORT: process.env.SMTP_PORT,
SMTP_EMAIL: process.env.SMTP_EMAIL,
SMTP_PASSWORD: process.env.SMTP_PASSWORD,
FROM_EMAIL: process.env.FROM_EMAIL,
FROM_NAME:process.env.FROM_NAME

}