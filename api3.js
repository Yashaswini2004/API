let url="https://icanhazdadjoke.com/";
async function getJoke(){
    try{
        const con={headers:{Accept:"application/json"}};
        let res=await axios.get(url);
        console.log(res.data);
    }
    catch(e){
        console.log(e);
    }
}