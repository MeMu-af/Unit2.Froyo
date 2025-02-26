const userInputString = prompt(
    "Please enter a list of comma-seperated froyo flavors.",
    "vanilla,vanilla,strawberry,coffee,coffee"
  );

  const flavors = userInputString.split(",").map(flavor => flavor.trim().toLowerCase());

  const flavorCount = {};

  flavors.forEach(flavor => {
    if (flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  });


  console.table(flavorCount);
  //This works if you refresh on the browser, not sure if that is browser issue, or my code.

