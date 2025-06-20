# Informe – Portafolio

## 1. ¿Qué hiciste? ¿Qué secciones tiene tu página?

Realicé mi portafolio tomando en cuenta la semántica, accesibilidad y SEO. El portafolio contiene las siguientes secciones:

1. **Cabecera (header)**: Con título principal, cita inspiradora y menú de navegación
2. **Sección Hero**: Presentación personal con avatar, descripción profesional y botones de acción
3. **Experiencia Profesional**: Detalle de los trabajos relevantes con tecnologías utilizadas
4. **Proyectos Destacados**: Muestra de trabajos realizados con sus características técnicas
5. **Contacto**: Información para ponerse en contacto y enlaces a redes profesionales
6. **Pie de página (footer)**: Información de copyright y cita final

## 2. ¿Qué etiquetas HTML usaste y por qué?

Utilicé las siguientes etiquetas HTML con estos propósitos:

- **Estructura semántica**:
  - `<header>`, `<main>`, `<footer>`: Para definir las áreas principales
  - `<section>`: Para agrupar contenido temático
  - `<article>`: Para cada experiencia laboral y proyecto (contenido independiente)
  - `<nav>`: Para los menús de navegación
  - `<figure>`: Para contener imágenes con su contexto
  - `<address>`: Para información de contacto

- **Accesibilidad**:
  - `role="banner"`, `role="main"`, etc.: Para mejorar la navegación con lectores de pantalla
  - `aria-labelledby`: Para asociar títulos con sus secciones
  - `aria-current="page"`: Para indicar la página actual
  - `loading="lazy"`: Para optimizar carga de imágenes

- **SEO**:
  - `<meta name="description">`: Descripción para motores de búsqueda
  - `<meta name="keywords">`: Palabras clave relevantes
  - `<link rel="canonical">`: Para evitar contenido duplicado
  - `<title>` descriptivo: Para mejorar los resultados de búsqueda

- **Organización de contenido**:
  - `<q>`: Para citas
  - `<time datetime="">`: Para fechas legibles por máquina
  - `<h1>`-`<h4>`: Jerarquía de encabezados clara
  - `<ul>` con `role="list"`: Para listas mejor identificadas

## 3. ¿Qué parte te costó más? ¿Qué aprendiste?

**Parte más desafiante**:
La implementación correcta de los roles ARIA y la estructura semántica para máxima accesibilidad fue lo más complejo. Determinar qué elementos necesitaban roles específicos y cómo organizar la jerarquía de encabezados para que fuera útil tanto para usuarios como para motores de búsqueda requirió investigación y pruebas.

**Lo que aprendí**:
1. La importancia de la estructura semántica no solo para SEO sino para accesibilidad
2. Cómo los roles ARIA mejoran la experiencia para usuarios con discapacidades
3. Que pequeños detalles como `rel="noopener noreferrer"` en enlaces externos son cruciales para seguridad
4. La diferencia entre usar `<div>` y elementos semánticos como `<article>` o `<section>`
5. Cómo los atributos como `loading="lazy"` pueden mejorar significativamente el rendimiento
6. La importancia de los metadatos para SEO y cómo afectan a la visibilidad del sitio

Este ejercicio me demostró que un HTML bien estructurado es la base para cualquier sitio web exitoso, tanto en términos de usabilidad como de posicionamiento.