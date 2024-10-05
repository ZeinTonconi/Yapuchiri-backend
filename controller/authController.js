
const login = (req, res) => {
    res.status(200).send({
        msg: "POST LOGIN"
    })
}

module.exports = {
    login
}