// pages/api/contact.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone, email, message } = req.body;

  // Простая валидация
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const referer = req.headers.referer || 'Неизвестен';

  if (!botToken || !chatId) {
    console.error('Telegram config missing');
    return res.status(500).json({ error: 'Server configuration error' });
  }
  console.log({ chatId, botToken });

  // Формируем текст сообщения для Telegram (HTML-разметка)
  const text =
    `<b>Новая заявка с sftrans</b>\n` +
    `<b>Имя:</b> ${name}\n` +
    `<b>Телефон:</b> ${phone}\n` +
    `<b>Email:</b> ${email}\n` +
    `<b>Сообщение:</b>${message}\n`;

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      }
    );
    const tgData = await tgRes.json();

    if (!tgData.ok) {
      console.error('Telegram API error:', tgData);
      throw new Error('Telegram API error');
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
