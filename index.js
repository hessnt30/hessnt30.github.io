// https://mcapi.us/
// https://cindr.org/how-to-get-a-minecraft-servers-player-count-motd-and-status-using-javascript/
function initServerData(serverIp,serverPort){
    const serverIpElement = document.getElementById('server-ip');
    serverIpElement.innerHTML = serverIp;
    fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));

    function handleServerStatus(data){
        if(data.status=='error'){
            console.log(data.error);
            return false;
        }
        const motd = document.getElementById("motd");
        motd.innerHTML = data.motd_json;

        const playerCounter = document.getElementById("player-count");
        playerCounter.innerHTML = data.players.now;

        const logo = document.getElementById("server-icon");
        logo.src = data.favicon;

        // Read key
        for (var key in data) {
            if (key == "players" && data.players.now > 0 ){ // if the key is players and there are more than 0 players online
                for (i = data.players.now; i > 0; i--){ // loop through players
                    const node = document.createElement("li");
                    const textnode = document.createTextNode(data.players.sample[i - 1].name);
                    node.appendChild(textnode);
                    document.getElementById("player-list").appendChild(node);
                }
            }
            // console.log(key);
            // console.log(data[key]);
        }
    } 
}

initServerData("172.96.164.84","25625");


