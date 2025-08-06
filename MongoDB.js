// Se usa la base de datos
use streamhub


// Se inserta el primer usuario con el historial a la base de datos
db.usuarios.insertOne({
    _id: "usuario_101",
    nombre: "Elena",
    correo: "elena@example.com",
    generos_preferidos: ["Drama", "Fantasía"],
    historial: [
    {
      id_historial: "hist_101_1",
      id_contenido: "1PS1",
      fecha: "2025-08-04 20:00:00",
      ultima_duracion: 70,
      episodio: null,
      temporada: null
    }
  ]
})

// Se inserta varios contenidos (peliculas/series)
db.contenido.insertMany([
  {
    _id: "1PS10", // Pelicula
    tipo: "pelicula",
    titulo: "El Origen del Tiempo",
    duracion: 123,
    anio: 2023,
    generos: ["Fantasía", "Ciencia ficción"],
    valoraciones: [
      {
        id_usuario: "usuario_101",
        puntuacion: 4,
        fecha: "2025-08-01 18:20:00"
      }
    ],
    comentarios: [
      {
        id_usuario: "usuario_101",
        comentario: "Muy creativa y profunda",
        episodio: null,
        fecha: "2025-08-01 18:25:00"
      }
    ]
  },
  {
    _id: "2PS10",// Serie
    tipo: "serie",
    titulo: "Sombras del Futuro",
    duracion: 48,
    anio: 2022,
    generos: ["Acción", "Suspenso"],
    valoraciones: [
      {
        id_usuario: "usuario_101",
        puntuacion: 4,
        fecha: "2025-08-01 18:20:00"
      }
    ],
    comentarios: [
        {
            id_usuario: "usuario_101",
            comentario: "Muy creativa y profunda",
            episodio: null,
            fecha: "2025-08-01 18:25:00"
        }
    ]
  }
])

// Aqui estaria como fue insertada la lista de reproducción

db.listas_reproduccion.insertOne({
  _id: "lista_101", // Estos IDs son definidos por Mongo entonces mejor los dejo asi aunque tenian el identificador de cada uno por ejemplo id_usuario
  id_usuario: "usuario_101",
  nombre_lista: "Favoritas 2025",
  contenido: [
    {
      id_contenido: "1PS10",
      episodio: null,
      capitulo: null
    },
    {
      id_contenido: "2PS10",
      episodio: null,
      capitulo: null
    }
  ]
})

// Varios ejemplos donde utilizariamos el find

//pelicula que dura dos horas
db.contenido.find({
  tipo: "pelicula",
  duracion: { $gt: 120 }
})

// peliculas del genero Terror
db.contenido.find({
  generos: { $in: ["Terror"] }
})

//usuarios terminados en @gmail.com

db.usuarios.find({
  correo: { $regex: /@gmail\.com$/ }
})


// Para actualizar 

// Para cambiar la calificaion

db.contenido.updateOne(
  { _id: "1PS001" }, 
  { $set: { calificacion: 9 } }
)

// o para actualizar la caficacon de las peliculas de un genero en especifico

db.contenido.updateMany(
  { genero: "Ciencia Ficción" },
  { $inc: { calificacion: 1 } }
)


// Eliminar 

// Eliminar un usuario 
db.usuarios.deleteOne({ _id: "usuario_5" })

// Eliminar las calificaciones menores a 5

db.contenido.deleteMany({ calificacion: { $lt: 5 } })


// Creacion de index

db.contenido.createIndex({ titulo: 1 })
db.contenido.createIndex({ genero: 1 })


// Para ver todos los indices 

db.contenido.getIndexes()


// Agregaciones


// Las peliculas mas recientes 
db.contenido.aggregate([
  { $sort: { anio: -1 } },
  { $limit: 5 }, // las 5 primeras peliculas mas recientes
  { $project: { titulo: 1, anio: 1, _id: 0 } }
])


// contenido mas visto
db.usuarios.aggregate([
  { $unwind: "$historial" },
  { $group: {
      _id: "$historial.id_contenido",
      veces_visto: { $sum: 1 }
  }},
  { $sort: { veces_visto: -1 } }
])