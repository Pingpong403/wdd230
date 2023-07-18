// Meet and greet
/*
<div id="meet-n-greet">
    <p>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>
</div>
*/
var n = new Date();
var day = n.getDay();
if (day === 1 || day === 2)
{
    var parent = document.querySelector("#meet-n-greet");
    parent.innerHTML = "<p>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</p>";
}

// Hamburger menu
menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () =>
{
    document.querySelector("#navbar").classList.toggle('active');
    document.querySelector("#menu-open").classList.toggle('active');
    document.querySelector("#menu-close").classList.toggle('active');
});

// Current date
const datefield = document.querySelector("h2");
// for european/family history format with day first.
const datefieldUK = document.querySelector("aside");
const datemessage = document.querySelector("p");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.textContent = fulldate;

// Copyright and edited date
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastupdated = document.querySelector("#lastupdated");
lastupdated.textContent = document.lastModified;

// Lazy loading
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

// Last visited
if (!localStorage.getItem("lastVisit"))
{
    localStorage.setItem("lastVisit", Date.now());

    var message = "This is your first visit to this site!";
}
else
{
    var thisVisit = Date.now();
    var lastVisit = localStorage.getItem("lastVisit");

    var timeElapsed = thisVisit - lastVisit;
    timeElapsed /= 1000; // seconds
    timeElapsed /= 3600; // hours
    timeElapsed /= 24; // days
    if (timeElapsed > 1)
    {
        var message = `It has been ${Math.round(timeElapsed)} days since you last visited this site.`;
    }
    else
    {
        var message = "You have visited this site today.";
    }

    localStorage.setItem("lastVisit", Date.now());
}

document.querySelector("#visits").innerHTML = message;