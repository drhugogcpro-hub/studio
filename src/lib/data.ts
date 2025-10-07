export type Slide = {
  title: string;
  content: string;
  icon: string; // lucide-react icon name
};

export type QuizQuestion = {
  q: string;
  opts: string[];
  a: number;
  exp: string;
};

export const certificateConfig = {
  doctorName: "[Tu nombre completo]",
  doctorLicense: "[Tu número de licencia médica]",
  companyName: "[Nombre de tu empresa]",
  signatureURL: "", // "https://i.imgur.com/TuFirma.png"
  primaryColor: "#243A73",
  secondaryColor: "#E07A5F",
};

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

export const particulateSlides: Slide[] = [
    { title: "Sistema Respiratorio", content: "Las partículas grandes (>10µm) se quedan en nariz/boca. Las pequeñas (<4µm) llegan a los alvéolos y causan daño.", icon: "Lungs" },
    { title: "Clasificación de Partículas (PM)", content: "PM10 (Inhalable), PM4 (Torácica), y PM2.5 (Respirable). Las PM2.5 son las más peligrosas por su penetración profunda.", icon: "Ruler" },
    { title: "Fuentes y Tipos", content: "Polvos (sílice, cemento), Humos (soldadura), Neblinas (pintura en aerosol) y Fibras (asbesto).", icon: "Factory" },
    { title: "Efectos en la Salud", content: "Agudos: Irritación, tos. Crónicos: EPOC, silicosis, asbestosis y cáncer.", icon: "Stethoscope" },
    { title: "Límites de Exposición", content: "Son concentraciones máximas para un turno de 8 horas. El límite para sílice cristalina es muy bajo (0.025 mg/m³).", icon: "AlertTriangle" },
    { title: "Jerarquía de Controles", content: "1. Eliminación\n2. Ingeniería (extracción, procesos húmedos)\n3. Administrativos (limpieza HEPA)\n4. EPP (respiradores).", icon: "Pyramid" },
    { title: "Tipos de Respiradores", content: "Filtran contaminantes, no suministran oxígeno. Hay desechables (N95) y reutilizables (media cara/cara completa).", icon: "FileQuestion" },
    { title: "Clasificación de Filtros", content: "N: No resistente a aceite.\nR: Resistente a aceite.\nP: A prueba de aceite.\nLa eficiencia es 95, 99 o 100 (99.97%).", icon: "Filter" },
    { title: "Pruebas de Ajuste (Fit Test)", content: "Aseguran un sello correcto en la cara. Debe hacerse anualmente. El trabajador debe verificar el sello cada vez que lo usa.", icon: "UserCheck" },
    { title: "Mantenimiento del Respirador", content: "Inspeccionar antes de cada uso. Limpiar según instrucciones. Almacenar en lugar limpio y seco.", icon: "Wrench" },
];

export const particulateQuiz: QuizQuestion[] = [
  { q: "¿Qué tamaño de partículas (PM) penetra más profundamente en los pulmones?", a: 2, opts: [">10 µm", "5-10 µm", "<2.5 µm"], exp: "Las partículas PM2.5 (respirables) son lo suficientemente pequeñas para llegar a los alvéolos, la parte más profunda de los pulmones." },
  { q: "Un filtro de respirador con la marca 'P100' significa que:", a: 2, opts: ["Filtra 99% de partículas, No resistente al aceite", "Filtra 95% de partículas, a prueba de aceite", "Filtra 99.97% de partículas, a prueba de aceite"], exp: "P se refiere a 'a prueba de aceite' y 100 indica que filtra al menos el 99.97% de las partículas en el aire." },
  { q: "¿Qué es un 'Fit Test'?", a: 1, opts: ["Una prueba para ver si puedes respirar cómodamente", "Una prueba para verificar que el respirador sella correctamente en la cara", "Una prueba de la calidad del filtro"], exp: "El 'Fit Test' o prueba de ajuste es un procedimiento para asegurar que no haya fugas entre el respirador y la cara del usuario." },
  { q: "¿Cuál es el primer paso en la jerarquía de controles para el material particulado?", a: 2, opts: ["Usar un respirador N95", "Buena ventilación", "Eliminar la fuente del polvo"], exp: "La eliminación de la fuente del peligro es siempre el método de control más efectivo y preferido." },
  { q: "La silicosis es una enfermedad pulmonar causada por la inhalación de polvo de:", a: 1, opts: ["Madera", "Sílice", "Carbón"], exp: "La silicosis es una enfermedad pulmonar fibrótica e incurable causada por la inhalación de polvo de sílice cristalina." },
  { q: "En el sistema respiratorio, ¿dónde ocurre el intercambio de gases?", a: 2, opts: ["Tráquea", "Bronquios", "Alvéolos"], exp: "Los alvéolos son pequeños sacos de aire al final de las vías respiratorias donde el oxígeno pasa a la sangre y el dióxido de carbono sale." },
  { q: "Un ejemplo de una fuente común de polvo de sílice en la construcción es:", a: 0, opts: ["Cortar hormigón o ladrillo", "Lijar madera", "Soldar metal"], exp: "El hormigón, ladrillo y piedra contienen sílice, y cortarlos genera polvo peligroso." },
  { q: "¿Cuándo se debe realizar una verificación del sello del respirador?", a: 2, opts: ["Una vez al año", "Una vez al mes", "Cada vez que se pone el respirador"], exp: "Se debe realizar una verificación de sello por presión positiva y negativa cada vez que se usa el respirador para asegurar un ajuste adecuado." },
  { q: "¿Cuál de estos NO es un control de ingeniería?", a: 1, opts: ["Ventilación por extracción local", "Exigir a los trabajadores que se tomen descansos en un área limpia", "Humedecer el material para reducir el polvo"], exp: "Exigir descansos es un control administrativo, no un control de ingeniería que modifica el entorno físico." },
  { q: "¿Cómo se debe almacenar un respirador reutilizable?", a: 0, opts: ["En una bolsa sellada, lejos de la luz solar y productos químicos", "Colgado en el área de trabajo", "En la caja de herramientas"], exp: "El almacenamiento adecuado protege el respirador de daños, suciedad y contaminación." },
];
