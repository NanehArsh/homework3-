
 const noInput =function (){
     return 5
	 };
 
 
 const ifElse =function(a,b){
    if ( a===b )
	{return 0}; 
	if (a>b) 
	{return 1};
	if (b>a)
	{return (-1)};
};

 
 const noReturn = function (n,m)
 {
     c = n+m ;
};
 
 
 const threeArguments = function(n, f, k)
 {
    return n+f*k ;};
	
 
 const multiplyArguments = function (l,m)
 {
 return l*m
 };
 
 
 
 const devideArguments = function(t,k)
 {
    return t/k;
 };

 
 
 const triangleArea = function (b,h)
 {
     Area = devideArguments(multiplyArguments(b,h),2)
	 return Area;
};

  
  
const numLength = function(m)
{
     const l = String(m)
	 return l.length;
};


const longestString = function( str1,str2, str3){
    if ( str1.length > str2.length && str1.length > str3.length) 
	{return str1};
	if (str2.length > str1.length && str2.length > str3.length)
	{return str1};
	if(str3.length > str2.length && str3.length > str1.length)
	{return str3};
};


const runStuff = function (str,a,b){
    if (str === "rectangle")
	{return a*b};
	if (str === "triangle")
	{return triangleArea(a,b)};
	if (str != "rectangle" && str != "triangle")
	{return -1};
};


const mySolution = function(str1,str2,num){
    const str3 =  str1 = str2;
	if (str3.length > num )
	{return 1}else
	{return -1};
};


	
	



 