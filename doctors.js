let Details = document.querySelectorAll(".details");

for (let i = 0; i < Details.length; i++) {
  Details[i].addEventListener("click", function () {
    window.open(
      "https://thingspeak.com/channels/2553914",
      "_blank",
      "width=1000,height=800"
    );
  });
}


// https://api.thingspeak.com/channels/2553914/feeds.json?api_key=G1YJUYG60YSDE0JF&results=2