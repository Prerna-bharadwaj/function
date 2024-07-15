function reversenumber(num)
{
	num = num + "";
	return num.split("").reverse().join("");
}
console.log(Number(reversenumber(32243)));
