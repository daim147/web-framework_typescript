import 'reflect-metadata';
import { MetaDataKeys } from '../../MetaDataKeys';
import { Methods } from '../../Methods';
import { RequestHandler } from 'express';
interface RouteHandlerDescriptor extends PropertyDescriptor {
	value?: RequestHandler;
}
function routeBinder(method: string) {
	return function (path: string) {
		return function (target: any, key: string, desc: RouteHandlerDescriptor) {
			Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
			Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
		};
	};
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.delete);
export const patch = routeBinder(Methods.patch);
