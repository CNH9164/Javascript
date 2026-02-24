let score = 44
let res = "abx"
let isLoggedIn=1;
console.log(typeof score)
console.log(typeof res)


/*Number is used to convert the strings into numbers but there is a problem when  the convertion happens the problem is 
after convertion when we check with typeof we get as number but when we check what the actal number is then we get NaN so it always prefered to check */
let a=Number(res) 
console.log(typeof a)
console.log(a)

let b=String(score)
console.log(typeof b)
console.log(b)

let c=Boolean(isLoggedIn)
console.log(c)

//1=>true
//" "=>false
//"Vishnu"=true
//44=true