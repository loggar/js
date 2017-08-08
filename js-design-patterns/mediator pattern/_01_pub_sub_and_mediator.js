var MenuItem = MyFrameworkView.extend({

    events: {
        "click .thatThing": "clickedIt"
    },

    clickedIt: function (e) {
        e.preventDefault();

        // assume this triggers "menu:click:foo"
        MyFramework.trigger("menu:click:" + this.model.get("name"));
    }

});

// ... somewhere else in the app

var MyWorkflow = function () {
    MyFramework.on("menu:click:foo", this.doStuff, this);
};

MyWorkflow.prototype.doStuff = function () {
    // instantiate multiple objects here.
    // set up event handlers for those objects.
    // coordinate all of the objects into a meaningful workflow.
};