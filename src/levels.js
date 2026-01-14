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
  }
};