const User = require('../models/User');

module.exports.register = async (req,res) => {

    try{
        const user = await User.findOne({email: req.body.email});
        if(user){
            console.log(`${req.body.email}:user already exists`);
            return res.json({succes: false, message: "Account already exist"});
        }
        else {
            await User.create({username:req.body.username, name: req.body.name, email:req.body.email, password:req.body.password});
            console.log(`new user created :${req.body.email}`);
            return res.json({succes: true,message:"Account Created Login with the same Credentials"});
        }
    }
    catch(error) {
        console.log(`error : `,error);
        return res.json({succes: false,message:`Some Error occured`});
    }
}
    //  let user = new User({
    //     username: req.body.username,
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    //  })

    //  user.save()
    //  .then(user =>{
    //     res.json({
    //         message: "User Added Successfully"
    //     })
    //  })
    //  .catch(error => {
    //     res.json({
    //         message: "An error Occured!"
    //     })
    //  })
// }
