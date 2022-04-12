import 'reflect-metadata';
import { MetaDataKeys } from '../../MetaDataKeys';

export function bodyValidator(...validators: string[]) {
	return function (target: any, key: string, desc: PropertyDescriptor) {
		Reflect.defineMetadata(MetaDataKeys.validator, validators, target, key);
	};
}
