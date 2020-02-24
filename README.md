# BOTS OF DISCORD 
An official module for interacting with the [BOD](https://www.b-o-d.cf) API

## Installation
`npm install bod-api`

## Documentation
Full documentation can be found [here]()

## Example:

### Posting server count (Discord.js and Eris)
```
const Discord = require("discord.js");
const client = new Discord.Client();
const bod_api = require("bod-api");
const bod = new bod_api('Your api token', client);

// Optional events
bod.on('posted', () => {
  console.log('Server count posted!');
})

bod.on('error', e => {
 console.log(`Error ${e}`);
})
```


### Getting bot info
```
bod.getStats("bot id").then(stats => {
console.log(stats)
});
```


### Getting user info
```
bod.getUser("user id").then(user => {
console.log(user);
});
```
