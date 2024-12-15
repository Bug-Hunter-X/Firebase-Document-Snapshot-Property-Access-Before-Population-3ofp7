```javascript
async function getDocumentData(docRef) {
  try {
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      console.log("Document data:", data);
      return data; // Handle the data safely
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null; // Handle errors appropriately
  }
}
```