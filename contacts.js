const fs = require("fs/promises");
const path = require("path");
const ObjectId = require("bson-objectid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const updateContacts = async (contacts)=> {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async() => {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
};
  
const getContactById = async(contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    if(!result) {
        return null;
    }
    return result;
};
  
const removeContact = async(contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === contactId);
    if(idx === -1){
        return null;
    }
    const [removeContact] = contacts.splice(idx, 1);
    updateContacts(contacts);
    return removeContact;
};
  
const addContact = async(name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        name,
        email,
        phone,
        id: ObjectId(),
    }
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
};

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
}