// // Function to handle form submission (algorithm)
// document.getElementById("algorithmForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission
    
//     // Get selected data value
//     const selectedData = document.getElementById("selectedData").value;
    
//     // Simulated algorithm analysis (replace with actual algorithm logic)
//     const algorithmResult = "Simulated result for " + selectedData;
    
//     // Display the algorithm result
//     document.getElementById("algorithmResult").innerHTML = `<p>${algorithmResult}</p>`;
//   });
  
//   // Function to handle logout
//   function logout() {
//     // Redirect to the login page
//     window.location.href = "index.html";
//   }

//   // Sample data (Replace this with your actual dataset)
// const dataValues = [10, 20, 30, 40, 50];
// const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];

// // Chart creation logic
// const ctx = document.getElementById('dataChart').getContext('2d');
// const dataChart = new Chart(ctx, {
//   type: 'bar', // Change the chart type as per your data
//   data: {
//     labels: labels,
//     datasets: [{
//       label: 'Data Analysis',
//       data: dataValues,
//       backgroundColor: 'rgba(54, 162, 235, 0.6)', // Change colors as needed
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 1
//     }]
//   },
//   options: {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

// // Function to handle file upload
// document.getElementById('uploadForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const fileInput = document.getElementById('fileInput');
//   const file = fileInput.files[0];

//   // Simulated data processing (replace this with actual data processing logic)
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function(event) {
//       const content = event.target.result;
//       // Process uploaded data (here, it's just displayed in console)
//       console.log('Uploaded file content:', content);
//     };
//     reader.readAsText(file);
//   }
// });

// // Function to simulate running the algorithm
// document.getElementById('runAlgorithm').addEventListener('click', function() {
//   // Simulated algorithm execution (replace with actual algorithm logic)
//   const algorithmResult = 'Algorithm result goes here';
//   document.getElementById('algorithmResult').innerText = algorithmResult;
// });

// JavaScript code for data.html

// Function to handle file upload
document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  // Simulated data processing (replace this with actual data processing logic)
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const content = event.target.result;
      // Process uploaded data (here, it's just displayed in console)
      console.log('Uploaded file content:', content);
    };
    reader.readAsText(file);
  }
});

// Function to simulate running the algorithm
document.getElementById('runAlgorithm').addEventListener('click', function() {
  // Simulated algorithm execution (replace with actual algorithm logic)
  const algorithmResult = 'Algorithm result goes here';
  document.getElementById('algorithmResult').innerText = algorithmResult;
});

// Add other JavaScript logic for data visualization, form submissions, etc.

// function handellogout(){
//   window.location.href = "index.html"; 
// }
