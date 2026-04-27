// 💌 OPEN SCREEN
function openInvite() {
    document.getElementById("inviteScreen").style.display = "none";

    const music = document.getElementById("bgMusic");
    music.play().catch(()=>{});
}

// ⏳ COUNTDOWN
const date = new Date("May 1, 2026 11:15:00").getTime();

setInterval(()=>{
    let now = new Date().getTime();
    let gap = date - now;

    let d = Math.floor(gap/(1000*60*60*24));
    let h = Math.floor((gap/(1000*60*60))%24);
    let m = Math.floor((gap/(1000*60))%60);
    let s = Math.floor((gap/1000)%60);

    document.getElementById("countdown").innerHTML =
    `⏳ ${d}d ${h}h ${m}m ${s}s`;

},1000);

// 📩 RSVP
function submitWish(){
    let name=document.getElementById("name").value;
    let msg=document.getElementById("message").value;

    let wishes=JSON.parse(localStorage.getItem("wishes"))||[];
    wishes.push({name,msg});
    localStorage.setItem("wishes",JSON.stringify(wishes));

    location.reload();
}

function playMusic(){
    document.getElementById("bgMusic").play();
}