import 'dotenv/config'
require('dotenv').config()

export const mongoURI = process.env.MONGO_URI;
export const secretOrKey = process.env.SECRET_OR_KEY;
export const port = process.env.PORT || 3600