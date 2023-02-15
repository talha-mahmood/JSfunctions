const cities=["islamabad","sargodha","peshawar","sialkot"]

const reverseArray=(cities)=>
{
    const revcities=[]
    let j=cities.length 
    console.log(j)
    for(let i=0;i<cities.length  ; i++){
        j--
        revcities[j]=cities[i]
        
    }
console.log(revcities)
}

reverseArray(cities)