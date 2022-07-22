# rxjs

Reactive Extensions for JS

Purpose: Dealing with async code.

## Mechanisms for dealing with async code

- Promises
- Callbacks
- async/await
- async generators
- streams

```js
const fs = require('fs');

let dataOutside;

fs.readFile('readme.md', (error, data) => {
  if (error) {
    console.warn('Could not read file!');

    return;
  }

  dataOutside = data;

  // Do something with the data.
  fs.writeFile('readme.md', undefined, (error) => {
    if (error) {
      console.warn('Could not write file.');
    }

    console.log('Written to the file.');
  });
});

// Probably still undefined!
console.log(dataOutside);
```

```js
new Promise((resolve, reject) => {
  fs.readFile('...', (error, data) => {
    if (error) {
      return reject(error);
    }

    return resolve(data);
  })
}).then(data => {
  return [...data].map(char => char.toUpperCase()).join('');
}).then(data => {
  console.log(data);
}).catch(error => {
  console.warn(error);
});

// Still cannot acces the data here!
```

```js
const promise = new Promise((resolve, reject) => {
  fs.readFile('...', (error, data) => {
    if (error) {
      return reject(error);
    }

    return resolve(data);
  })
});

const data = await promise;
```

```js
const getUser = async function*(query) {
  const cursor = await getUsers(query);

  for (const user of cursor) {
    yield user;
  }
};

for await (const user of getUser('...')) {
  console.log(user);
}
```

- observable

1. Observables produce (streams of) values.
2. You can subscribe to observables, meaning every time the observable produces a value, you get notified.
3. Subscribing to an observable makes you an observer.

RxJS has lots of operators.
- Operators act as Observers, i.e. they take values from an Observable.
- Operators also act as Obserables, i.e. they produce values themselves and can be subscribed to.


## What's the purpose of Redux? What problems does it solve?

- It provides a single source of truth
- Makes debugging easier, e.g. by using the dev tools
- Saves a lot of code, because we don't have to do property drilling
- Selectors help us derive state
- We know when the state has changed
- It's easier to reason about state changes, because only the reducers are allowed to change the state

## What might be reasons not to use redux?

- More boilerplate code
- The state is separated from the components
- Redux or nothing: Redux wants to be the central store for your application, and if you try to integrate it with more traditional approaches, you're gonna have a hard time
- Performance might be worse?
- Integrating 3rd party libraries that do their state management, it might not be obvious how to integrate them with redux.
- It's an additional thing to learn
- The state needs to be serializable
- There's no separation between private and public state, every part of the application can write to every part of the state
- Redux does not prevent you from coupling parts of your application that should really be isolated


## Testing

- Redux without redux-observable and redux toolkit is easily testable:
  - Just test the reducers:
    - Run the reducers against some predefined state and action, and check the result.
- Create many many stores!
  - Have a function that initializes a new store, and run it before every test.
  - Use the `preloadedState` from `configureStore` or `createStore`.

```ts
import accounts from './slices/accounts';
import { configureStore } from '@reduxjs/toolkit';
import transactionLog from './slices/transactionLog';

const setupStore = function (preloadedState?: any) {
  return configureStore({
    reducer: {
      accounts,
      transactionLog
    },
    devTools: true,
    preloadedState,
  });
};
```

- Test as closely to the actual use case as possible
  - Actually initialize a store
  - Actually use dispatch
- How to deal with side effects?
  - Using mocks, i.e. fake implementations of side effects that we can control
  - Using dependency injection, i.e. providing the mocks/real implementations to our epics and thunks as arguments

### What types of tests are sensible?

- For redux itself: Unit tests! -> Testing the reducers
  - Test for the edge cases
  - Don't just test the happy day cases, test the error handling especially
- Testing epics and thunks: Create an actual store instance, and test by dispatching actual actions.
- In component tests: Only test against the state (i.e. checking the state after performing some action), if the state change is part the component's API
  - Most of the time it's a good idea to check if actions were dispatched correctly, instead of checking the state.
- In E2E tests, it's irrelevant if we use a redux store or not.
