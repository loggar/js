var Photo = Backbone.Model.extend({

    // Default attributes for the photo
    defaults: {
        src: "placeholder.jpg",
        caption: "A default image",
        viewed: false
    },

    // Ensure that each photo created has an `src`.
    initialize: function () {
        this.set({ "src": this.defaults.src });
    }

});