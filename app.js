#!/usr/bin/env node
const Botkit = require('botkit');

const ghome = require('google-home-notifier');
const lang = 'ja';


if (!process.env.SLACK_TOKEN) {
  console.log('Error: Specify SLACK_TOKEN in environment');
  process.exit(1);
}

if (!process.env.GHOME_IP) {
  console.log('Error: Specify GHOME_IP in environment');
  process.exit(1);
}

ghome.device('Google-Home-Mini', lang);
ghome.ip(process.env.GHOME_IP, lang)

const controller = Botkit.slackbot({
  debug: false
});

controller
  .spawn({ token: process.env.SLACK_TOKEN })
  .startRTM(function (err) {
    if (err) {
      throw new Error(err);
    }
  });

controller.hears("(.*)", ['direct_message', 'direct_mention'], (bot, message) => {
  console.log(`${message.user} says '${message.text}'`);

  ghome.notify(message.text, function(res) {
    console.log(res);
  });
});
