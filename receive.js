async function getShare(){

    const code = document.getElementById("codeInput").value;

    if(code === ""){
        alert("Enter Code");
        return;
    }

    const response = await fetch(BASE_URL + "/share/" + code);

    const text = await response.text();

    document.getElementById("output").innerText = text;
}

function copyText(){

    const text =
        document.getElementById("output").innerText;

    navigator.clipboard.writeText(text);

    alert("Copied to clipboard!");
}