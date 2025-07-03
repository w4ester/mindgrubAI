Reveal.initialize({ hash:true, slideNumber:true });

/* simple pie for revenue split */
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('revPie');
  if (!ctx) return;
  new Chart(ctx,{
    type:'pie',
    data:{
      labels:['Tier III Sites','AI Audits','Retainers'],
      datasets:[{
        data:[800,150,60],
        backgroundColor:['#00d26a','#009dff','#ffb000'],
      }]
    },
    options:{plugins:{legend:{display:false}}}
  });
});