const cities=["islamabad","sargodha","peshawar","sialkot"]

const reverseArray=(cities)=>
{
    const revcities=[]
    console.log(cities.length)
    let j=cities.length -1
    console.log(j)
    for(let i=0;i<cities.length -1 ; i++){
        revcities[j]=cities[i]
        j--
    }
console.log(revcities)
}

reverseArray(cities)