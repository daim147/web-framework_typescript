import { NextFunction, Request, Response } from 'express';
import { controller, get, use, post, bodyValidator } from './decorators';

const logger = (req: Request, res: Response, next: NextFunction) => {
	console.log('Request Was made');
	next();
};

@controller('/auth')
class LoginController {
	@get('/login')
	@use(logger)
	getLogin(req: Request, res: Response) {
		res.send(`
      <form method="post">
        <div>
          <label>Email</label>
           <input name="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
	}
	@post('/login')
	@bodyValidator('email', 'password')
	postLogin(req: Request, res: Response) {
		const { email, password } = req.body;
		if (email && password && email.trim() === 'daim@gmail.com' && password.trim() === '12345') {
			req.session = { login: true };
			res.redirect('/');
			return;
		}
		res.send('Invalid Email or password');
	}
	@get('/logout')
	getlogout(req: Request, res: Response) {
		req.session = undefined;
		res.send(`
      <div>
      <h2>You are logged Out</h2>
      <p>Click to login: <a href ="/auth/login">LogIn</a></p>
      </div>
    `);
	}
}
