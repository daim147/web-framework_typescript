import express from 'express';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import './controllers/RootController';
import { AppRouter } from './AppRouter';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['Daim '] }));
app.use(AppRouter.Instance);
app.listen(3000, () => {
	console.log('Listening on 3000');
});
