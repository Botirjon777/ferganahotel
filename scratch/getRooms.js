async function getRooms() {
  try {
    const res = await fetch("https://connect.hopenapi.com/api/content/v1/properties/506786/room-types");
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.error(e);
  }
}

getRooms();
