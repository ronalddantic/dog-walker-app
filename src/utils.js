export const isNumber = (value) => {
	const validNumber = new RegExp(/^\d*\.?\d*$/);
	return validNumber.test(value)
}


export const array_set = (obj, is, value) => {
	if (typeof is == 'string')
		return array_set(obj, is.split('.'), value);
	else if (is && is.length === 1 && value !== undefined) {
		if (obj && is)
			return obj[is[0]] = value;
		return null
	} else if (is && is.length === 0)
		return obj;
	else if (is) {
		if (obj != null && !obj.hasOwnProperty(is[0]) && value !== undefined)
			obj[is[0]] = {};

		return obj && is ? array_set(obj[is[0]], is.slice(1), value) : null;
	}
};


export const array_delete = (obj, is) => {
	if (typeof is == 'string')
		return array_delete(obj, is.split('.'));
	else if (is && is.length === 1) {
		if (obj && is) {
			delete obj[is[0]]
		}
		return null
	} else if (is) {
		if (obj != null && !obj.hasOwnProperty(is[0])) {
			delete obj[is[0]];
		}
		return obj && is ? array_delete(obj[is[0]], is.slice(1)) : null;
	}
};

export const array_get = (object, is) => array_set(object, is);

export const array_has = (obj, key) => {
	return array_keys(obj, [], null, true).includes(key);
};

export const array_unique = a => {
	return [...new Set(a)];
}

export const array_keys = (obj, keys = [], parent, withParentKey = false) => {
	for (let k in obj) {
		let key = (parent ? parent + "." + k : k);
		let value = obj[k];
		if (value !== null && typeof value === "object") {
			if (withParentKey) keys.push(key);
			keys = keys.concat(array_keys(value, [], key, withParentKey));
		} else keys.push(key)
	}
	return keys;
};

export const array_values = (obj, values = []) => {
	let keys = array_keys(obj);
	keys.forEach(k => values.push({key: k, value: array_get(obj, k)}));
	return values;
}
