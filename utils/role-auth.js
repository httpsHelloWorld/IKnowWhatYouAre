const roleAuth = (req,res,next) => {
    if(req.session.rold_id !== 1){
        alert('You are not authorized to login.');
        res.redirect('/dashboard')
    } else{
        next()
    }
};

module.exports = roleAuth;