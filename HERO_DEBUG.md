# Hero Animation - Guía de Depuración

## Cambios Aplicados

1. **CSS inicial**: Todas las letras y elementos empiezan ocultos
2. **Script simplificado**: Usa `window.gsap` directamente
3. **Logs detallados**: Para rastrear cada paso
4. **Fallback automático**: Se activa después de 2 segundos

## Verificación

1. Abre la consola (F12)
2. Recarga la página
3. Busca estos logs:

```
[Hero] Script loaded
[Hero] Preloader complete event received
[Hero] animateHero called
[Hero] Letters found: 5
[Hero] Starting animation NOW
[Hero] Animation STARTED
[Hero] Animation COMPLETE
```

## Pruebas Manuales

Si no ves el título, ejecuta en la consola:

```javascript
// 1. Verifica GSAP
console.log(typeof window.gsap);

// 2. Verifica letras
console.log(document.querySelectorAll("[data-letter]").length);

// 3. Fuerza animación
window.gsap.to(document.querySelectorAll("[data-letter]"), {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.05,
});
```

## Archivo de Prueba

Abre `test-hero-simple.html` en el navegador para verificar GSAP básico.
