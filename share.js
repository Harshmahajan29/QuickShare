async function generateCode() {

    const text = document.getElementById("textInput").value;

    if(text === ""){
        alert("Please enter text");
        return;
    }

    const response = await fetch(BASE_URL + "/share", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            text:text
        })
    });

    const code = await response.text();

    document.getElementById("result").innerText =
        "Share Code: " + code;
}