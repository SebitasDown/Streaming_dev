# 📺 StreamHub - Base de Datos NoSQL (MongoDB)

Este proyecto representa la estructura de una base de datos NoSQL para una plataforma de streaming llamada **StreamHub**. La base fue diseñada en MongoDB y permite gestionar información de usuarios, contenido multimedia, historiales de visualización y listas de reproducción.

## Colecciones principales 📦

- **usuarios**: almacena los datos de cada usuario, incluyendo sus preferencias de género y su historial de películas vistas.  
- **contenido**: contiene información sobre películas y series como título, género, duración, calificación y comentarios.  
- **listas_reproduccion**: guarda las listas personalizadas que crean los usuarios con su contenido favorito.  

## Acciones realizadas 🛠️

- Se seleccionó la base de datos principal.  
- Se insertaron documentos para representar usuarios, contenido y listas.  
- Se consultaron los historiales para obtener recomendaciones personalizadas.  
- Se identificó el contenido más reciente visto por cada usuario.  
- Se relacionaron géneros comunes entre distintos usuarios para mejorar el sistema de sugerencias.  
