let btn = document.querySelector("#get-image");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    try {
        let link = await getImage(url); // Pass the URL to the function
        let img = document.querySelector("#res");
        img.setAttribute("src", link); // Set the image source to the fetched link
    } catch (error) {
        console.error("Error fetching the image:", error);
    }
});

async function getImage(url) {
    try {
        let response = await axios.get(url);
        return response.data.message; // Extract the image link from the API response
    } catch (error) {
        console.error("Error in getImage function:", error);
        return ""; // Return an empty string if there's an error
    }
}

