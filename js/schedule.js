document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

window.onbeforeprint = function() {
    return false;
}

document.addEventListener('keydown', function(event) {
    // Запрещаем просмотр кода с помощью комбинации клавиш
    if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 117)) {
        event.preventDefault();
    }
});

function resizeAndRedirect() {
    eel.resizeTo(1000, 800); // Вызов функции eel.resizeTo из Python
    window.location.href = 'all_schedule.html';
}


// Отключаем масштабирование для сенсорных устройств
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});

// Запрещаем масштабирование при прокрутке колесиком мыши
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
    }
}, { passive: false });

// Запрещаем масштабирование с помощью комбинаций клавиш
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '-')) {
        e.preventDefault();
    }
});



document.addEventListener('keydown', function(e) {
    // Список разрешенных комбинаций клавиш
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    // Если нажатая комбинация не в списке разрешенных, предотвращаем действие
    if (!allowedKeys[e.keyCode]) {
        e.preventDefault();
    }
});





const { Notification } = require('electron').remote;

    const notificationTimes = {
      0: [],
      1: [{ hour: 8, minute: 25 }, { hour: 9, minute: 55 }],
      2: [{ hour: 11, minute: 35 }, { hour: 13, minute: 5 }],
      3: [{ hour: 8, minute: 25 }, { hour: 13, minute: 5 }],
      4: [{ hour: 9, minute: 55 }],
      5: [{ hour: 16, minute: 40 }],
      6: []
    };

    function showNotification() {
      const currentDay = new Date().getDay();
      const currentHour = new Date().getHours();
      const currentMinute = new Date().getMinutes();

      const dayNotificationTimes = notificationTimes[currentDay];

      for (const time of dayNotificationTimes) {
        if (currentHour === time.hour && currentMinute === time.minute) {
          const notification = new Notification({
            title: 'Напоминание',
            body: 'Ты-дын! Это напоминание',
            icon: 'notification-icon.png'
          });

          const audio = new Audio('notification-sound.mp3');
          audio.play();

          notification.on('click', () => {
            console.log('Уведомление было нажато');
          });

          notification.on('close', () => {
            console.log('Уведомление закрыто');
          });

          setTimeout(() => {
            notification.close();
          }, 5000);
        }
      }
    }

    setInterval(showNotification, 60000);