const cities=["islamabad","sargodha","peshawar","sialkot"]

const reverseArray=(cities)=>
{
    const revcities=[]
    let j=cities.length 
    for(let i=0;i<cities.length  ; i++){
        j--
        revcities[j]=cities[i]
        
    }
console.log(revcities)
}

reverseArray(cities)

const reverseArrayInPlace=(cities)=>
{
    
    let j=cities.length 
    for(let i=0;i<cities.length  ; i++){
        j--
        cities[j]=cities[i]
        
    }
console.log(revcities)
}

reverseArrayInPlace(cities)