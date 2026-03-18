export const LEVELS = {
  1: {
    id: 1,
    title: "Colores",
    icon: "Palette",
    color: "#2563EB",
    description: "Aprende a manipular colores usando códigos Hex, RGB y nombres de CSS.",
    instruction: "Cambia la variable boxColor para modificar el color del cuadro. Puedes usar códigos hex (#4A90E2), nombres (red, blue), o RGB.",
    initialCode: `const boxColor = "#4A90E2";

function updateBox() {
  render(boxColor);
}`,
    run: (code, setOutput, setError) => {
      try {
        const boxColor = code.match(/boxColor\s*=\s*["']([^"']+)["']/)?.[1] || "#4A90E2";
        setOutput({ type: 'color', value: boxColor });
        setError(null);
        return `Color aplicado: ${boxColor}`;
      } catch (err) {
        setError(err.message);
        return null;
      }
    }
  },
  2: {
    id: 2,
    title: "Tamaños",
    icon: "Square",
    color: "#7C3AED",
    description: "Domina las unidades de medida, márgenes y rellenos para controlar el diseño.",
    instruction: "Modifica las variables ancho y alto para cambiar las dimensiones del elemento. Los valores deben ser números en píxeles.",
    initialCode: `// Nivel 2: Tamaños
// Modifica las variables para cambiar el diseño
const ancho = 200;
const alto = 200;

// Sistema de renderizado
render(ancho, alto);`,
    run: (code, setOutput, setError) => {
      try {
        const ancho = parseInt(code.match(/ancho\s*=\s*(\d+)/)?.[1]) || 200;
        const alto = parseInt(code.match(/alto\s*=\s*(\d+)/)?.[1]) || 200;
        setOutput({ type: 'size', width: ancho, height: alto });
        setError(null);
        return `Dimensiones: ${ancho}px × ${alto}px`;
      } catch (err) {
        setError(err.message);
        return null;
      }
    }
  },
  3: {
    id: 3,
    title: "Texto",
    icon: "Type",
    color: "#0EA5A4",
    description: "Fundamentos de tipografía: familias de fuentes, pesos y alineación.",
    instruction: "Cambia el contenido de la variable mensaje. Las cadenas de texto siempre deben ir entre comillas.",
    initialCode: `const mensaje = "Hola Mundo";
console.log(mensaje);`,
    run: (code, setOutput, setError) => {
      try {
        const mensaje = code.match(/mensaje\s*=\s*["']([^"']+)["']/)?.[1] || "Hola Mundo";
        setOutput({ type: 'text', value: mensaje });
        setError(null);
        return `› ${mensaje}`;
      } catch (err) {
        setError(err.message);
        return null;
      }
    }
  },
  4: {
    id: 4,
    title: "Condiciones",
    icon: "GitBranch",
    color: "#F59E0B",
    description: "Entiende la toma de decisiones en el código mediante estructuras condicionales.",
    instruction: "Cambia el valor de puntaje en la línea 1 para ver cómo cambia el resultado de la condición.",
    initialCode: `let puntaje = 85;

if (puntaje > 50) {
  estado = "Aprobado";
} else {
  estado = "Reprobado";
}
// Edita el número 85 arriba`,
    run: (code, setOutput, setError) => {
      try {
        const puntaje = parseInt(code.match(/puntaje\s*=\s*(\d+)/)?.[1]) || 85;
        const estado = puntaje > 50 ? "Aprobado" : "Reprobado";
        setOutput({ type: 'condition', score: puntaje, status: estado });
        setError(null);
        return `Variable 'puntaje' inicializada en ${puntaje}.\nEvaluando: puntaje > 50...\nSalida: "${estado}"`;
      } catch (err) {
        setError(err.message);
        return null;
      }
    }
  },
  5: {
    id: 5,
    title: "Lógica",
    icon: "Brain",
    color: "#FB7185",
    description: "Desarrolla el pensamiento lógico aplicado a la resolución de problemas técnicos.",
    instruction: "Utiliza operadores lógicos (&&, ||) para controlar el flujo de acceso. Modifica edad y tieneTicket.",
    initialCode: `const edad = 20;
const tieneTicket = true;

const accesoPermitido = edad >= 18 && tieneTicket;
console.log("Estado de acceso:", accesoPermitido);`,
    run: (code, setOutput, setError) => {
      try {
        const edad = parseInt(code.match(/edad\s*=\s*(\d+)/)?.[1]) || 20;
        const tieneTicket = code.includes('tieneTicket = true');
        const accesoPermitido = edad >= 18 && tieneTicket;
        setOutput({ type: 'logic', access: accesoPermitido, age: edad, ticket: tieneTicket });
        setError(null);
        return `Estado de acceso: ${accesoPermitido}`;
      } catch (err) {
        setError(err.message);
        return null;
      }
    }
  },
  6: {
    id: 6,
    title: "Funciones",
    icon: "Settings",
    color: "#10B981",
    description: "Aprende a encapsular código reutilizable para crear programas eficientes.",
    instruction: "Modifica la función saludar para que devuelva un saludo personalizado con el nombre proporcionado.",
    initialCode: `function saludar(nombre) {
  // Tu código aquí
  return "Hola " + nombre;
}

// Prueba la función
console.log(saludar("Estudiante"));`,
    run: (code, setOutput, setError) => {
      try {
        const nameMatch = code.match(/saludar\(["']([^"']+)["']\)/);
        const nombre = nameMatch?.[1] || "Estudiante";
        const resultado = `Hola ${nombre}`;
        setOutput({ type: 'function', value: resultado });
        setError(null);
        return `"${resultado}"`;
      } catch (err) {
        setError(err.message);
        return null;
      }
    }
  },
  7: {
    id: 7,
    title: "Reto Final",
    icon: "Trophy",
    color: "#6366F1",
    description: "Integra todo lo aprendido: arrays, objetos, funciones y condicionales para construir un sistema de evaluación de estudiantes.",
    instruction: `Un arreglo guarda varios valores en orden. Cada valor tiene una posición que empieza en 0:\n\n | notas = [90, 85, 92]  →  notas[0] es 90, notas[1] es 85, notas[2] es 92 | \n\n Un bucle "for" recorre esas posiciones una por una:\n| for (let i = 0; i < notas.length; i++) { }\n→ i | empieza en 0 y sube hasta llegar al final del arreglo.\n\nRETO: dentro del for, usa i para acceder a cada nota y sumarla al acumulador.`,
    initialCode: `// RETO FINAL: Sistema de evaluación de estudiantes
// Completa la función y ajusta los datos para pasar el reto

const estudiantes = [
  { nombre: "Ana",    notas: [90, 85, 92] },
  { nombre: "Luis",   notas: [60, 55, 70] },
  { nombre: "María",  notas: [40, 35, 50] }
];

function evaluarEstudiante(estudiante) {
  let suma = 0;
  for (let i = 0; i < estudiante.notas.length; i++) {
    // TODO: suma cada nota al acumulador PISTA usa estudiante.notas[i] para acceder a cada nota
  }

  const promedio = suma / estudiante.notas.length;

  let categoria;
  if (promedio >= 80) {
    categoria = ""; // ¿Que categoría corresponde aquí? (Pista: es la mejor)
  } else if (promedio >= 60) {
    categoria = "";  // Esta es la categoría intermedia, ¿cómo se llama?
  } else {
    categoria = ""; // ¿Y esta? Es la categoría para los promedios más bajos.
  }

  return { nombre: estudiante.nombre, promedio, categoria };
}

const resultados = estudiantes.map(evaluarEstudiante);
console.log(resultados);`,

    run: (code, setOutput, setError) => {
      try {
        const wrappedCode = `
        ${code}
        return {
          resultados: typeof resultados !== 'undefined' ? resultados : null,
          totalEstudiantes: typeof estudiantes !== 'undefined' ? estudiantes.length : 0
        };
      `;

        const runUserCode = new Function(wrappedCode);
        const { resultados, totalEstudiantes } = runUserCode();

        if (!resultados || !Array.isArray(resultados)) {
          throw new Error("'resultados' debe ser un array. ¿Completaste el .map()?");
        }

        // Validar estructura de cada resultado
        resultados.forEach((r, i) => {
          if (typeof r.nombre === 'undefined') throw new Error(`El objeto en índice ${i} no tiene 'nombre'.`);
          if (typeof r.promedio === 'undefined') throw new Error(`El objeto en índice ${i} no tiene 'promedio'.`);
          if (typeof r.categoria === 'undefined') throw new Error(`El objeto en índice ${i} no tiene 'categoria'.`);
        });

        const aprobados = resultados.filter(r => r.categoria !== "Reprobado").length;
        const promedioGeneral = (
            resultados.reduce((acc, r) => acc + r.promedio, 0) / resultados.length
        ).toFixed(1);

        setOutput({
          type: 'students',
          items: resultados.map(r => ({
            ...r,
            promedio: typeof r.promedio === 'number' ? r.promedio.toFixed(1) : r.promedio
          })),
          resumen: `Promedio general: ${promedioGeneral} · Aprobados: ${aprobados} de ${totalEstudiantes}`
        });

        setError(null);

        const log = resultados.map(r => `${r.nombre}: ${r.promedio} → ${r.categoria}`).join('\n');
        return log;

      } catch (err) {
        setError(err.message);
        return null;
      }
    }
  }
};