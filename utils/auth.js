const withAuth = (req,res,next) => {
    console.log('here');
    if(!req.expresssession.loggedin){
        res.redirect('/user-login')
    } else{
        next()
    }
};

module.exports = withAuth;