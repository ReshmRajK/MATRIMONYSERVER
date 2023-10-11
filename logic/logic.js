const model = require('../models/model')

//Logic for Account Creation
const signUp = (req, res) => {

    const { username, contact, image, email, psw } = req.body
    model.users.findOne({ username, email }).then(user => {

        if (user) {
            res.status(404).json('Sorry User is already present')
        }

        else {
            var newUser = new model.users({
                username,
                contact,
                image,
                email,
                psw
            })
            newUser.save()
            res.status(200).json(newUser)
        }
    })

}

//Logic for Login
const login = (req, res) => {

    const { email, psw } = req.body
    model.users.findOne({ email, psw }).then(user => {

        if (user) {
            res.status(200).json({
                username: user.username,
                contact: user.contact,
                email: user.email
            })
        }

        else {
            res.status(404).json('Incorrect user name or password')
        }
    })

}

//Logic for Registration Form
const registration = (req, res) => {

    const { email, r_username, r_dob, r_gender, r_cast, r_father, r_mother, r_address, r_qualification, r_occupation, r_salary, r_contact, r_email, r_hobbies, r_image, r_description, ques_1, ques_2, ques_3, ques_4, ques_5, ques_6, ques_7, ques_8, ques_9, ques_10 } = req.body
    model.matrimonyprofiles.findOne({ r_username, r_email }).then(user => {

        if (user) {
            res.status(404).json('This applicant already registered')
        }

        else {
            var newRegistration = new model.matrimonyprofiles({
                email,
                r_username,
                r_dob,
                r_gender,
                r_cast,
                r_father,
                r_mother,
                r_address,
                r_qualification,
                r_occupation,
                r_salary,
                r_contact,
                r_email,
                r_hobbies,
                r_image,
                r_description,
                ques_1,
                ques_2,
                ques_3,
                ques_4,
                ques_5,
                ques_6,
                ques_7,
                ques_8,
                ques_9,
                ques_10
            })
            newRegistration.save()
            res.status(200).json(newRegistration)

        }

    })

}


//Profile view
const profileView = (req, res) => {

    const email = req.params
    model.users.findOne(email).then(user => {

        if (user) {
            res.status(200).json({
                username: user.username,
                contact: user.contact,
                image: user.image,
                email: user.email
            })
        }

        else {
            res.status(401).json("User not exist")
        }
    })

}


//Matrimony Registration Profile view
const detailsView = (req, res) => {

    const { email } = req.params
    model.matrimonyprofiles.findOne({ email }).then(user => {

        if (user) {
            res.status(200).json({
                r_username: user.r_username,
                r_dob: user.r_dob,
                r_cast: user.r_cast,
                r_father: user.r_father,
                r_mother: user.r_mother,
                r_address: user.r_address,
                r_qualification: user.r_qualification,
                r_occupation: user.r_occupation,
                r_salary: user.r_salary,
                r_hobbies: user.r_hobbies,
                r_image: user.r_image,
                r_contact: user.r_contact,
                r_email: user.r_email,
                r_description: user.r_description
            })

        }

        else {
            res.status(401).json("User not exist")
        }
    })

}

//View all Profile
const allProfileView = (req, res) => {

    const { email } = req.params
    model.matrimonyprofiles.find().then(user => {
        if (user) {
            res.json(user)
        }

        else {
            res.json("User not exist")
        }

    })

}



//Input field fill for edit profile
const editProfile = (req, res) => {

    const { email } = req.params
    model.matrimonyprofiles.findOne({ email }).then(user => {

        if (user) {
            res.status(200).json({
                r_address: user.r_address,
                r_contact: user.r_contact,
                r_email: user.r_email,
                r_occupation: user.r_occupation,
                r_salary: user.r_salary,
                r_image: user.r_image,
                r_description: user.r_description

            })
        }

        else {
            res.status(401).json("User not exist")
        }
    })

}


//Edit Profile
const editProfileView = (req, res) => {

    const { email } = req.params
    const { r_address, r_contact, r_email, r_occupation, r_salary, r_image, r_description } = req.body
    model.matrimonyprofiles.findOne({ email }).then(user => {

        if (user) {
            user.r_address = r_address
            user.r_contact = r_contact
            user.r_email = r_email
            user.r_occupation = r_occupation
            user.r_salary = r_salary
            user.r_image = r_image
            user.r_description = r_description

            user.save()
            res.json(user)
        }

        else {
            res.status(404).json('User not Exist')
        }
    })

}

//Single Page View
const singleProfileView = (req, res) => {

    const { r_email } = req.params
    model.matrimonyprofiles.findOne({ r_email }).then(user => {

        if (user) {
            res.status(200).json({
                r_username: user.r_username,
                r_father: user.r_father,
                r_mother: user.r_mother,
                r_qualification: user.r_qualification,
                r_occupation: user.r_occupation,
                r_address: user.r_address,
                r_email: user.r_email,
                r_hobbies: user.r_hobbies,
                r_image: user.r_image,
                ques_1: user.ques_1,
                ques_2: user.ques_2,
                ques_3: user.ques_3,
                ques_4: user.ques_4,
                ques_5: user.ques_5,
                ques_6: user.ques_6,
                ques_7: user.ques_7,
                ques_8: user.ques_8,
                ques_9: user.ques_9,
                ques_10: user.ques_10
            })

        }
        else {
            res.status(401).json("User not exist")
        }
    })

}


const adminRegistration=(req,res)=>{
    const {adminName,psw}=req.body
    model.admins.findOne({adminName}).then(admin=>{
        if(admin){
            res.status(401).json(adminName)
        }
        else{
            var newAdmin=new model.admins({
                adminName,
                psw
            })
            newAdmin.save()
            res.status(200).json(newAdmin)
        }
    })
}

//Admin login

const adminLogin = (req, res) => {

    const { adminName, psw } = req.body
    model.admins.findOne({ adminName, psw }).then(admin => {

        if (admin) {
            res.status(200).json({
                adminName: admin.adminName
            })
        }

        else {
            res.status(404).json('Incorrect user name or password')
        }
    })

}


const deleteProfile=(req,res)=>{
    const r_email=req.params
    model.matrimonyprofiles.deleteOne(r_email).then(user=>{
        if(user){
            res.status(200).json("Delete profile successfully")
        }
        else{
            res.status(401).json("Profile not deleted")
        }
    })

}



module.exports = {
    signUp, login, registration, profileView, detailsView, allProfileView,
    editProfile, editProfileView, singleProfileView, adminLogin,
    adminRegistration,deleteProfile
}




