const socket = io();

//Elements
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const sendlocation = document.querySelector("#send-location");
const messages = document.querySelector("#messages");

//Templates
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locationTemplate = document.querySelector("#location-template").innerHTML;
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML;
//Options
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const autoScroll = () => {
  //new msg
  const newMessage = messages.lastElementChild;

  const newMassageStyle = getComputedStyle(newMessage);
  const newMessageMargin = parseInt(newMassageStyle.marginBottom);
  //get the heigth of above msg
  const newMessageHeight = newMessage.offsetHeight + newMessageMargin;

  //visible height
  const visibleHeight = messages.offsetHeight;

  //height of message contaner
  const containerHeight = messages.scrollHeight;

  //how far i scrolled?
  const scrollOffset = messages.scrollTop + visibleHeight;

  if (containerHeight - newMessageHeight <= scrollOffset) {
    messages.scrollTop = messages.scrollHeight;
  }
};

socket.on("message", (message) => {
  console.log(message);
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
  autoScroll();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  button.setAttribute("disabled", "disabled");

  const msg = document.querySelector("#input").value;

  socket.emit("SendMsg", msg, (error) => {
    button.removeAttribute("disabled");
    input.value = "";
    input.focus();

    if (error) {
      return console.log(error);
    }

    console.log("message delivered");
  });
});

sendlocation.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }
  sendlocation.setAttribute("disabled", "disabled");
  navigator.geolocation.getCurrentPosition((position) => {
    const location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };

    socket.emit("sendLocation", location, () => {
      sendlocation.removeAttribute("disabled");
      console.log("Location Shared");
    });
  });
});

socket.on("locationMessage", (locationMessage) => {
  console.log(locationMessage);
  const html = Mustache.render(locationTemplate, {
    username: locationMessage.username,
    url: locationMessage.url,
    createdAt: moment(locationMessage.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
  autoScroll();
});

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});

socket.on("roomData", ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, {
    room,
    users,
  });
  document.querySelector("#sidebar").innerHTML = html;
});
