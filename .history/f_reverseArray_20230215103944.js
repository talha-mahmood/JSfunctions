const cities=["islamabad","sargodha","peshawar","sialkot"]

const reverseArray=(cities)=>
{
const revcities=[]
for(let i=cities.length -1;i<=0;i--){
    for(let j=0;i<cities.length;i++)
     revcities[i]=cities[j];
}
console.log(revcities)
}

reverseArray(cities)