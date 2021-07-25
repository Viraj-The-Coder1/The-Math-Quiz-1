function login(){
    player_1 = document.getElementById("Q1").value;
    player_2 = document.getElementById("Q2").value;
    localStorage.setItem("MQ1", player_1);
    localStorage.setItem("MQ2", player_2);
}