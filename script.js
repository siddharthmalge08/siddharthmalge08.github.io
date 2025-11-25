function toggleMenu(){
  const m = document.getElementById('menu');
  if(!m) return;
  if(m.style.display==='flex') m.style.display='none'; else m.style.display='flex';
  m.style.flexDirection='column';
  m.style.background='linear-gradient(180deg, rgba(255,255,255,0.02), transparent)';
  m.style.padding='12px';
  m.style.borderRadius='8px';
}
function handleSubmit(e){
  e.preventDefault();
  const f=new FormData(e.target);
  alert('Thanks '+f.get('name')+" — we'll get back to you on "+f.get('email'));
  e.target.reset();
}
