## Descripción

Interfaz de usuario en VueJS para proponer la solución al desafío técnico de Creditú

## Instalar dependencias
```bash
npm install
```

## Levantar servidor de la aplicación
```bash
npm run serve
```

### Ejecutar pruebas unitarias
```bash
npm run test:unit
```

## Ver cobertura de código de pruebas unitarias
```bash
npm run test:cov
```

## Ejecutar pruebas end to end
```bash
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

## Levantar contenerdor docker con el servidor que expone la interfaz de usuario
Es necesario tener la API expuesta en el puerto 3000
```bash
docker run -it -p 8080:80 creditucsalazar/creditu-players-assessment-ui
```

## Levantar solución completa usando docker compose
Es necesario editar el archivo docker-compose.yml en la línea 16 con las credenciales de la base de datos
```bash
docker-compose up
```
