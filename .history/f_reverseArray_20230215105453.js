const cities=["islamabad","sargodha","peshawar","sialkot"]

const reverseArray=(cities)=>
{
    const revcities=[]
    console.log(cities.length)
    let j=cities.length -1
    console.log(cities.length)
    for(let i=0;i<cities.length -1 ; i++){
        revcities[j]=cities[0]
        j--
    }
console.log(revcities)
}

reverseArray(cities)