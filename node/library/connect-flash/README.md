
Install
$ npm install connect-flash

Usage 
file app.js
var flash = require('connect-flash');
var app = express();
app.use(express.cookieParser('keyboard cat'));
app.use(express.session({ cookie: { maxAge: 60000 }}));
app.use(flash()); 
app.use((req, res, next) => {
    res.locals.errors = req.flash("error");
    res.locals.successes = req.flash("success");
    next();
});
 using route 
app.get("/",  (req, res) => {
    res.render("index", req.flash('error', 'not file index') );
}); 
