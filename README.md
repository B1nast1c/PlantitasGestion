# Aplicación REST en Kubernetes
**Elaborado por: Valeria Goyzueta Torres**
***Asignación***: Elaboración de un informe en base a la implementación realizada para el examen final del curso de Computación Distribuida y Paralela.

# Implementación

Para la correcta implementación de la aplicación, así como la ejecución dentro de un emulador de celular, se deben seguir una serie de pasos que ayudarán a generar los pods y los servicios que ayudarán a que nuestros archivos ya implementados en la parte de la API, tengan efecto. exponiendo los puertos y accediendo a estos desde fuera. La serie de pasos es la siguiente: 

NOTA: Haber corrido previamente el comando `minikube start` que ayuda a darle inicio a nuesto cluster donde tanto los servicios como los deployment serán creados.

### PASO 1
Primero, dentro del directorio de **PlantsAPI,** existe una serie de archivos .yaml que permiten generar servicios que deberán ser expuestos, para que estos funcionen de manera correcta dentro de nuestro computador, estos archivos son los siguientes: server-deployment y mongo-deployment. El primero haciendo referencia a la API, y el segundo a la base de datos. 
Por cuestión de lógica lo que primero se va a generar es el deployment y el servicio de la base de datos, entonces, para realizar estas acciones, primero, dentro de este mismo directorio se debe crear la imagen de nuestra API, eso se logra con la siguiente serie de comandos **(todo esto dentro del directorio PlantsAPI, y debe hacerse lo mismo en el directorio USERS, pues hay imagenes para la base de datos de productos y otra para la de usuarios):** 

	docker build -t NOMBREDELAIMAGEN .
	docker tag NOMBREDELAIMAGEN NOMBREDEUSUARIO/NOMBREDELAIMAGEN:latest
	docker push NOMBREDEUSUARIO/NOMBREDELAIMAGEN:latest
	
 Lo que se realiza con esto es la subida de nuestra imagen hacia DockerHub:
<p align="center"><img src="Imagenes/DockerHub.jpg" width="400px" height="500px"></p>

 ### PASO 2
Una vez realizado ese procesos, se deberá ejecutar la siguiente serie de comandos para poder generar el los pods dentro de nuestro cluster en kubernetes 

	kubectl apply -f .\mongo-deployment.yml (Se espera a que el contenedor haya sido creado, esto con el comando **kubectl get pods**)
	kubectl apply -f .\server-deployment.yaml 
	kubectl get pods (Viendo el estado de los pods)
	
Imagen pods

 ### PASO 3
 Cambiamos de directorio y creamos el deployment del back para nuestros usarios, pues nuestra aplicación poseerá autenticación en base a una petición, mostrada más adelante en la implementación:
 
    kubectl apply -f .\server-deployment.yaml
 
 Imgen pods user
 ### PASO 4
 Se procede a la ejecución de nuestros servicios, exponiendo los puertos que hemos asignado dentro de nuestros archivos yaml. Para la ejecución del contenedor de nuestros productos correremos el siguiente comando, teniendo en consideración que nuestros pods ya han sido creados y cuya verificación ha sido ejecutada con el comando ya mencionado anteriormente
 - Comando para el back de los productos: `kubectl port-forward svc/server-service 9000:9000`
 - Comando para el back de los usuarios: `kubectl port-forward svc/user-service 900:9001`
 
 imagen port back 1
 impagen port back 2
 ### PASO 5
 Accederemos y verificaremos que nuestros servicios hayan sido implementados correctamente, para ello se usará una herramienta que se encargue de verificar las peticiones y devuelva los resultados, para esto y al haber ya expuesto los puertos, las peticiones no deben contener ningún error:
 
 Imagen get 9000

 Imagen get 9001

