a=3;

const recurse =(a)=>
{
console.log(a)    
a++;
if(a==6)
return a 
else
recurse()
}
console.log(recurse(a))