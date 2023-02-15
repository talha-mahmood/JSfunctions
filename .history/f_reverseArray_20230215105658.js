const cities=["islamabad","sargodha","peshawar","sialkot"]

const reverseArray=(cities)=>
{
    const revcities=[]
    console.log(cities.length)
    let j=cities.length 
    console.log(j)
    for(let i=0;i<cities.length -1 ; i++){
        j--
        revcities[j]=cities[i]
        
    }
console.log(revcities)
}

reverseArray(cities)