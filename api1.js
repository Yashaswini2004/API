let url = "https://icanhazdadjoke.com/slack";
let btn = document.querySelector("#get-facts");

btn.addEventListener("click", async () => {
    let par = document.querySelector("#result");
    try {
        let data = await getFacts();
        par.innerText = data;
    } catch (e) {
        par.innerText = "Error fetching data. Please try again later.";
        console.error(e);
    }
});

async function getFacts() {
    try {
        let res = await axios.get(url, { headers: { Accept: "application/json" } });
        return res.data.attachments[0].text; // Extract the joke text
    } catch (e) {
        throw new Error("Failed to fetch data from the API.");
    }
}
