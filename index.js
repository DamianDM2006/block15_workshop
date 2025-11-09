const yourOrder = prompt(
  `Place Your Order`,
  `vanilla vanilla vanilla strawberry coffee coffee vanilla strawberry coffee`
);

const flavorsOrdered = yourOrder.split(` `);
console.log(flavorsOrdered);

flavorsOrdered.sort();
//console.log(flavorsOrdered);

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
