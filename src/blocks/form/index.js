// components/Form.jsx
'use client';

import { useState, useRef } from 'react';
import { IMaskInput } from 'react-imask';
import styles from './form.module.css';

export default function Form() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneAccept = value => {
    setForm(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formEl = formRef.current;

    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className={styles.blockWrapper} id="form">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Оставьте заявку на сотрудничество</h2>
        <hr className={styles.divider} />

        <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
          {/* Шаг 1: Контакты */}
          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>1</span>
              <span className={styles.stepLabel}>Ваши контакты</span>
            </div>
            <div className={styles.fieldsRow}>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={form.name}
                onChange={handleChange}
                className={styles.input}
                required
                minLength={2}
              />

              <IMaskInput
                mask="+7 (000) 000-00-00"
                unmask={false}
                value={form.phone}
                onAccept={handlePhoneAccept}
                name="phone"
                placeholder="+7 (___) ___-__-__"
                className={styles.input}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Введите корректный email"
              />
            </div>
          </div>

          <hr className={styles.divider} />

          {/* Шаг 2: Сообщение */}
          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>2</span>
              <span className={styles.stepLabel}>Сообщение или вопрос</span>
            </div>
            <textarea
              name="message"
              placeholder="Текст сообщения"
              value={form.message}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Отправка...' : 'Отправить заявку'}
          </button>

          {status === 'success' && (
            <p className={styles.success}>Спасибо! Мы свяжемся с вами.</p>
          )}
          {status === 'error' && (
            <p className={styles.error}>Ошибка отправки. Попробуйте позже.</p>
          )}
        </form>
      </div>
    </section>
  );
}
