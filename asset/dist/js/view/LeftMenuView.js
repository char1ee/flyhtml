define(["backbone","model/session","text!template/leftMenu.html"],function(e,t,n){var r=e.View.extend({el:$("#left-menu"),initialize:function(){this.render()},render:function(){return this.$el.html(_.template(n,t.toJSON(),{variable:"user"})),this},select:function(e){this.$(".nav .active").removeClass("active"),this.$(e).addClass("active")}});return r});