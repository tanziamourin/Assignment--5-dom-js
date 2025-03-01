//   theme button 
  const button = document.getElementById("change-color-btn");

  const colors = [
      "#F4EDD3", 
      "#FFE2E2", 
      "#E5D9F2", 
      "#E3F0AF", 
      "#B1F0F7"  
  ];

  button.addEventListener("click", function(event) {
    event.preventDefault();
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Change the background color
      document.body.style.backgroundColor = randomColor;
  });