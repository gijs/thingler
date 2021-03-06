var todo  = require('./todo'),
    changes = require('./changes');
//
// Routing table
//
this.map = function () {
    // Create a new todo list
    this.post('/');

    // List
    this.path(/^([a-zA-Z0-9-]+)(?:\.json)?/, function () {
        // Retrieve the todo list
        this.get().bind  (todo.get);

        // Update the todo list
        this.put().bind  (todo.put);

        // Destroy the todo list
        this.del().bind  (todo.del);

        // Create a change
        this.post().bind (changes.post);
    });
};
