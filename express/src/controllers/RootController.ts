import { NextFunction, Request, Response } from 'express';
import { controller, get, use } from './decorators';
function handleOAuth(req: Request, res: Response, next: NextFunction) {
	if (req.session?.login) {
		next();
		return;
	}
	res.status(403).redirect('/');
}
('integration');
@controller('')
class RootController {
	@get('/')
	getRoot(req: Request, res: Response) {
		if (req.session?.login) {
			res.send(`
          <div>
            <h2>Your are Logged In</h2>
             <p>Click to logout: <a href ="/auth/logout">LogOut</a></p>
          </div>
        `);
		} else {
			res.send(`
          <div>
            <h2>Your are not Logged In</h2>
             <p>Click to login: <a href ="/auth/login">LogIn</a></p>
          </div>
        `);
		}
	}
	@get('/protected')
	@use(handleOAuth)
	getProtected(req: Request, res: Response) {
		res.status(200).send(`
    <div><h2>Welcome, to the protected route your are logged In user</h2></div>
    `);
	}
}
