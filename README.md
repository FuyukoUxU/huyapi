[![npm](https://img.shields.io/npm/v/huyapi)](https://www.npmjs.com/package/huyapi)
[![npm](https://img.shields.io/npm/dt/huyapi)](https://www.npmjs.com/package/huyapi)
[![install size](https://packagephobia.com/badge?p=huyapi)](https://packagephobia.com/result?p=huyapi)


[![NPM](https://nodei.co/npm/huyapi.png)](https://nodei.co/npm/huyapi/)

# HuyAPI
A simple photo api

## Installation
```
npm i huyapi
```
## Type

| Function | Type |
| -------- | ----------- |
| `meme` | (png/jpg) |
| `girl` | (png/jpg) |
| `boy` | (png/jpg) |
| `cat` | (png/jpg) |
| `dog` | (png/jpg) |
| `hug` | (gif) |
| `smile` | (gif) |
| `baka` | (gif) |
| `bite` | (gif) |
| `clap` | (gif) |
| `dance` | (gif) |
| `die` | (gif) |
| `kill` | (gif) |
| `kiss` | (gif) |
| `wag` | (gif) |
| `poke` | (gif) |
| `punch` | (gif) |
| `sad` | (gif) |
| `run` | (gif) |
| `shot` | (gif) |

## Examples

```js
Await/Async
const HuyAPI = require("huyapi")
const image = new HuyAPI

async function test() {
  console.log(await image.get.meme());
}

test();
```
Return: 
```js
{
    "author": "中村藍子#1204",
    "url": "https://media.discordapp.net/attachments/860374248275181598/860391071967215676/170408311_394610311891547_2511268824234698070_n.png"
}
```
