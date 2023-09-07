export const getStatusBatch = (status, pickedStatus) => {
    let batchText = "Default"; // Default batch text
    let batchColor = "bg-blue-100 text-blue-800"; // Default batch color
  
    switch (status) {
      case 0:
        batchText = "Pending";
        break;
      case 1:
        batchText = pickedStatus === 0 ? "Approved" : "Assigned to Driver";
        break;
      case 2:
        batchText = "Driver on the way";
        batchColor = "bg-green-100 text-green-800";
        break;
      case 5:
        batchText = "Complete";
        batchColor = "bg-green-100 text-green-800";
        break;
      case 7:
        batchText = "Decline";
        batchColor = "bg-red-100 text-red-800";
        break;
      default:
        // Handle any other status codes here
        break;
    }
  
    // Return the batch HTML
    return `<span class="${batchColor} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:${batchColor.replace(
      "bg-",
      "dark:bg-"
    )} dark:text-${batchColor.includes("bg-blue") ? "blue" : batchColor.includes("bg-red") ? "red" : batchColor.includes("bg-green") ? "green" : batchColor.includes("bg-yellow") ? "yellow" : batchColor.includes("bg-indigo") ? "indigo" : batchColor.includes("bg-purple") ? "purple" : "pink"}-300">${batchText}</span>`;
  }