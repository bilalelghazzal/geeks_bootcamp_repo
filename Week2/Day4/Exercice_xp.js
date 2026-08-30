
//Exercice 3 
const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  const jsonstring =JSON.stringify(marioGame);
  console.log(jsonstring);
  /*output is {"detail":"An amazing game!","characters":{"mario":{"description":"Small and jumpy. Likes princesses.","height":10,"weight":3,"speed":12},
  "bowser":{"description":"Big and green, Hates princesses.","height":16,"weight":6,"speed":4},
  "princessPeach":{"description":"Beautiful princess.","height":12,"weight":2,"speed":2}}}*/

  //2- pretty print 

  const jsonstringpretty =JSON.stringify(marioGame,null ,4);
  console.log(jsonstringpretty);
  //3 - inspector 
  debugger;
  console.log("Compact JSON:", jsonCompact);
  console.log("Pretty JSON:", jsonPretty);


