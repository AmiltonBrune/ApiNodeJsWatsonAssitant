"use strict";

const watson = require("../../watson/client-watson");
const environment_variables = require("../../config/env");

exports.send_message = (req, res) => {
  const { text } = req.body;

  const params = {
    assistant_id: environment_variables.assistantId,
    session_id: req.body.session_id,
    input: {
      message_type: "text",
      text: text
    }
  };

  watson.message(params, (err, response) => {
    if (err) res.status(500).json(err);
    res.json(response);
  });
};

exports.create_session = (req, res) => {
  watson.createSession(
    {
      assistant_id: environment_variables.assistantId
    },
    function(error, response) {
      if (error) {
        return res.send(error);
      } else {
        return res.send(response);
      }
    }
  );
};
