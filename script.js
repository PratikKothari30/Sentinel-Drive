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

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});


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


  ScrollReveal().reveal('.content', {
    delay: 300, // Delay in milliseconds before the animation starts
    distance: '50px', // Distance from the edge of the viewport at which the animation starts
    duration: 1000, // Duration of the animation in milliseconds
    easing: 'ease-in-out', // Easing function applied to the animation
    origin: 'bottom', // Origin of the animation (top, right, bottom, left)
    interval: 200 // Interval between individual elements being revealed
});

ScrollReveal().reveal('.image', {
  delay: 300, // Delay in milliseconds before the animation starts
  distance: '100px', // Distance from the edge of the viewport at which the animation starts
  duration: 1000, // Duration of the animation in milliseconds
  easing: 'ease-in-out', // Easing function applied to the animation
  origin: 'top', // Origin of the animation (top, right, bottom, left)
  interval: 200 // Interval between individual elements being revealed
});

ScrollReveal().reveal('.box-container', {
  delay: 300, // Delay in milliseconds before the animation starts
  distance: '150px', // Distance from the edge of the viewport at which the animation starts
  duration: 1000, // Duration of the animation in milliseconds
  easing: 'ease-in-out', // Easing function applied to the animation
  origin: 'left', // Origin of the animation (top, right, bottom, left)
  interval: 200 // Interval between individual elements being revealed
});

// Animation background
// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");

// function resize() {
//     var box = c.getBoundingClientRect();
//     c.width = box.width;
//     c.height = box.height;
// }

// var light = {
//     x: 160,
//     y: 200
// }

// var colors = ["#f5c156", "#e6616b", "#5cd3ad"];

// function drawLight() {
//     ctx.beginPath();
//     ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
//     var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
//     gradient.addColorStop(0, "#3b4654");
//     gradient.addColorStop(1, "#2c343f");
//     ctx.fillStyle = gradient;
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
//     gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
//     gradient.addColorStop(0, "#fff");
//     gradient.addColorStop(1, "#3b4654");
//     ctx.fillStyle = gradient;
//     ctx.fill();
// }

// function Box() {
//     this.half_size = Math.floor((Math.random() * 50) + 1);
//     this.x = Math.floor((Math.random() * c.width) + 1);
//     this.y = Math.floor((Math.random() * c.height) + 1);
//     this.r = Math.random() * Math.PI;
//     this.shadow_length = 2000;
//     this.color = colors[Math.floor((Math.random() * colors.length))];
  
//     this.getDots = function() {

//         var full = (Math.PI * 2) / 4;


//         var p1 = {
//             x: this.x + this.half_size * Math.sin(this.r),
//             y: this.y + this.half_size * Math.cos(this.r)
//         };
//         var p2 = {
//             x: this.x + this.half_size * Math.sin(this.r + full),
//             y: this.y + this.half_size * Math.cos(this.r + full)
//         };
//         var p3 = {
//             x: this.x + this.half_size * Math.sin(this.r + full * 2),
//             y: this.y + this.half_size * Math.cos(this.r + full * 2)
//         };
//         var p4 = {
//             x: this.x + this.half_size * Math.sin(this.r + full * 3),
//             y: this.y + this.half_size * Math.cos(this.r + full * 3)
//         };

//         return {
//             p1: p1,
//             p2: p2,
//             p3: p3,
//             p4: p4
//         };
//     }
//     this.rotate = function() {
//         var speed = (60 - this.half_size) / 20;
//         this.r += speed * 0.002;
//         this.x += speed;
//         this.y += speed;
//     }
//     this.draw = function() {
//         var dots = this.getDots();
//         ctx.beginPath();
//         ctx.moveTo(dots.p1.x, dots.p1.y);
//         ctx.lineTo(dots.p2.x, dots.p2.y);
//         ctx.lineTo(dots.p3.x, dots.p3.y);
//         ctx.lineTo(dots.p4.x, dots.p4.y);
//         ctx.fillStyle = this.color;
//         ctx.fill();


//         if (this.y - this.half_size > c.height) {
//             this.y -= c.height + 100;
//         }
//         if (this.x - this.half_size > c.width) {
//             this.x -= c.width + 100;
//         }
//     }
//     this.drawShadow = function() {
//         var dots = this.getDots();
//         var angles = [];
//         var points = [];

//         for (dot in dots) {
//             var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
//             var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
//             var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
//             angles.push(angle);
//             points.push({
//                 endX: endX,
//                 endY: endY,
//                 startX: dots[dot].x,
//                 startY: dots[dot].y
//             });
//         };

//         for (var i = points.length - 1; i >= 0; i--) {
//             var n = i == 3 ? 0 : i + 1;
//             ctx.beginPath();
//             ctx.moveTo(points[i].startX, points[i].startY);
//             ctx.lineTo(points[n].startX, points[n].startY);
//             ctx.lineTo(points[n].endX, points[n].endY);
//             ctx.lineTo(points[i].endX, points[i].endY);
//             ctx.fillStyle = "#2c343f";
//             ctx.fill();
//         };
//     }
// }

// var boxes = [];

// function draw() {
//     ctx.clearRect(0, 0, c.width, c.height);
//     drawLight();

//     for (var i = 0; i < boxes.length; i++) {
//         boxes[i].rotate();
//         boxes[i].drawShadow();
//     };
//     for (var i = 0; i < boxes.length; i++) {
//         collisionDetection(i)
//         boxes[i].draw();
//     };
//     requestAnimationFrame(draw);
// }

// resize();
// draw();

// while (boxes.length < 14) {
//     boxes.push(new Box());
// }

// window.onresize = resize;
// c.onmousemove = function(e) {
//     light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
//     light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
// }


// function collisionDetection(b){
// 	for (var i = boxes.length - 1; i >= 0; i--) {
// 		if(i != b){	
// 			var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
// 			var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
// 			var d = Math.sqrt(dx * dx + dy * dy);
// 			if (d < boxes[b].half_size + boxes[i].half_size) {
// 			    boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
// 			    boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
// 			}
// 		}
// 	}
// }