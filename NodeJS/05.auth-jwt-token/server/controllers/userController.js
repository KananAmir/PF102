const User = require("../models/userSchema")

const getAllUsers = async (req, res) => {
 
    try {

        const users = await User.find({})
        res.status(200).json({
            message: "Success",
            data: users,
       
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            message: "Success",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const deletedUser = await User.findByIdAndDelete(id)

       if(!deletedUser){
           return res.status(404).json({
               message: "User not found"
           })
         }
        res.status(200).json({
            message: "Successfully Deleted!",
            deletedUser,
        })

    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

// const postCategory = async (req, res) => {
//     try {
//         const newCategory = new Category({ ...req.body })

//         await newCategory.save()
//         console.log(newCategory);

//         res.status(201).json({
//             message: "Category Created",
//             data: newCategory
//         })

//     } catch (error) {
//         res.status(500).json({
//             message: "Error",
//             error: error
//         })
//     }
// }

const editUser = async (req, res) => {
    const { id } = req.params

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { ...req.body })


        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            message: "User Updated",
            data: updatedUser
        })

    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}


module.exports = {
   getAllUsers,
    getUserById,
    deleteUser,
    editUser
}