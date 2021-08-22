// https://www.codegrepper.com/code-examples/javascript/format+bytes+javascript
export const memoryUnitFormatter = (x) => {
	const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    let l = 0;
    let n = parseInt(x) || 0;
	while (n >= 1024 && ++l) {
		n /= 1024;
    }
    
    return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
