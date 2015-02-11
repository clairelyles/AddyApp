/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    firstName: {
      type: "string",
      required: true
    },
    lastName: {
      type: "string",
      required: true
    },
    email: {
      type: "string",
      required: true
    },
    streetAddress: {
      type: "string",
      required: true
    },
    city: {
      type: "string",
      required: true
    },
    state: {
      type: "string",
      required: true
    },
    zip: {
      type: "string",
      required: true
    },
    phone: {
      type: "string",
      required: true
    },
    notes: {
      type: "text",
      required: true
    },
  }
};

