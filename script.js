const countdown = () => {
  const endDate = new Date("Sep 20, 2025 23:59:59").getTime();
  const now = new Date().getTime();
  const diff = endDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "Offer Expired!";
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  const mins = Math.floor((diff % (1000*60*60))/(1000*60));
  const secs = Math.floor((diff % (1000*60))/1000);

  document.getElementById("timer").innerHTML = 
    ${days}d : ${hours}h : ${mins}m : ${secs}s;
}
setInterval(countdown, 1000);