function fillBus(peopleAtBusStops, busSeats) {
  if (!Array.isArray(peopleAtBusStops) || typeof busSeats !== "number" || busSeats < 0) {
    return null;
  }

  let cap = 0; 

  for (let a = 0; a < peopleAtBusStops.length; a++) {
    cap += peopleAtBusStops[a];
    if (cap >= busSeats) {
      return a;
    }
  }

  return null;
}

console.log(fillBus([1, 3, 10, 1], 12));
