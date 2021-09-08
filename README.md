# Summa Solutions FED Challenge 

Proyecto hecho para Summa Solutions

Link al proyecto: https://frosty-einstein-afe5b6.netlify.app/ 

## Para comenzar, podés descargar o clonar este repositorio. 

## Para hacer funcionar este proyecto se requieren estos módulos y dependencias:

* npm modules (los módulos básicos que se descargan con Create React App)
* react-router-dom": "^5.3.0
* node-sass": "^6.0.1

## Recorrido inicial del proyecto

En la **Home**, o **Página Principal** se puede visualizar un título, un texto introductorio y el listado de productos. Este listado está compuesto de una imagen, el nombre del producto, su precio actual y precio anterior,además de un botón para ver detalles. 

Se puede acceder al detalle de cada producto haciendo click en el botón de cada "tarjeta". 

Dentro de la página **Detalle del Producto** se muestran la imagen del mismo, el nombre, ambos precios, una breve descripción y un botón de compra.  

## Estructura del proyecto

Para desarrollar este proyecto se armó un array de productos, que se encuentra dentro de la carpeta *Product Card*, en el que se ubican los nombres, precios, descripción e imágenes de cada producto.  

Al momento de realizar el llamado al array se decidió agregar un setTimeOut, para simular el tiempo de respuesta desde una API o base de datos. 

Todo el proyecto es *responsive*, tanto la Página Principal, como la página de Detalle del Producto. Está pensado para poder visualizarse tanto en Mobile y Tablet, así como en PCs de escritorio. 

Para eso, se determinaron tres "break-points", buscando abarcar los tres principales tamaños de pantalla: 

* Mobile: hasta 480px
* Tablet o celular horizontal: 600px
* PCs de Escritorio o Notebooks: desde 1024px

Al modificar el tamaño de la pantalla, pasando de tamaño PC a tamaño Mobile vertical (480px), el texto del botón **Ver Detalles** se transforma en el texto **Comprar**

## React-Router-Dom

Para poder crear las rutas, tanto estáticas como dinámicas, de la página web, se usó *React-router-dom*. 

## SASS

Para el diseño del proyecto se utilizó *SASS*. 

----

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
