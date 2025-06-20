# Informe – Portafolio con CSS

## Estilos aplicados
- **Variables CSS**: Se utilizaron variables para colores, sombras y efectos, permitiendo un tema claro/oscuro con `:root` y `.dark`.  
- **Diseño responsive**: Se implementó con `grid`, `flexbox` y media queries para adaptarse a móviles y escritorios.  
- **Efectos visuales**: Transiciones suaves (`transform`, `box-shadow`), bordes redondeados y sombras para tarjetas.  
- **Tipografía**: Fuentes legibles y jerarquía visual con `clamp()` para tamaños responsivos.  

## Selectores utilizados
- **Clases (`.bento-card`, `.header-title`)**: Para estilos reutilizables y componentes modulares.  
- **IDs (`#themeToggle`)**: Para elementos únicos como el botón de tema.  
- **Etiquetas (`body`, `ul`, `button`)**: Para estilos base y reset global.  
- **Atributos (`[aria-label]`)**: Mejoran accesibilidad sin afectar estilos.  

## Partes del diseño
- **Fácil**: La estructura con CSS Grid y Flexbox fue sencilla gracias a su manejo intuitivo.  
- **Difícil**: Ajustar el tema oscuro para mantener contraste y coherencia visual requirió más pruebas.  

## Aprendizajes clave
- **Variables CSS**: Facilitan el mantenimiento y los temas dinámicos.  
- **Accesibilidad**: Uso de `aria-label` y contraste adecuado.  
- **Responsive**: Media queries combinadas con unidades relativas (`clamp()`, `gap`).  
- **Transiciones**: Mejoran la experiencia de usuario con feedback visual.  