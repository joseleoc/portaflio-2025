document.getElementById('themeToggle').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    
    // Opcional: guardar preferencia en localStorage
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Al cargar la página, aplicar tema guardado
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
  }