const mongoose = require('mongoose')
const users = new mongoose.model('users', {
    username: String,
    contact: Number,
    image: String,
    email: String,
    psw: String
})

const matrimonyprofiles = new mongoose.model('matrimonyprofiles', {
    email: String,
    r_username: String,
    r_dob: String,
    r_gender: String,
    r_cast: String,
    r_father: String,
    r_mother: String,
    r_address: String,
    r_qualification: String,
    r_occupation: String,
    r_salary: Number,
    r_contact: String,
    r_email: String,
    r_hobbies: String,
    r_image: String,
    r_description: String,
    ques_1: String,
    ques_2: String,
    ques_3: String,
    ques_4: String,
    ques_5: String,
    ques_6: String,
    ques_7: String,
    ques_8: String,
    ques_9: String,
    ques_10: String

})

const admins=new mongoose.model('admins',{
    adminName:String,
    psw:String

})

module.exports = {
    users, matrimonyprofiles,admins
   
}