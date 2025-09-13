# Kasa Email Templates

Templates de email para Kasa usando React Email y Resend.

## 📁 Estructura del Proyecto

```
kasa-emails-template/
├── templates/
│   └── welcome-kasa/
│       └── index.tsx          # Template de bienvenida
├── examples/
│   └── resend-usage.js        # Ejemplo de implementación
├── dist/
│   └── kasa-styles.css        # Estilos custom de Kasa
├── src/
│   └── input.css              # Archivo fuente de Tailwind
├── kasa-theme.js              # Configuración de tema
├── tailwind.config.js         # Configuración de Tailwind
└── package.json
```

## 🚀 Instalación

```bash
npm install
```

## 📧 Templates Disponibles

### WelcomeKasaEmail

Template de bienvenida para nuevos usuarios de Kasa.

#### Props disponibles:

- `userName` (requerido): Nombre del usuario
- `ctaLink`: Link principal de acción
- `propertiesLink`: Link a propiedades
- `supportEmail`: Email de soporte
- `facebookLink`, `instagramLink`, `linkedinLink`, `twitterLink`: Redes sociales
- `unsubscribeLink`: Link de desuscripción
- `currentYear`: Año actual
- `companyName`: Nombre de la empresa
- `companyAddress`: Dirección de la empresa

## 💻 Uso con Resend

```javascript
import { Resend } from 'resend';
import { WelcomeKasaEmail } from './templates/welcome-kasa/index.tsx';

const resend = new Resend('tu_api_key');

await resend.emails.send({
  from: 'Kasa <onboarding@inviertekasa.com>',
  to: ['usuario@ejemplo.com'],
  subject: 'Bienvenido a Kasa',
  react: WelcomeKasaEmail({
    userName: 'Juan Pérez'
  })
});
```

## 🎨 Colores de Marca

- `--kasa-green`: #00CC65
- `--kasa-green-dark`: #059669  
- `--kasa-background`: #101A28

## 🛠 Desarrollo

Los templates están construidos usando:

- [React Email](https://react.email/) para la estructura
- [Resend](https://resend.com/) para el envío
- Tailwind CSS para estilos base
- Variables CSS custom para colores de marca

## 📱 Responsive Design

Los templates están optimizados para:
- Desktop
- Mobile (responsivo automático)
- Clientes de email populares