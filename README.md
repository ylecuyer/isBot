[![Build Status](https://travis-ci.org/kaimallea/isBot.png)](https://travis-ci.org/kaimallea/isBot)
[![Node dependencies status](https://david-dm.org/kaimallea/isBot.png)](https://david-dm.org/kaimallea/isBot)

# isBot

A simple JS library that detects bots.

## How it works

isBot runs quickly on page load to detect mobile devices; it then creates a JavaScript object with the results.

## Bots detected by isBot

The following properies of the `isBot` object will either be `true` or `false`

### Googlebot

* `isBot.googlebot`

### Aggregate Groupings

* `isMobile.bot` - any bot 

### node.js usage

#####Installation
`npm install isbotjs`

#####Usage
```
var isBot = require('isbotjs');
console.log(isBot(req.headers['user-agent']).any);
```

Based on isMobile by @kaimallea
