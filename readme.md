# LOR BUDDY

[See LorBuddy in action running on github pages here](https://ineffably.github.io/lor-buddy/)

## Why?

Playing a bit of Legends of Runeterra on my iPad while sitting on the deck having morning coffee and throwing the ball for the dog. It cleanses my mind, it's a pretty great game imho. Quite zen.

I enjoy writing game companions and creating a way to make all the card data accessible so we can find patterns and connections and can understand the spread better. This isn't unique, there are other sites out there, but, this is a ground-up approach of what an app like that could look like written in React and Typescript. 

Candidly I'm also looking for some ways of demonstrating my React and TypeScript skills to some folks and this is one way to get more material out there.

## What?

MVP should be a basic library filter with cards rendered. Mature product should be an LoR **card library query monster** with stats and deck builder and viewer. I'd eventually like to re-create this as a webgl based renderer so have less restrictions on rendering.

## PLAY WITH IT 

Although it's [running on github pages](https://ineffably.github.io/lor-buddy/), you can also clone and run it on your own device. 

```
git clone git@github.com:ineffably/lor-buddy.git && cd lor-buddy
npm ci
npm run local
```

Point your best local browser here http://localhost:8888/

## PROCESS

I'm already automating the process of gathering the card sets from the [RIOT's Dragon Data](https://developer.riotgames.com/docs/lor) here in [dargondata repo](https://github.com/ineffably/dargondata), which yes is named appropriotly *Dargon Data!*. Please check it out. I'll be using the images provided by the data due to the amount of requests that would incure on github pages. (would introduce that once better tested)

I'll be using React and [antd (ant design)](https://ant.design/docs/spec/introduce) as I really like their [TypeScript backed components](https://ant.design/components/overview/), they are simple, they don't play games, they are easy to extend and customize and best of all, they have a lot of great data sifting features built in where it counts.

I have headed down this path before, 4 years ago, but, I really just want to re-write this from scratch, contrast my learnings maybe. I won't be using any old code as a reference and commit early and commit often.

Wait a minute. I'll revisit my value distribution component logic that I wrote a while back though here: [ReactItemCountGraph](https://codesandbox.io/p/sandbox/react-item-count-graph-r6rk9?file=%2Fsrc%2FApp.js). I'll update the rendering to match tone. 

*I did not get around to publishing it, but, thats my prototype which is in that old codebase I said I wasn't going to look at. heh.*

## Disclaimer

THE PROGRAM IS PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, NONINFRINGMENT, OR OF FITNESS FOR A PARTICULAR PURPOSE. LICENSOR DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE PROGRAM WILL MEET YOUR REQUIREMENTS OR THAT OPERATION WILL BE UNINTERRUPTED OR ERROR FREE. LICENSOR MAKES NO WARRANTIES RESPECTING ANY HARM THAT MAY BE CAUSED BY MALICIOUS USE OF THIS SOFTWARE. LICENSOR FURTHER EXPRESSLY DISCLAIMS ANY WARRANTY OR REPRESENTATION TO AUTHORIZED USERS OR TO ANY THIRD PARTY.

LOR BUDDY isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
