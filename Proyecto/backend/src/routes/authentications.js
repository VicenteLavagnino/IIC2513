const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const router = new Router();

router.post('authentication.signup', '/signup', async (ctx) => {
  const authInfo = ctx.request.body;
  let user = await ctx.orm.User.findOne( {where: { mail: authInfo.email } });
  if (user) {
    ctx.body = `The user by the email '${authInfo.email}' already exists`;
    ctx.status = 400;
    return;
  } 

  try {
    user = await ctx.orm.User.create({
      username: authInfo.username,
      mail: authInfo.email,
      password: authInfo.password,
      name: authInfo.name,
      gender: authInfo.gender,
      age: authInfo.age,
      description: authInfo.description,
      photo: authInfo.photo,
      isAdmin: false
    });
  }
  catch (error) {
    ctx.body = { message: error.message, details: error };;
    ctx.status = 400;
    return;
  }

  const expirationSeconds = 1 * 60 * 60 * 24;
  const JWT_PRIVATE_KEY = process.env.JWT_SECRET;
  
  var token = jwt.sign(
    { scope: ['user', user.username] },
    JWT_PRIVATE_KEY,
    { subject: user.id.toString() },
    { expiresIn: expirationSeconds }
  );
    
  ctx.body = {
    'username': user.username,
    'email': user.mail,
    'access_token': token,
    'token_type': 'Bearer',
    'expires_in': expirationSeconds,
  };
  ctx.status = 201;
});

router.post('authentication.login', '/login', async (ctx) => {
  let user;
  const authInfo = ctx.request.body;
  try {
    user = await ctx.orm.User.findOne({where:{mail:authInfo.email}});
  }
  catch(error) {
    ctx.body = error;
    ctx.status = 400;
    return;
  }
  if (!user) {
    ctx.body = `The user by the email '${authInfo.email}' was not found`;
    ctx.status = 404;
    return;
  }
  if (!user.validPassword(authInfo.password)) {
    ctx.body = 'Incorrect password';
    ctx.status = 401;
    return;
  }

  const expirationSeconds = 1 * 60 * 60 * 24;
  const JWT_PRIVATE_KEY = process.env.JWT_SECRET;
  var token;
  if (user.isAdmin){
    token = jwt.sign(
      { scope: ['admin', 'user', user.username] },
      JWT_PRIVATE_KEY,
      { subject: user.id.toString() },
      { expiresIn: expirationSeconds }
    );
  } else{
    token = jwt.sign(
      { scope: ['user', user.username] },
      JWT_PRIVATE_KEY,
      { subject: user.id.toString() },
      { expiresIn: expirationSeconds }
    );
  }
    
  ctx.body = {
    'username': user.username,
    'email': user.mail,
    'access_token': token,
    'token_type': 'Bearer',
    'expires_in': expirationSeconds,
  };
  ctx.status = 200;

});

module.exports = router;
