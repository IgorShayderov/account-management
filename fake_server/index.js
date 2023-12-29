import { createServer, Model, Factory } from 'miragejs';

const makeServer = ({ environment = 'development' } = {}) => createServer({
  environment,

  models: {
    ticket: Model,
  },

  factories: {
    ticket: Factory.extend({
      title(i) {
        return `Ticket ${i + 1}`;
      },
      description() {
        return 'description';
      },
    }),
  },

  routes() {
    this.namespace = 'api/v1';

    this.get('/tickets', (schema) => schema.tickets.all());
    this.get('/ticket/:id', (schema, request) => {
      const { id } = request.params;

      return schema.tickets.find(id);
    });
    this.post('/tickets', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);

      return schema.tickets.create(attrs);
    });
    this.patch('/tickets/:id', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const { id } = request.params;
      const ticket = schema.tickets.find(id);

      return ticket.update(attrs);
    });
    this.delete('/tickets/:id', (schema, request) => {
      const { id } = request.params;
      const ticket = schema.tickets.find(id);

      return ticket.destroy();
    });
  },

  seeds(server) {
    server.createList('ticket', 10);
  },
});

export default makeServer;
