function buildExpressServer(data) {
  if (data.database === 'MongoDB') {
    const query = `
      const express = require('express');
      const graphqlHTTP = require('express-graphql');
      const mongoose = require('mongoose');
      const GQLSchema = require('./graphql-schema');
      const path = require('path');
      const app = express();

      mongoose.connect('Your Database Here!');
  
      app.use(express.static(path.join(__dirname, './public')))
  
      app.use('/graphql', graphqlHTTP({
        GQLSchema,
        graphiql: false //Set to true to view GraphiQl in browser at /graphql
      }));
  
      app.listen(4000, () => {
        console.log('Listening on 4000')
      });
    `;
    return query;
  } if (data.database === 'SQL') {
    const query = `
      const express = require('express');
      const graphqlHTTP = require('express-graphql');
      const sequelize = require('sequelize)
      const GQLSchema = require('./graphql-schema');
      const path = require('path');
      const app = express();
    
      sequelize.connect('Your Database Here!');
    
      app.use(express.static(path.join(__dirname, './public')))
    
      app.use('/graphql', graphqlHTTP({
        GQLSchema,
        graphiql: false //Set to true to view GraphiQl in browser at /graphql
      }));
    
      app.listen(4000, () => {
        console.log('Listening on 4000')
      });
    `;
    return query;
  }
}
module.exports = buildExpressServer;
