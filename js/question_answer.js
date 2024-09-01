const questionInput = document.querySelector('.question-input');
const submitBtn = document.querySelector('.submit-btn');
const popup = document.getElementById('popup');

submitBtn.addEventListener('click', () => {
  const question = questionInput.value.trim();

  if (question) {
    sendQuestion(question)
      .then(() => showPopup('Ваше запитання успішно відправлено!', 3000))
      .catch(() => showPopup('Сталася помилка під час надсилання запитання. Будь ласка, спробуйте ще раз', 3000));
  } else {
    showPopup('Будь ласка, введіть ваше запитання', 3000);
  }
});

function sendQuestion(question) {
  return new Promise((resolve, reject) => {
    fetch('/submit-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Сталася помилка під час надсилання запитання');
        }
      })
      .then(data => {
        console.log(data);
        resolve();
      })
      .catch(error => {
        console.error(error);
        reject();
      });
  });
}

function showPopup(message, duration) {
  popup.textContent = message;
  popup.style.display = 'block';

  setTimeout(() => {
    popup.style.display = 'none';
  }, duration);
}


const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Настройки для отправки электронных писем
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Замените на ваш email
    pass: 'your-email-password' // Замените на ваш пароль
  }
});

// Middleware для парсинга JSON данных
app.use(express.json());

// Путь для отправки вопроса
app.post('/submit-question', (req, res) => {
  const question = req.body.question;

  if (!question) {
    return res.status(400).send('Запитання не може бути порожнім');
  }

  // Отправка электронного письма с вопросом
  const mailOptions = {
    from: 'your-email@gmail.com', // Замените на ваш email
    to: 'recipient-email@example.com', // Замените на email получателя
    subject: 'Новый вопрос',
    text: `Вопрос: ${question}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Сталася помилка під час надсилання запитання');
    }
    console.log('Email sent: ' + info.response);
    res.send('Ваше запитання успішно надіслано');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});