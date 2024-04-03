const team = {
    _players: [ 
        {firstName: 'Rayleigh Craig', lastName: 'Obina', age: 11}, 
        {firstName: 'Tiffany Raine', lastName: 'Obina', age: 13},
        {firstName: 'Serenity Zaine', lastName: 'Obina', age: 8},   
    ],
    _games: [
        {opponent: 'Jets', teamPoints: 44 , opponentPoints: 50},
        {opponent: 'Bridges', teamPoints: 37 , opponentPoints: 25},
        {opponent: 'Hills', teamPoints: 40 , opponentPoints: 35},
    ], 
  
    get players () {
      return this._players;
    },
  
    get games () {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName : newFirstName,
        lastName : newLastName,
        age : newAge
      };
    this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentsPoints) {
      let game = {
        opponent : newOpponent,
        teamPoints : newTeamPoints,
        opponentsPoints : newOpponentsPoints
      };
    this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 95);
  console.log(team.games);
  