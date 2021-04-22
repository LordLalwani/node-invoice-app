# Xero Technical Challenge - Typescript Invoice App

Hello Xero team, please read the following to get further context on my decision making with this technical challenge and how to get it up and running. 

## Considerations & Decisions before starting the exercise

#### Time spent:
4 hours total.

#### Typescript: 
1. I decided to move away from Javascript and use Typescript instead because I believe an application like an invoicing system should adhere to strict data management and explicit type declarations. This enforces easier code readability and management while catching minor mistakes through optional strong static typing opposed to dynamical (the way javascript does it).

2. I was also quite concerned about accessing certain data from the classes directly and also unnecessarily polluting the classes with code so I decided to make a small behavioural layer of abstraction (helpers) which can be extended while also leaving functions within the classes themselves to only directly access the instance of the class (`this`). I believe this helps the code to stay modular and aids refactoring and/or extending business logic.

3. Some values shouldn't be able to be mutated e.g dates and unique ids, i've decided to make them `readOnly` and `private` accordingly. 

#### Things I left out (for the interest of saving time) 
1. I made a concise decision to focus on explicit type declarations as much as I could to prevent minor mistakes over error handling for ever edge case that came to my head. If I had more time, I would spend it writing more tests and working on error handling.

2. I also wanted to handle currencies and price values (in relation to rounding etc), especially when getting the total price of an invoice. I was thinking of using `https://currency.js.org/` as the framework. 


## Installation

```bash
yarn
```

## Getting the app started

`yarn run start`: for a single execution.

`yarn run start:dev`: for dev mode (hot reloading etc) 

`yarn run test`: to run all testing suites
