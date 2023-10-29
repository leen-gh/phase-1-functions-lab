// Code your solution in this file!\
function distanceFromHqInBlocks(loco){
    //let blocks = loco.match(/\d/g)
    if (loco > 42)
        return (loco - 42)
    else
        return (42 - loco)
}
function distanceFromHqInFeet(someValue){
     let blocks = distanceFromHqInBlocks(someValue)
     let feet = blocks * 264
     return feet

}
function distanceTravelledInFeet(start , end)
{
    //let dist = distanceFromHqInFeet(end)
    let des = Math.abs(end - start) * 264
    return des
}
function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    feet = parseInt(feet)
    let price = 0
    switch(feet){
        case(feet < 400):
            return "free sample"
        case(feet > 400 && feet > 2000):
            price = (feet - 400 ) * 2
            return price 
        case(feet > 2000 && feet < 2500):
            price = 25
            return price
        case (feet > 2500 ):
            return "cannot travel that far"
    }
}