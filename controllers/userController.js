const { User } = require("../models");

const getProfile = async (req, res) => {
    try{
        const id = req.user.id;

        const user = await User.findByPk(id, {
            attributes: ['id', 'email', 'nama', 'nip'],
        })

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            message: "Profile found",
            data: user
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getProfile};