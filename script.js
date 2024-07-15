function indexOfIgnoreCase(str, subStr) {
  // write your code here
	str = str.toLowerCase();
	subStr = subStr.toLowerCase();
	if(!str.includes(subStr)){
		return -1;
	}
	return str.indexOf(subStr);
}

// Please do not change the code below
const str = prompt("Enter str:");
const subStr = prompt("Enter subStr:");
alert(indexOfIgnoreCase(str, subStr));
