// Ejemplo de cómo usar el template WelcomeKasaEmail con Resend

import { Resend } from 'resend';
import { WelcomeKasaEmail } from '../templates/welcome-kasa/index.tsx';

const resend = new Resend('re_your_api_key');

async function sendWelcomeEmail() {
  try {
    const data = await resend.emails.send({
      from: 'Kasa <onboarding@inviertekasa.com>',
      to: ['user@example.com'],
      subject: 'Bienvenido a Kasa - ¡Ya eres parte de una nueva forma de invertir!',
      react: WelcomeKasaEmail({
        userName: 'María García',
        ctaLink: 'https://inviertekasa.com/dashboard',
        propertiesLink: 'https://inviertekasa.com/propiedades',
        supportEmail: 'soporte@inviertekasa.com',
        facebookLink: 'https://facebook.com/inviertekasa',
        instagramLink: 'https://instagram.com/inviertekasa',
        linkedinLink: 'https://linkedin.com/company/inviertekasa',
        twitterLink: 'https://twitter.com/inviertekasa',
        unsubscribeLink: 'https://inviertekasa.com/unsubscribe?token=xyz123',
        privacyLink: 'https://inviertekasa.com/privacy',
        termsLink: 'https://inviertekasa.com/terms',
        currentYear: '2025',
        companyName: 'Kasa Gestora SAC',
        companyAddress: 'Kasa - Calle Junin Mz GA Lt 41, La Molina, Lima, Perú'
      })
    });

    console.log('Email enviado:', data);
    return data;
  } catch (error) {
    console.error('Error enviando email:', error);
    throw error;
  }
}

// Función para envío masivo con diferentes usuarios
async function sendBulkWelcomeEmails(users) {
  const promises = users.map(user => 
    resend.emails.send({
      from: 'Kasa <onboarding@inviertekasa.com>',
      to: [user.email],
      subject: `¡Bienvenido a Kasa, ${user.name}!`,
      react: WelcomeKasaEmail({
        userName: user.name,
        ctaLink: `https://inviertekasa.com/dashboard?ref=${user.id}`,
        // ... otros parámetros
      })
    })
  );

  try {
    const results = await Promise.all(promises);
    console.log(`${results.length} emails enviados exitosamente`);
    return results;
  } catch (error) {
    console.error('Error en envío masivo:', error);
    throw error;
  }
}

export { sendWelcomeEmail, sendBulkWelcomeEmails };