export function saveAttendee(attendee) {
  return fetch(`/api/attendees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(attendee)
  });
}

export async function getAttendees() {
  return fetch(`api/attendees/`, {
    method: "GET"
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}
