function isNumb(obj) {
   return obj !== "undefined" && typeof(obj) === 'number' && !isNaN(obj);
}
let r0 = [];
if (isNumb(r0)) {
	return true;
}