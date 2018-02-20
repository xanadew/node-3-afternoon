const express=require('express');
const bodyParser=require('body-parser');
const session=require('express-session');
require('dotenv').config();
const checkForSession=require('./middlewares/checkForSession');
const swag_controllers=require('./controllers/swag_controllers');
const auth_controller=require('./controllers/auth_controller');
const cart_controller=require('./controllers/cart_controller');
const search_controller=require('./controllers/search_controller');

const app=express();

app.use(bodyParser.json());
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true
}));
app.use(checkForSession);

app.get('/api/swag',swag_controllers.read);

app.post('/api/login',auth_controller.login);
app.post('/api/register',auth_controller.register);
app.post('/api/signout',auth_controller.signout);
app.get('/api/user',auth_controller.getUser);

app.post('/api/cart',cart_controller.add);
app.post('/api/cart/checkout',cart_controller.checkout);
app.delete('/api/cart',cart_controller.delete);

app.get('/api/search',search_controller.search);


const port=process.env.PORT||9000;
app.listen(port,()=>{console.log(`ITS OVER ${port}`)})