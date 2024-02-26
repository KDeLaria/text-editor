import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");
  const storage = tx.objectStore("jate");
  const response = storage.put({id: 1, jate: content});
  const results = await response;
  results = (results.jate)? console.log("Text saved to database", results) 
    : console.log("Unable to save to the database");
  return results;
  }
  catch (err) {
    console.log(err.message);
  }  
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const storage = tx.objectStore("jate");
  const response = storage.get(1);
  const results = await response;
  results = (results.jate)? results 
    : console.log("Unable to retrieve the data from the database");
  return results;
  }
  catch (err) {
    console.log(err.message);
  }
};

initdb();
