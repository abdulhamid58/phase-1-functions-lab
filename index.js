
  
 function distanceFromHqInBlocks(street) {
   // return (street - 42);
   const blocksFromHq = Math.abs(42 -street)
   return blocksFromHq
  }

  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled* 264;
  }
  function calculatesFarePrice(start,destination) {
    const feetTravelled = distanceTravelledInFeet(start,destination);
    let fare;
    if (feetTravelled <= 400) {
      fare = 0;
    }  else if (feetTravelled<=2000) { 
      fare = (feetTravelled - 400) * 0.02;
    } else if (feetTravelled <= 2500) {
      fare = 25;
    }
      else if (feetTravelled > 2500) {
        fare = 'cannot travel that far';
      
    }
    return fare
  }