
var myObj_01_self = {
		specialFunction1 : function() {},
		specialFunction2 : function() {},
		
		getAsyncData : function(fn_some) {
			fn_some();
		},
		
		render : function() {
			var self = this;
			
			this.getAsyncData(function() {
				self.specialFunction1();
				self.specialFunction2();
				
				console.log(self);
				console.log(this);
			});
		}
};

var myObj_02_bind = {
		specialFunction1 : function() {},
		specialFunction2 : function() {},
		
		getAsyncData : function(fn_some) {
			fn_some();
		},
		
		render : function() {
			this.getAsyncData(function() {
				this.specialFunction1();
				this.specialFunction2();
				
				console.log(this);
			}.bind(this));
		}
};


/*
myObj_01_self.render();
*/

myObj_02_bind.render();

