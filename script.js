// Chat-Form Steps
function nextStep(current) {
  document.getElementById('step' + current).style.display = 'none';
  document.getElementById('step' + (current + 1)).style.display = 'block';
}

// Optional: Statusanzeige nach Versand
document.getElementById('auftragForm').addEventListener('submit', function(e){
  e.preventDefault();
  var form = e.target;
  var status = document.getElementById('chatStatus');
  status.textContent = "Versende Auftrag …";
  var data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok){
      status.textContent = "Danke, Auftrag gesendet!";
      form.reset();
      document.querySelectorAll('.chat-step').forEach((el,i) => el.style.display = i==0?'block':'none');
    }else{
      status.textContent = "Fehler, bitte erneut versuchen.";
    }
  }).catch(()=>{
    status.textContent = "Netzwerkfehler, prüfe deine Verbindung.";
  });
});