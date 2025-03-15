# LOR BUDDY

See LorBuddy in action running on github pages here

## Why?

Playing a bit of Legends of Runeterra on my iPad while sitting on the deck having morning coffee and throwing the ball for the dog. It cleanses my mind, it's a pretty great game imho. Quite zen.

I enjoy writing game companions and creating a way to make all the card data accessible so we can find patterns and connections and can understand the spread better. This isn't unique, there are other sites out there, but, this is a ground-up approach of what an app like that could look like written in React and Typescript. 

Candidly I'm also looking for some ways of demonstrating my React and TypeScript skills to some folks and this is one way to get more material out there.

## What?

MVP should be a basic library filter with cards rendered. Mature product should be an LoR **card library query monster** with stats and deck builder and viewer. I'd eventually like to re-create this as a webgl based renderer so have less restrictions on rendering.

## PROCESS

I'm already automating the process of gathering the card sets from the [RIOT's Dragon Data](https://developer.riotgames.com/docs/lor) here in [dargondata repo](https://github.com/ineffably/dargondata), which yes is named appropriotly *Dargon Data!*. Please check it out.

I'll be using React and [antd (ant design)](https://ant.design/docs/spec/introduce) as I really like their [TypeScript backed components](https://ant.design/components/overview/), they are simple, they don't play games, they are easy to extend and customize and best of all, they have a lot of great data sifting features built in where it counts.

I have headed down this path before, 4 years ago, but, I really just want to re-write this from scratch, contrast my learnings maybe. I won't be using any old code as a reference and commit early and commit often.

Wait a minute. I'll revisit my value distribution component logic that I wrote a while back though here: [ReactItemCountGraph](https://codesandbox.io/p/sandbox/react-item-count-graph-r6rk9?file=%2Fsrc%2FApp.js). I'll update the rendering to match tone. 

*I did not get around to publishing it, but, thats my prototype which is in that old codebase I said I wasn't going to look at. heh.*

