# Diagnóstico GSAP - Instrucciones

## 1. Verificar en Consola del Navegador

Abre el sitio y presiona F12 para abrir la consola. Busca estos mensajes:

```
[UnifiedGSAP] 🚀 Iniciando sistema de animaciones...
[UnifiedGSAP] ✅ GSAP 3.12.2 listo
[UnifiedGSAP] Animando X letras del Hero
[UnifiedGSAP] Hero animado ✓
[UnifiedGSAP] ✅ Sistema completamente inicializado
```

## 2. Comandos de Diagnóstico (pegar en consola)

```javascript
// Verificar estado de GSAP
console.log('GSAP disponible:', typeof gsap !== 'undefined');
console.log('ScrollTrigger disponible:', typeof ScrollTrigger !== 'undefined');
console.log('Versión GSAP:', gsap?.version);
console.log('UnifiedGSAP status:', window.UnifiedGSAP?.status);

// Verificar si hay letras para animar
console.log('Letras hero:', document.querySelectorAll('[data-letter]').length);

// Forzar animación manualmente
if (typeof gsap !== 'undefined') {
  gsap.to('[data-letter]', { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 });
}
```

## 3. Problemas Comunes

### Si no ves los mensajes de UnifiedGSAP:
- Verifica que no hay errores rojos en la consola
- Recarga con Ctrl+F5 (limpiar caché)

### Si las animaciones no funcionan:
- Verifica que el preloader se haya completado
- Mira si hay errores de CORS con GSAP CDN

### Si los números del About se quedan en 0:
- El counter animation usa GSAP - verifica que ScrollTrigger funcione
- Prueba hacer scroll hasta la sección About

## 4. Solución Rápida

Si nada funciona, ejecuta esto en consola para forzar todas las animaciones:

```javascript
gsap.set('[data-letter], [data-letter-shadow]', { y: 0, opacity: 1 });
gsap.set('.about-stat, .about-section, .tech-item', { y: 0, opacity: 1 });
gsap.set('[data-project-card]', { y: 0, opacity: 1 });
gsap.set('.service-row', { y: 0, opacity: 1 });
console.log('Elementos revelados manualmente');
```
