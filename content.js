// Function to add the "Mapa" button to the navigation menu
function addMapButton() {
    // Avoid duplicate buttons
    if (document.querySelector("#map-button")) return;
  
    // Locate the navigation menu by its role or other identifying features
    const menuContainer = document.querySelector('div[role="list"]') || document.querySelector('.qogDvd');
  
    if (!menuContainer) {
      console.warn("Menu container not found. Retrying...");
      return; // Exit if the menu is not found
    }
  
    console.log("Menu container found:", menuContainer);
  
    // Create the button
    const button = document.createElement("a");
    button.id = "map-button";
    button.innerText = "Mapa";
    button.href = `https://www.google.com/maps?q=${encodeURIComponent(document.title)}`;
    button.target = "_blank"; // Open in a new tab
    button.setAttribute("role", "link");
    button.setAttribute("aria-label", "Mapa");
  
    // Add styles inline to prevent dependency on external classes
    button.style.display = "inline-block";
    button.style.padding = "6px 12px";
    button.style.margin = "5px";
    button.style.textDecoration = "none";
    button.style.color = "#1a73e8"; // Matches Google's link color
    button.style.fontSize = "14px";
    button.style.lineHeight = "22px";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";
  
    // Add hover effect
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#f1f3f4";
    });
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "transparent";
    });
  
    // Wrap the button in a div (to mimic other menu items)
    const buttonWrapper = document.createElement("div");
    buttonWrapper.role = "listitem";
    buttonWrapper.style.display = "inline-block"; // Matches layout
    buttonWrapper.appendChild(button);
  
    // Insert the button at the beginning of the navigation menu
    menuContainer.insertBefore(buttonWrapper, menuContainer.firstChild);
  
    console.log("Mapa button added successfully.");
  }
  
  // Initialize a MutationObserver to handle dynamic changes
  const observer = new MutationObserver(() => {
    addMapButton(); // Retry adding the button on DOM changes
  });
  
  // Start observing the entire document for changes
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Attempt initial injection
  addMapButton();
  