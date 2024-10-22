CHATGPT 4o
### Chat Transcript

**Fecha**: 2024-10-22  
**Usuario**: Desarrollador Frontend

---

**Usuario**: Como desarrollador frontend, debes crear una aplicación web con dos funcionalidades principales: stopwatch y countdown.

Debe contar con una pantalla de bienvenida para elegir una de las dos funcionalidades.
Estas funcionalidades debe estar expuestas con botones grandes, stopwatch de color verde y countdown de color rojo.
Al dar click en cada una de ellas se debe ocultar esta la pantalla de inicio y se debe mostrar la pantalla de la opción seleccionada.
En la pantalla de cada opción debe haber una opción para regresar al la pantalla inicial.

Funcionalidades de stopwatch: 
Visor del cronometro con hora, minuto y segundos.
Un Botón de inicio y un botón de limpiar 
El botón de inicio iniciará el cronometro, luego de ello su funcionalidad cambiará a pausar y/o continuar.
El botón de limpiar parará en cronometro y dejará en cero para volver a iniciar.

Funcionalidades de countdown:
Visor de la cuenta regresiva con hora, minuto y segundos.
Debe tener opciones predeterminadas del 0 al 9
Debe tener la opción set para dar setear el tiempo seleccionado
Una vez seleccionado el tiempo, se debe mostrar en el visor y aparecerán opciones de iniciar o limpiar.

Usa tailwind para los estilos.
Debes generar el código en dos archivos, intex.html y script.js
Usa javascript vanilla
Te proporciono 3 imágenes de un ejemplo.
Además te proporciono la url de ejemplo: https://www.online-stopwatch.com/

Usa buenas practicas de programación, principios solid, documenta el código.

Antes de iniciar hazme las preguntas necesarias que requieras antes de continuar.
Una vez generes el código, y te de el OK de finalizado, generarás un archivo prompts.md con la transcripción de este chat, incluyendo este mensaje y con el detalle del GPT usado.

---

**Asistente**: Aquí van algunas preguntas que podrían ayudar a clarificar los requisitos antes de empezar:

1. **Formatos de tiempo:** ¿Para el cronómetro y la cuenta regresiva, te gustaría incluir horas, minutos y segundos o solo minutos y segundos?
   
2. **Valores de cuenta regresiva predefinidos:** Mencionaste valores predefinidos del 0 al 9, ¿estos valores representan segundos, minutos o horas? ¿El tiempo se seleccionará solo en uno de esos niveles (ej. solo segundos o solo minutos), o podrá definirse en horas, minutos y segundos?

3. **Reseteo de cuenta regresiva:** ¿El botón de limpiar en la cuenta regresiva debería dejar el valor en cero o volver al valor que se seleccionó previamente?

4. **Comportamiento del botón “set” de cuenta regresiva:** Una vez que se establece el tiempo con el botón "set", ¿quieres que el usuario pueda ajustar el tiempo de nuevo sin detener la cuenta regresiva actual o tendría que limpiarse primero?

5. **Ejemplo visual:** Mencionas que proporcionarías imágenes de ejemplo, pero no veo ninguna. ¿Podrías describir el aspecto que esperas o aclarar algún detalle de la URL proporcionada?

---

**Usuario**: Proporciona imágenes como ejemplos visuales y responde las preguntas de aclaración.

---

**Asistente**: ¡Gracias por las imágenes! Ya tengo toda la información necesaria, así que procederé a crear la estructura de la aplicación web conforme a tus especificaciones. El código seguirá las mejores prácticas y principios SOLID.

Te avisaré cuando esté listo para tu revisión.

---

**Usuario**: Ok, genera el código

---

**Asistente**: [Se genera el código en HTML y JavaScript vanilla, siguiendo las mejores prácticas.]

---

**Usuario**: Todo está correcto.

---

**Asistente**: [Proceso de creación del archivo `prompts.md`]
