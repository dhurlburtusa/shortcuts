# Apollo Client Notes

Apollo Client is the best way to use GraphQL to build client applications.  The
client is designed to help you quickly build a UI that fetches data with
GraphQL, and can be used with any JavaScript front-end.  The client is:

- **Incrementally adoptable**: You can drop it into an existing app today.
- **Universally compatible**: Apollo works with any build setup, any GraphQL
  server, and any GraphQL schema.
- **Simple to get started with**: Start loading data right away and learn about
  advanced features later.
- **Inspectable and understandable**: Interrogate and understand exactly what is
  happening in an application.
- **Built for interactive apps**: Application users make changes and see them
  reflected immediately.
- **Small and flexible**: You don’t get stuff your application doesn’t need.
- **Community driven**: Apollo is driven by the community and serves a variety
  of use cases.

**Platforms**

Apollo Client supports many platforms:

- **JavaScript**
  + Angular
  + Ember
  + Meteor
  + React
  + Vue
- **Web Components**
  + Polymer
  + lit-apollo
- **Native mobile**
  + Native iOS with Swift
  + Native Android with Java


## Creating a Client

In order to use Apollo Client, you need to create one.  If you don't need
any special configuration, you can use `apollo-boost'.

**Apollo-Boost**

```sh
npm install apollo-boost --save
```

```js
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'The graphql endpoint.',
});
```

Apollo Boost is just a mostly-preconfigured Apollo Client.  It is made up of the
following packages: `apollo-client`, `apollo-cache-inmemory`,
`apollo-link-http`, `apollo-link-error`, and `apollo-link-state`.


## Making Queries with Client

Once you have a client you can start making queries.  The following illustrates
using your client to make a query.

```js
import gql from 'graphql-tag';
...
client
  .query({
    query: gql`
      {
        rates(currency: 'USD') {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));
```

Using the client directly is great in an imperative coding context, but when in
a declarative coding context and/or in the UI, then using the client indirectly
will usually be easier.


## Use with React

To use Apollo Client with React, you will need a client provider component and
a HOC or the `Query` component.  The `react-apollo` package provides this
functionality.

**React Apollo**

```sh
npm install react-apollo --save
```

Links:

- [API Docs](https://www.apollographql.com/docs/react/api/react-apollo.html)
- [Mutations](https://www.apollographql.com/docs/react/essentials/mutations.html)
- [Queries](https://www.apollographql.com/docs/react/essentials/queries.html)

**Connecting the client to React**

```js
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import client from './apollo-client-instance';

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
```

**Requesting Data**

To request data in a declarative fashion, use the [`Query`][react-apollo-query]
component.

```js
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: 'USD') {
          currency
          rate
        }
      }
    `}
  >
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{currency}: {rate}</p>
        </div>
      ));
    }}
  </Query>
);
```

**Requesting Parameterized Data**

```js
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

const DogPhoto = ({ breed }) => (
  <Query query={GET_DOG_PHOTO} variables={{ breed }}>
    {({ data, error, loading }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      );
    }}
  </Query>
);
```

**Polling for New Data**

```js
const DogPhoto = ({ breed }) => (
  <Query
    pollInterval={500}
    query={GET_DOG_PHOTO}
    variables={{ breed }}
    skip={!breed}
  >
    {({ data, error, loading, startPolling, stopPolling }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <div>
          <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
          <button onClick={() => startPolling(1000)}>Start Polling</button>
          <button onClick={stopPolling}>Stop Polling</button>
        </div>
      );
    }}
  </Query>
);
```

**Refetching Fresh/Different Data**

```js
const DogPhoto = ({ breed }) => (
  <Query
    query={GET_DOG_PHOTO}
    variables={{ breed }}
    skip={!breed}
  >
    {({ data, error, loading, refetch }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <div>
          <img
            src={data.dog.displayImage}
            style={{ height: 100, width: 100 }}
          />
          <button onClick={refetch}>Refetch!</button>
          <button onClick={() => refetch({ breed: 'Golden Retriever' }) }>
            Golden Retriever
          </button>
        </div>
      );
    }}
  </Query>
);
```

**Refetching Fresh/Different Data with Refetching Notification**

```js
const DogPhoto = ({ breed }) => (
  <Query
    notifyOnNetworkStatusChange
    query={GET_DOG_PHOTO}
    variables={{ breed }}
    skip={!breed}
  >
    {({ data, error, loading, networkStatus, refetch }) => {
      if (networkStatus === 4) return 'Refetching!';
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <div>
          <img
            src={data.dog.displayImage}
            style={{ height: 100, width: 100 }}
          />
          <button onClick={refetch}>Refetch!</button>
          <button onClick={() => refetch({ breed: 'Golden Retriever' }) }>
            Golden Retriever
          </button>
        </div>
      );
    }}
  </Query>
);
```


[react-apollo-query]: https://www.apollographql.com/docs/react/api/react-apollo.html#query
