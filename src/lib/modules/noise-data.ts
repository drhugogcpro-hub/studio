import type { Slide, QuizQuestion } from '@/lib/data';

export const noiseSlides: Slide[] = [
    { title: "Fundamentos del Ruido", content: "El sonido es una vibración; el ruido es sonido no deseado. Se mide en decibelios (dBA).", icon: "Waves" },
    { title: "Efectos en la Salud", content: "Causa pérdida auditiva, estrés y problemas cardiovasculares. Aumenta riesgo de accidentes.", icon: "HeartPulse" },
    { title: "Límites de Exposición", content: "El Nivel de Acción es 85 dBA para 8 horas. Por cada 3 dBA de aumento, el tiempo seguro se reduce a la mitad.", icon: "Gauge" },
    { title: "Normativas", content: "La recomendación de 85 dBA de ACGIH es el estándar global moderno para la conservación auditiva.", icon: "Globe" },
    { title: "Instrumentos de Medición", content: "Sonómetro: mide el ruido en un punto. Dosímetro: mide la exposición personal del trabajador.", icon: "Radio" },
    { title: "Jerarquía de Controles", content: "1. Eliminación/Sustitución\n2. Ingeniería (barreras)\n3. Administrativos (rotación)\n4. EPP (protectores)", icon: "Pyramid" },
    { title: "Tipos de Protección Auditiva", content: "Tapones: para ruido constante.\nOrejeras: para ruido intermitente y mayor atenuación.", icon: "Ear" },
    { title: "Ajuste Correcto del EPP", content: "Un mal ajuste anula la protección. El EPP debe sellar firmemente.", icon: "Check" },
    { title: "Tasa de Reducción de Ruido (NRR)", content: "Es un valor de laboratorio. La protección real se estima con la fórmula: (NRR - 7) / 2.", icon: "Calculator" },
    { title: "Programa de Conservación Auditiva", content: "Incluye monitoreo, audiometrías anuales, capacitación y evaluación del programa.", icon: "BookUser" },
];

export const noiseQuiz: QuizQuestion[] = [
  { q: "¿Qué significa NRR?", a: 1, opts: ["Nivel de Ruido Real", "Noise Reduction Rating", "Norma de Reducción de Ruido"], exp: "NRR es Noise Reduction Rating, una medida de laboratorio sobre la atenuación de ruido de un protector auditivo." },
  { q: "¿Cuál es el límite de exposición al ruido recomendado por ACGIH para un turno de 8 horas?", a: 0, opts: ["85 dBA", "90 dBA", "100 dBA"], exp: "La ACGIH recomienda un límite de 85 dBA para prevenir la pérdida auditiva a largo plazo." },
  { q: "Si el nivel de ruido aumenta a 88 dBA, ¿cuál es el tiempo de exposición permitido?", a: 2, opts: ["8 horas", "6 horas", "4 horas"], exp: "Por cada 3 dB de aumento, el tiempo de exposición se reduce a la mitad. De 85 a 88 dBA, el tiempo se reduce de 8 a 4 horas." },
  { q: "¿Cuál es el último recurso en la jerarquía de controles de ruido?", a: 1, opts: ["Controles de ingeniería", "Equipo de Protección Personal (EPP)", "Eliminación"], exp: "El EPP es la última línea de defensa, a utilizarse cuando otros controles no son suficientes." },
  { q: "La pérdida de audición inducida por el ruido es...", a: 2, opts: ["Temporal y reversible", "Curable con cirugía", "Permanente e irreversible"], exp: "Una vez que las células ciliadas del oído interno se dañan por el ruido, no se regeneran." },
  { q: "¿Qué dispositivo se usa para medir la exposición al ruido personal de un trabajador?", a: 0, opts: ["Dosímetro", "Sonómetro", "Audímetro"], exp: "El dosímetro es un pequeño dispositivo que el trabajador lleva consigo para registrar su exposición personal al ruido." },
  { q: "Para una estimación realista de la protección, la OSHA recomienda aplicar la fórmula:", a: 1, opts: ["NRR * 0.9", "(NRR - 7) / 2", "NRR - 10"], exp: "Debido a factores como el ajuste incorrecto, se aplica una fórmula para estimar la atenuación real en el lugar de trabajo." },
  { q: "Un ejemplo de control de ingeniería para el ruido es:", a: 2, opts: ["Rotar trabajadores fuera de áreas ruidosas", "Usar tapones para los oídos", "Encerrar una máquina ruidosa en una cabina"], exp: "Los controles de ingeniería modifican físicamente el entorno o la fuente de ruido, como encerrar una máquina." },
  { q: "¿Por qué es importante la colocación correcta de los protectores auditivos?", a: 0, opts: ["Para asegurar un sello adecuado y la máxima protección", "Para que se vean bien", "Para que sea más cómodo"], exp: "Un mal sello reduce drásticamente la efectividad del protector auditivo, sin importar su NRR." },
  { q: "Las orejeras deben ser reemplazadas cuando...", a: 2, opts: ["El color se desvanece", "Se usan por más de un mes", "Las almohadillas están agrietadas o endurecidas"], exp: "Las almohadillas dañadas no pueden crear un sello adecuado, comprometiendo la protección." },
];
