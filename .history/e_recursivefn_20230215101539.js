a=3;

const recurse =(a)=>
{
a++;
console.log(a) 
 if(a==4)
 return 
 else
 recurse()
}
recurse(a)