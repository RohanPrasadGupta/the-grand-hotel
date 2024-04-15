export async function getCabins() {
  try {
    const response = await fetch(
      "http://127.0.0.1:3000/api/cabin/v1/getCabins",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data.docs;
  } catch (err) {
    console.log(err.message);
  }
}
export async function getCabin() {
  try {
    const response = await fetch(
      "http://127.0.0.1:3000/api/booking/v1/getBooking/661cece7001127a23e2379ea",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
