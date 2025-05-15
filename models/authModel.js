const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    }
}, { timestamps: true });

// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    // console.log('user about to be created & saved', this);
    next();
});

//fire a function after doc saved to db
userSchema.post('save', function(doc, next) {
    console.log('new user was created & saved');
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;