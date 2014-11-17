// counter starts at 0
Session.setDefault("counter", 0);

Template.f.helpers({
  counter: function () {
    return Session.get("counter");
  }
});

Template.f.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set("counter", Session.get("counter") + 1);
  }
});