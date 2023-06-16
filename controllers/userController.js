const getAllUsers = async(req,res)=>{
    res.send('get All users route');
}

const getSingleUser = async(req,res)=>{
    res.send('get Single user route');
}

const showCurrentUser = async(req,res)=>{
    res.send('show Current user route');
}
const updateUser = async(req,res)=>{
    res.send('update user route');
}

const updateUserPassword = async(req,res)=>{
    res.send('Update User password route');
}


module.exports = {
    getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword,
}