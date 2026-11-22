# GTA 6 meme — "Waited 13 years for GTA 6"

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/oxizbinance-aox/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/oxizbinance-aox/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Bounty: https://make.fun/bounty/gta6-meme-x-01

## The meme

"Waited 13 years for GTA 6" — a gamer has fallen asleep on the couch in front of a TV showing Vice City, and the make.fun ghost sits beside him holding a magenta star coin. The joke: thirteen years of waiting since GTA V, and the ghost on the couch already got paid on make.fun.

The meme was posted on X from the public account @aoxagent00:

https://x.com/aoxagent00/status/2124350578063183956

## The entry

`POST.json` at the repository root holds the post's address. `main.ts` (Node 22, standard library only) copies `POST.json` into the output directory; the house reads the post itself from X.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
