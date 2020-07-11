import fb from "../firebaseConfig.js";

// Get room of passed hotels
export const fetchRoomsOfHotelsFB = async (hotelIDs) => {
  const resultRooms = [];

  try {
    const roomsRef = fb.db.collection("rooms").where("hotelID", "in", hotelIDs);
    const allRooms = await roomsRef.get();
    allRooms.docs.forEach((doc) => {
      resultRooms.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.log("ERROR", error);
  }
  return resultRooms;
};

// Found out if hotel has room has any room with passed price
export const filterByPriceFB = async (hotelID, price) => {
  let isExists = false;
  try {
    const roomsRef = fb.db
      .collection("rooms")
      .where("hotelID", "==", hotelID)
      .where("price", ">=", price);
    const roomsData = await roomsRef.get().then((doc) => {
      if (doc.exists) {
        isExists = true;
      }
    });
  } catch (error) {
    console.log("ERROR", error);
  }
  return isExists;
};
