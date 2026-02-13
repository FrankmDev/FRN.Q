# Hero Animation - Guía de Depuración

## Estado Actual del Código

He simplificado completamente la animación del Hero para hacerla más robusta.

## Verificación Paso a Paso

### 1. Abre la Consola del Navegador (F12)

### 2. Recarga la Página

### 3. Busca Estos Logs:

```
[Hero] Script loaded
[Preloader] Total lock time: XXX ms
[Preloader] Starting exit animation
[Preloader] Revealing curtains
[Preloader] Main content visible
[Preloader] Dispatching preloader-complete event
[Hero] Preloader complete event received
[Hero] animateHero called
[Hero] Letters found: X
[Hero] Starting animation NOW
[Hero] Animation STARTED
[Hero] Animation COMPLETE
```

## Si NO Ves el Título

### Prueba 1: Verifica GSAP

```javascript
console.log(typeof window.gsap); // Debe ser "function"
```

### Prueba 2: Verifica las Letras

```javascript
document.querySelectorAll("[data-letter]").length; // Debe ser > 0
```

### Prueba 3: Fuerza la Animación

```javascript
window.gsap.to(document.querySelectorAll("[data-letter]"), {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.05,
});
```

### Prueba 4: Verifica el CSS

```javascript
const letter = document.querySelector("[data-letter]");
console.log(window.getComputedStyle(letter).opacity);
console.log(window.getComputedStyle(letter).transform);
```

## Archivo de Prueba

Abre `test-hero-simple.html` directamente en el navegador para verificar que GSAP funciona.

## Timing Esperado

- 0s: Página carga
- 1.5-2s: Preloader termina
- 2s: Hero anima (o fallback)
- 3.3s: Animación completa
