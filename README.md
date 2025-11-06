# 💬 JSONPlaceholder Feed

**Proyecto:** `jsonfeed-react`  
**Autor:** Yamile Ochoa

## 📖 Descripción

JSONPlaceholder Feed es una pequeña aplicación desarrollada en React que consume datos de la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com).  
El objetivo es mostrar información simulada de usuarios y publicaciones mediante una interfaz sencilla y clara, incluyendo rutas separadas y navegación dinámica.

La aplicación cuenta con:

- Ruta **Home ("/")**: muestra un listado de usuarios con detalles básicos.
- Ruta **Entities ("/entities")**: muestra un listado de publicaciones con 3 propiedades de cada una.
- Navegación mediante React Router.
- Estilos aplicados con **Bootstrap** y diseño responsivo.

---

## ⚙️ Requisitos Funcionales

| Funcionalidad                         | Descripción                                                                                    | Puntos |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- | ------ |
| 🛠️ Configuración inicial del proyecto | Crear el proyecto con Vite, estructura base (componentes, rutas y estilos).                    | 2 pts  |
| 🌐 Consumo de API pública             | Obtener datos desde la API y mostrarlos en pantalla.                                           | 2 pts  |
| 🏠 Ruta “/” (Home)                    | Mostrar un hero con el nombre del proyecto, breve descripción y un listado simple de usuarios. | 2 pts  |
| 📜 Ruta “/entities”                   | Renderizar un listado mostrando 3 propiedades a elección de cada entidad.                      | 3 pts  |
| 🔗 Navegación                         | Implementar React Router para la navegación entre rutas.                                       | 2 pts  |
| 🎨 Estilos (opcional)                 | Aplicar un framework de estilos como Bootstrap o TailwindCSS.                                  | 1 pt   |

**Total:** 12 puntos

---

## 📂 Entregables

- **Repositorio en GitHub** con commits progresivos y descriptivos.
- **README** completo y bien estructurado.
- **Deploy funcional** de la aplicación.
- **Video corto (1–2 minutos)** mostrando:
  - La app en funcionamiento (rutas y consumo de API)
  - Código fuente (componentes principales)
  - Repositorio y deploy abiertos

---

## 🛠 Tecnologías usadas

- **React** (Vite)
- **React Router** para la navegación
- **Bootstrap 5** para estilos y diseño responsivo
- **JavaScript ES6+**
- **JSONPlaceholder API** para datos simulados

---

## 🚀 Pasos para ejecutar el proyecto localmente

1. Clonar el repositorio:
   ```bash
   git clone <https://github.com/YamileOchoa/jsonfeed-react.git>
   cd jsonfeed-react
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir el navegador en la URL que indique Vite (por defecto `http://localhost:5173`).

---

## 🌐 Deploy del Proyecto

El proyecto está publicado y accesible en **Netlify**:

[https://tu-proyecto-jsonfeed.netlify.app](https://inquisitive-sunflower-664764.netlify.app/) 

---

## 📹 Video demostrativo

Video corto mostrando el funcionamiento del proyecto, los componentes principales y el repositorio:

[https://youtu.be/tu-video-demo](https://youtu.be/jbV6KLI8qpY)

---

## 🧾 Rúbrica de Evaluación

| Criterio               | Descripción                                              | Puntos |
| ---------------------- | -------------------------------------------------------- | ------ |
| Requisitos funcionales | Cumple correctamente todos los puntos del desarrollo.    | 12 pts |
| Repositorio GitHub     | Commits descriptivos, README completo y bien presentado. | 2 pts  |
| Deploy funcional       | Aplicación desplegada correctamente y accesible.         | 2 pts  |
| Video demostrativo     | Muestra y explica brevemente el funcionamiento.          | 4 pts  |

**Total:** 20 puntos
