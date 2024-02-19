//  // Function to handle form submission (login)
//  document.getElementById("loginForm").addEventListener("submit", function(event) {
//      event.preventDefault(); // Prevent default form submission
    
//      // Get input values
//      const username = document.getElementById("username").value;
//      const password = document.getElementById("password").value;
    
//      // Simulated authentication (replace with actual authentication logic)
//      if (username === "manager" && password === "password") {
//        document.getElementById("loginMessage").textContent = alert("Login successful!");
//        // Display data and analysis sections after successful login
//        document.getElementById("data").style.display = "block";
//        document.getElementById("analysis").style.display = "block";
//        window.location.href = "data.html"; // Redirect to data page after login
//      } else {
//        document.getElementById("loginMessage").textContent = alert("Invalid credentials. Please try again.");
//      }
//    });
  
   // Simulated data display (replace with actual data visualization)
  //  const dataDisplay = document.getElementById("dataDisplay");
  //  dataDisplay.innerHTML = "<p>Data visualization elements will be displayed here.</p>";
  
  //  // Simulated algorithm result (replace with actual algorithm integration)
  //  const algorithmResult = document.getElementById("algorithmResult");
  //  algorithmResult.innerHTML = "<p>Algorithm result will be displayed here after analysis.</p>";
  
// Function to open the login modal
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  // Function to close the login modal
  function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  // Function to handle form submission (login)
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simulated authentication (replace with actual authentication logic)
    if (username === "manager" && password === "password") {
      document.getElementById("loginMessage").textContent = alert("Login successful!");
      closeLoginModal(); // Close the login modal after successful login
      window.location.href = "data.html"; // Redirect to data page after login
    } else {
      document.getElementById("loginMessage").textContent = alert("Invalid credentials. Please try again.");
    }
  });
  