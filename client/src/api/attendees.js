export function saveAttendee(attendee) {
  return fetch(`/api/attendees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(attendee)
  });
}
