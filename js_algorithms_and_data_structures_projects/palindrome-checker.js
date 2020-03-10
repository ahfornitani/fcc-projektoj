function palindrome(str) {  // Good luck!  
    let checkStr = '';
    str = str.replace(/\\W/g, '');
    str = str.replace(/_/, '');
    str = str.replace(/,/, '');
    str = str.toLowerCase();
    checkStr = [...str].reverse().join('');

    if (checkStr == str) {
        console.log(`${str} is a palindrome`);
	return true;
    }
    else {
	console.log(`${str} is not a palindrome`);
        return false;
    }
}
palindrome("eye");
palindrome("popeye");
