//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length > 0) {
    return {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2],
    };
  } else if (formation.length <= 0){
    return null;
  }
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var filtereddata = [];

  for (var i = 0; i < players.length; i++) {
    if (players[i].debut === year) {
      filteredData.push(players[i]);
    }
  }

  return filtereddata;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var data = players.filter(player => player.position == position);
  return data;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let filteredArray = [];

  players.forEach(player => {
    player.awards.forEach(award => {
      if (award.name === awardName) {
        filteredArray.push(player);
      }
    });
  });

  return filteredArray;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAward(awardName) {
  let arr = [];

  players.forEach(player => {
    player.awards.forEach(award => {
      if (award.name == awardName) {
        filteredArray.push(player);
      }
    });
  });

  return arr;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(player => player.country == country);
  return data;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var data = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return data;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  players.sort((a, b) => b.age - a.age); //Note: For my own reference: NEW CONCEPT: b - a is descending and the opposite is ascending
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  const filteredPlayers = players.filter(function(player) {
    return player.team == team;
  });
  
  const sortedAwardsCount = filteredPlayers.map(function(player) {
    return player.awards.length;
  }).sort((a, b) => b - a); //same concept of sorting as used above to achieve it in a single line
  
  return sortedAwardsCount;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByAge() {
  players.sort((a, b) => b.age - a.age);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function FilterByTeamxSortByNoOfAwards(team) {
  const filteredPlayers = players.filter(player => player.team === team);
  filteredPlayers.sort((a, b) => b.awards.length - a.awards.length);
  
  return filteredPlayers;
}
