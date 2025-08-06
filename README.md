# 📺 StreamHub - Base de Datos NoSQL (MongoDB)

Este proyecto es un ejemplo de una base de datos NoSQL para una plataforma de streaming llamada **StreamHub**, diseñada con MongoDB. Se gestionan usuarios, contenidos (películas y series), historiales de reproducción y listas personalizadas.

---

## 📦 Estructura de la base de datos

### Colecciones principales:

- `usuarios`: contiene información de usuarios, incluyendo historial de visualización.
- `contenido`: almacena películas y series con detalles como género, duración, valoraciones y comentarios.
- `listas_reproduccion`: listas creadas por usuarios para organizar su contenido favorito.

---

## 🛠️ Comandos utilizados

### 1. Selección de base de datos

### 2. Insertar documentos
```js
use streamhub
*2. Insertar documentos
Usuarios
js
Copiar
Editar
db.usuarios.insertOne({
  _id: "usuario_001",
  nombre: "Pepito",
  correo: "pepito@gmail.com",
  generos_preferidos: ["Acción", "Aventura", "Comedia"],
  historial: [
    { id_pelicula: "pelicula_001", fecha: ISODate("2025-08-01T10:00:00Z") },
    { id_pelicula: "pelicula_002", fecha: ISODate("2025-08-02T12:00:00Z") },
    { id_pelicula: "pelicula_003", fecha: ISODate("2025-08-03T14:00:00Z") },
    { id_pelicula: "pelicula_004", fecha: ISODate("2025-08-04T15:30:00Z") },
    { id_pelicula: "pelicula_005", fecha: ISODate("2025-08-05T17:00:00Z") }
  ]
})
```
