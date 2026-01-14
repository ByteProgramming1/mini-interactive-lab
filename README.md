# Mini Lab – Plataforma Interactiva de Introducción a la Programación

## 🎯 Propósito
Reducir la barrera de entrada al desarrollo de software proporcionando un entorno de aprendizaje:
- Visual
- Interactivo
- Progresivo
- Libre de configuraciones complejas

El estudiante aprende programando desde el primer momento.

## 🧩 Estructura por niveles
Mini Lab está organizado en niveles temáticos que introducen progresivamente los conceptos fundamentales:

| Nivel | Tema     | Conceptos                             |
|-------|----------|---------------------------------------|
| 1     | Colores  | Variables, tipos de datos, valores    |
| 2     | Tamaños  | Unidades, números, propiedades visuales |
| 3     | Texto    | Cadenas, salida por consola           |
| 4     | Condiciones | Estructuras `if/else`              |
| 5     | Lógica   | Operadores lógicos                    |
| 6     | Funciones| Reutilización de código               |

Cada nivel incluye:
- Un editor de código
- Instrucciones guiadas
- Un panel visual de resultados
- Retroalimentación inmediata

## 🧠 Metodología educativa
Basada en:
- Aprendizaje activo
- Experimentación directa
- Retroalimentación inmediata
- Progresión incremental de dificultad

El estudiante no memoriza conceptos: los experimenta.

## ⚙️ Tecnologías
- React + Vite
- TailwindCSS
- Docker + Nginx

## 🐳 Despliegue con Docker

Requisitos: tener `Docker` y `docker-compose` instalados. Colocar en la raíz del proyecto los archivos `Dockerfile`, `nginx.conf` y `docker-compose.yml`.

1. Construir y levantar en segundo plano:
```bash
docker-compose up --build -d
```