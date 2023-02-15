a=3
const recurse =(a)=>
{
console.log(a)    
a++
if(a==6)
return 
else
recurse()
}
recurse(a)