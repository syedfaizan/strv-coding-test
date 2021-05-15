const database = require("helpers/firebase");

const saveContact = (contact, userId) => {
  let dbPath = `strv-addressbook-${contact.lastName.toLowerCase()}-${contact.firstName.toLowerCase()}`;
  return new Promise((resolve, reject) => {
    database.ref(dbPath).set({ ...contact, userId }, function (error) {
      return error ? reject(false) : resolve(dbPath);
    });
  });
};

const createContact = async (contact, userId) => {
  let dbPath = await saveContact(contact, userId);
  return { dbPath };
};

module.exports = {
  createContact,
};
