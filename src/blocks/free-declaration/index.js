// components/FreeDeclaration/FreeDeclaration.jsx
import React from 'react';
import styles from './free-declaration.module.css';

export default function FreeDeclaration() {
  return (
    <section className={styles.container}>
      <div className={styles.section}>
        <div className={styles.free}>
          <p className={styles.text}>
            Новым клиентом подача
            <br />
            таможенной декларации
          </p>
          <span className={styles.title}>Бесплатно</span>
        </div>
      </div>
      <button className={styles.btn}>
        <span className={styles.btnText}>Оставить заявку</span>
        <div className={styles.circle} />
      </button>
    </section>
  );
}
