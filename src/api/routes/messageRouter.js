module.exports = app => {
  let message = require("../controllers/messageController");

  //Message Route

  app.route('/api/message').post(message.send_message);
  app.route('/api/session').get(message.create_session);
};
