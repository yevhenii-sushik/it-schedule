function buttonUkrainianLanguage() {
    // Создаем элементы для каждой части кнопки
    const button = document.createElement('button');
    button.className = 'my-button';
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    const titleText = document.createElement('p');
    titleText.className = 'title-text';
    titleText.innerHTML = '<b>Культурологія</b>';
    const iconImg = document.createElement('img');
    iconImg.src = 'img/icon_next.png';
    iconImg.width = 25;
    iconImg.height = 25;
    iconImg.alt = '';
    const separatorDiv = document.createElement('div');
    separatorDiv.className = 'separator';
    const lineDiv = document.createElement('div');
    lineDiv.className = 'line';
    const circleDiv = document.createElement('div');
    circleDiv.className = 'circle';
    const teacherName = document.createElement('p');
    teacherName.className = 'teacher-name';
    teacherName.textContent = 'Супрун Л.О.';
    button.style.width = '420px';

    // Собираем структуру кнопки
    titleDiv.appendChild(titleText);
    titleDiv.appendChild(iconImg);
    separatorDiv.appendChild(lineDiv);
    separatorDiv.appendChild(circleDiv);
    button.appendChild(titleDiv);
    button.appendChild(separatorDiv);
    button.appendChild(teacherName);
  
    // Добавляем обработчик события onclick
    button.onclick = function() {
      // Укажите URL страницы, на которую нужно перейти
      window.location.href = 'cultural_studies.html';
    };
  
    // Находим место, куда нужно добавить кнопку в HTML (например, элемент с id="button-container")
    const container = document.getElementById('button-container');
  
    // Добавляем кнопку в контейнер
    container.appendChild(button);
  }
    
console.log("GAY")
buttonUkrainianLanguage()    

// buttonMath(){

// }

// buttonEnglish(){

// }

// buttonPhEducation(){

// }







// function mondayButtonOne(subject){
    
//     let subject = ""; 
    
//     if (subject == "") {
//         buttonUkrainianLanguage();

//     } else if (subject == "") {
        
//         buttonMath();

//     } else if (subject == "") {
        
//         buttonEnglish()

//     } else if (subject == "") {
        
//         buttonPhEducation()

//     } 
// }