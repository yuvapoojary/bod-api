# BOTS OF DISCORD 
An official module for interacting with the [BOD](https://www.b-o-d.cf) API

## Installation
`npm install bodapi.js`

## Documentation
Full documentation can be found [here]()

## Example:

### Posting server count (Discord.js and Eris)
```
const Discord = require("discord.js");
const client = new Discord.Client();
const bod_api = require("bodapi.js");
const bod = new bod_api('Your api token', client);

// m is optional
bod.on('posted', (m) => {
  console.log(m);
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
