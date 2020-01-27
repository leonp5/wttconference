export function notifyAttendee(attendee) {
  return fetch(`/api/confirmation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(attendee)
  });
}

export function sendRequest(request) {
  return fetch(`/api/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  });
}

export function sendWorkshop(workshop) {
  return fetch(`/api/workshop`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(workshop)
  });
}
