import { NextFunction, Request, RequestHandler, Response } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MetaDataKeys } from '../../MetaDataKeys';
import { Methods } from '../../Methods';

const bodyValidator =
	(keys: string[]): RequestHandler =>
	(req: Request, res: Response, next: NextFunction) => {
		if (!req.body) {
			res.status(422).send('Invalid Request');
			return;
		}
		for (let key of keys) {
			if (!req.body[key]) {
				res.status(422).send('Invalid Request');
				return;
			}
		}
		next();
	};

export function controller(pathPrefix: string) {
	const router = AppRouter.Instance;
	return function (target: Function) {
		for (let key in target.prototype) {
			//? Function to execute
			const routHandler = target.prototype[key];
			//? path when function to execute
			const path = Reflect.getMetadata(MetaDataKeys.path, target.prototype, key);
			//? method on path
			const method: Methods = Reflect.getMetadata(MetaDataKeys.method, target.prototype, key);
			//? middlewares on path
			const middlewares = Reflect.getMetadata(MetaDataKeys.middleware, target.prototype, key) || [];
			//? Validator for body
			const requiredBodyValidators =
				Reflect.getMetadata(MetaDataKeys.validator, target.prototype, key) || [];
			const validator = bodyValidator(requiredBodyValidators);
			if (path) {
				router[method](`${pathPrefix}${path}`, ...middlewares, validator, routHandler);
			}
		}
	};
}
