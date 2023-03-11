// var cnt=document.getElementById("count"); 
// var water=document.getElementById("water");
// var percent=cnt.innerText;
// var interval;
// interval=setInterval(function(){ 
//   percent++; 
//   cnt.innerHTML = percent; 
//   water.style.transform='translate(0'+','+(100-percent)+'%)';
//   if(percent==100){
//     clearInterval(interval);
//   }
// },60);




  // определяем переменную, которая будет хранить максимальную сумму
  var maxSum = 150000;

  // определяем функцию, которая будет считывать значение с JSON-файла и отображать его в виде заполненной жидкости
  function updateLiquid() {
    // отправляем запрос на получение данных с JSON-файла
    fetch('http://206.81.30.246/data.json', {cache: 'no-cache'})
      .then(response => response.json()) // преобразуем полученный ответ в объект JavaScript
      .then(data => { 
        
        var currentSum = data.sum; // получаем текущую сумму из данных
        console.log(data.donation)
        // вычисляем процент заполнения
        var percent = Math.floor(currentSum / maxSum * 100);
  
        // отображаем процент заполнения в элементе с идентификатором "count"
        var cnt = document.getElementById("count");
        cnt.innerText = currentSum + "₸";
        var top = document.getElementById("top-donation");
        var str =''
        var step = 0
        for (let key in data.donation) {
          if (step === 5) {
            break
          }
          str += `<div class="donation"><div class="top">${key}:</div><div class="bottom">${data.donation[key]} ₸</div></div>`
          step++
        }
        top.innerHTML = str
        // изменяем стиль элемента с идентификатором "water" для отображения заполнения жидкости
        var water = document.getElementById("water");
        water.style.transform = 'translate(0,' + (100 - percent) + '%)';
        console.log(data)
      })
      .catch(error => console.error(error));
  }
  
  // вызываем функцию в первый раз, чтобы отобразить начальное состояние
  updateLiquid();
  
  // запускаем функцию updateLiquid каждые 60 миллисекунд
  setInterval(updateLiquid, 10000  );
  
  
  