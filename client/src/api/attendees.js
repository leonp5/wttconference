function saveAttendee(attendee) {
  return fetch(`/api/attendees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: attendee.name,
      address: attendee.address,
      location: attendee.location,
      email: attendee.email,
      phone: attendee.phone,
      workshop1: attendee.workshop1,
      workshop2: attendee.workshop2,
      workshop3: attendee.workshop3,
      else: attendee.else
    })
  }).then(response => response.json());
}

export default saveAttendee;
