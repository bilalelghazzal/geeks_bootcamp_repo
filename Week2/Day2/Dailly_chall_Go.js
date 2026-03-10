
//1
const usernames = [];

gameInfo.forEach(function(player) {
    usernames.push(player.usernames + "!")
});

//3
const winners = [];

gameInfo.forEach(function(player) {
    if (player.score >5) {
        winners.push(player.usernames)
    }
})
//3
let totalScore = 0;

gameInfo.forEach(function(player) {
    totalScore += player.usernames
});
// updated work .