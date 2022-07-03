document.querySelector('button').addEventListener('click', function(){
  let num = document.querySelector('.one').value
  if(isNaN(num)) return
  if(num<0) return
  if(num>100) return
  document.querySelector('.two').textContent = 2022 - num
})