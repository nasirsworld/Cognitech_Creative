document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

new Typed("#typing", {
  strings: ["Video Editing for Business", "Graphic Design"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});



//----------------Service Section---------------------------

  document.addEventListener("DOMContentLoaded", function () {
    function addScrollFunctionality(section) {
      const container = section.querySelector(".service-container");
      const leftBtn = section.querySelector(".scroll-btn.left");
      const rightBtn = section.querySelector(".scroll-btn.right");

      leftBtn.addEventListener("click", function () {
        container.scrollBy({ left: -200, behavior: "smooth" });
      });

      rightBtn.addEventListener("click", function () {
        container.scrollBy({ left: 200, behavior: "smooth" });
      });
    }

    document
      .querySelectorAll(".service-section")
      .forEach(addScrollFunctionality);
  });

  function updateActiveCard(sectionId, direction) {
    let container = document.getElementById(sectionId);
    let items = container.getElementsByClassName("service-item");
    let activeIndex = [...items].findIndex((item) =>
      item.classList.contains("active")
    );

    if (direction === "right" && activeIndex < items.length - 1) {
      items[activeIndex].classList.remove("active");
      items[activeIndex + 1].classList.add("active");
      container.scrollLeft += container.offsetWidth / 2;
    } else if (direction === "left" && activeIndex > 0) {
      items[activeIndex].classList.remove("active");
      items[activeIndex - 1].classList.add("active");
      container.scrollLeft -= container.offsetWidth / 2;
    }
  }

  // Attach event listeners to buttons
  document.querySelectorAll(".scroll-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      let sectionId =
        this.parentElement.querySelector(".service-container").id;
      let direction = this.classList.contains("right") ? "right" : "left";
      updateActiveCard(sectionId, direction);
    });
  });

  // Set first card as active on page load
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".service-container").forEach((container) => {
      container.querySelector(".service-item").classList.add("active");
    });
  });

  


//   ----------------------Team Section------------------------------------

  function updateActiveMember(direction) {
    let container = document.getElementById("team-container");
    let members = container.getElementsByClassName("team-member");
    let activeIndex = [...members].findIndex((member) =>
      member.classList.contains("active")
    );

    if (direction === "right" && activeIndex < members.length - 1) {
      members[activeIndex].classList.remove("active");
      members[activeIndex + 1].classList.add("active");
    } else if (direction === "left" && activeIndex > 0) {
      members[activeIndex].classList.remove("active");
      members[activeIndex - 1].classList.add("active");
    }

    // Center the container to keep the inactive members aligned
    let activeMember = document.querySelector(".team-member.active");
    let scrollAmount =
      activeMember.offsetLeft -
      container.offsetLeft -
      container.offsetWidth / 2 +
      activeMember.offsetWidth / 2;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }

  // Attach event listeners to buttons
  document.querySelectorAll(".team-scroll .scroll-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      let direction = this.classList.contains("right") ? "right" : "left";
      updateActiveMember(direction);
    });
  });

  // Set first team member as active on page load
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector("#team-container .team-member")
      .classList.add("active");
  });


//--------------------------Contact and Footer---------------------------------------->

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      fetch(
        "https://script.google.com/macros/s/AKfycbwI8PSJwQklMfPGvPuKt9o1jqpdJkaUC1XYsb2h5jrGODP3bY2kIKNig50tnIuzlIi8/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json()) // Parse JSON response
        .then((data) => {
          if (data.status === "success") {
            alert("Message sent successfully!");
          } else {
            alert("Error: " + data.message);
          }
        })
        .catch((error) => {
          alert("Error sending message: " + error);
        });
    });
