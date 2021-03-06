var FundDetailView = Backbone.View.extend({

  template: _.template(
    '<div class="fundDetail">\
      <h2><%= name %></h2>\
      <h4 style="display:inline">Location:     </h4><%= city %>,<%= state_code %><br>\
      <h4 style="display:inline">Fund Homepage:     </h4><a href=<%= homepage_url %> ><%= homepage_url %></a><br>\
      <h4 style="display:inline">Founded:     </h4><%= new Date(founded_at).toDateString() %><br>\
      <h4 style="display:inline">Companies Invested:     </h4><%= invested_companies %><br>\
      <h4 style="display:inline">Investment Rounds:     </h4><%= investment_rounds %><br>\
      <h4>Overview:</h4>\
      <p><%= overview %>\
      <br><br><br>\
    </div>'),
  
  // Fund Detail views are instantiated during StartupView initialization.
  // They are subviews of StartupView
  initialize: function(){
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
