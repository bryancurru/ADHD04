
# TypeScript Guide

This repository contains a guide to understanding and working with TypeScript, along with answers to common questions about its use.

## Questions and Answers

### 1. ¿Qué es TypeScript?
**TypeScript** es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript que agrega tipos estáticos opcionales y otras características avanzadas al lenguaje, permitiendo una mejor verificación de errores durante el desarrollo.

### 2. ¿Qué ventajas ofrece TypeScript frente a JavaScript puro?
- **Tipado Estático**: Permite detectar errores en tiempo de compilación en lugar de en tiempo de ejecución.
- **Mejor Autocompletado y Navegación**: Gracias a los tipos, los editores de código pueden ofrecer un autocompletado y navegación más precisos.
- **Mantenibilidad**: Facilita la lectura y el mantenimiento del código al hacer explícitos los tipos de datos.
- **Características de ES6/ESNext**: Soporte para características de las últimas versiones de JavaScript, incluyendo módulos, async/await, y más.

### 3. ¿Cómo se instala TypeScript en VSCode?
1. Abre Visual Studio Code.
2. Abre la terminal integrada (``Ctrl + ` ``).
3. Ejecuta el siguiente comando para instalar TypeScript globalmente:
   ```bash
   npm install -g typescript

### 4. ¿Cómo se compila un archivo TypeScript para convertirlo a JavaScript?

1. Escribe tu código TypeScript en un archivo con extensión `.ts`.
2. Compila el archivo utilizando el comando `tsc`:
	```bash
	tsc archivo.ts
3. Esto generará un archivo `.js` con el mismo nombre.

### 5. ¿Qué extensión de archivo se utiliza para los archivos TypeScript? 
La extensión de archivo utilizada para los archivos TypeScript es `.ts`.

### 6. ¿Cómo se define un tipo de dato en TypeScript?
1. Se puede definir un tipo de dato utilizando la sintaxis de anotaciones de tipo:
	
	```typescript
	let nombre: string = "Juan";
	let edad: number = 25;
	let estudiante: boolean = true;

### 7. ¿Qué son los tipos de unión y cómo se declaran?
1. Los tipos de union permiten que una variable tenga mas de un tipo. se declaran utilizando el simbolo `|` y se declaran de la siguiente manera:

	```typescript
			let id: number | string;
			id = 123; // válido
			id = "ABC"; // válido
			
### 8. ¿Qué es un tipo literal en TypeScript y para qué se utiliza?
1. Un **tipo literal** es un tipo que representa un conjunto específico de valores posibles. Se utiliza para restringir los valores que una variable puede tomar:

	```typescript
	let dirección: "norte" | "sur" | "este" | "oeste"; dirección = "norte"; // válido 	dirección = "arriba"; // error

### 9. ¿Qué son los tipos enumerados (Enums) y cómo se crean?
1. Los **tipos enumerados (Enums)** permiten definir un conjunto de nombres simbólicos que representan valores numéricos. Se crean utilizando la palabra clave `enum`:
	```typescript
		enum Color { Rojo, Verde, Azul } let colorFavorito: Color = Color.Verde;

### 10. ¿Cómo se define un tipo alias y cuándo es útil?
1. Un **tipo alias** permite crear un nombre para un tipo existente. Es útil para simplificar tipos complejos y mejorar la legibilidad del código:
	```typescript
	type ID = number | string; let userId: ID; userId = 123; // válido userId = "ABC"; // válido

### 11. ¿Cómo se definen las funciones con tipos en TypeScript?
1. Se definen utilizando anotaciones de tipo para los parámetros y el tipo de retorno:
	```typescript
	function sumar(a: number, b: number): number { return a + b; }

### 12. ¿Qué son los parámetros opcionales y los parámetros predeterminados en funciones?
1. **Parámetros Opcionales**: Parámetros que pueden ser omitidos. Se indican con un `?`:
	```typescript
	function saludar(nombre: string, apellido?: string): string { return apellido ? `Hola, ${nombre} ${apellido}` : `Hola, ${nombre}`; }

2. **Parámetros Predeterminados**: Parámetros que tienen un valor por defecto si no se proporcionan:

	```typescript
	function saludar(nombre: string, apellido: string = "Doe"): string { return `Hola, ${nombre} ${apellido}`; }

### 13. ¿Cuáles son algunas mejores prácticas para escribir código limpio y mantenible en TypeScript?
-   **Usar Tipos Adecuados**: Define tipos explícitos para todas las variables y funciones.
-   **Evitar el uso de `any`**: Reduce el uso de `any` para mantener la verificación de tipos estricta.
-   **Modularización**: Divide el código en módulos y componentes reutilizables.
-   **Comentarios y Documentación**: Agrega comentarios y documentación para explicar el propósito del código.
-   **Linting**: Utiliza herramientas de linting como TSLint o ESLint para mantener la consistencia del código.

### Da solución a los siguientes problemas:
1. Calcular el promedio de tres números ingresados.
2. Calcular el área de un triángulo, el usuario debe ingresar el valor para la base y altura.
3. Determinar si un número es par o impar.
4. Encontrar el mayor y menor de tres números ingresados.
5. Elevar un número a una potencia, los valores deben ser ingresados por el usuario.
6. Mostrar de forma inversa un texto ingresado por el usuario.
7. Calcular el factorial de un número ingresado.
8. Indicar si un valor ingresado es un número perfecto.
9. Verificar si un valor ingresado es un número primo.
10. Contar las vocales existentes en un texto ingresado.

