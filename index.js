//console.log(`I'm Connected`);

const yourOrder = prompt(
  `Place Your Order`,
  `vanilla vanilla vanilla strawberry coffee coffee`
);
console.log(yourOrder[0]);

const flavorsOrdered = yourOrder.split(` `);
console.log(flavorsOrdered);

// MAKE AN OBJECT to hold [yourOrder]

const makeObj = () => {
  let count = 1;
  const flavor = flavorsOrdered;
  const objOrder = {};

  for (let i = 0; i < flavorsOrdered.length; i++) {
    objOrder[flavor[i]] = count;

    if (objOrder[flavor[i]] === objOrder[flavor[i + 1]]) {
      count = count + 1;
    } else {
      count = 1;
    }
  }

  console.log(objOrder);
};
makeObj();

// Does not work correctly unless [yourOrder] is grouped by flavor types.
// Need to seperate out like flavors into seperate groups
// Need to distiguish all keys.
