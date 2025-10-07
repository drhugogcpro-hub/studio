import type { LucideIcon } from "lucide-react";

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

export const noiseSlides: Slide[] = [
  { 
    title: "Fundamentos del Sonido y el Ruido Laboral", 
    content: "El sonido es una vibración que se propaga como una onda de presión. El ruido es cualquier sonido no deseado o molesto.\n\nEn el entorno laboral, medimos la intensidad del ruido en decibelios ponderados en A (dBA), una escala que imita cómo el oído humano percibe el sonido, priorizando las frecuencias a las que somos más sensibles.", 
    icon: "Waves" 
  },
  { 
    title: "Efectos del Ruido en la Salud", 
    content: "La exposición a ruido excesivo va más allá de la pérdida auditiva (hipoacusia neurosensorial). Puede provocar acúfenos (zumbido constante), estrés crónico, aumento de la presión arterial y problemas cardiovasculares.\n\nTambién interfiere con la comunicación, aumentando el riesgo de accidentes al enmascarar señales de advertencia vitales.", 
    icon: "HeartPulse" 
  },
  { 
    title: "Límites de Exposición Ocupacional (LEP)", 
    content: "La ACGIH establece un LEP de 85 dBA como 'Nivel de Acción' para una jornada de 8 horas. A partir de este nivel, es obligatorio implementar un Programa de Conservación de la Audición.\n\nSe aplica una 'tasa de intercambio' de 3 dB: por cada 3 dBA de aumento, el tiempo de exposición seguro se reduce a la mitad (p. ej., solo 4 horas a 88 dBA).", 
    icon: "Gauge" 
  },
  { 
    title: "Comparativa de Normativas Internacionales", 
    content: "La recomendación de 85 dBA de la ACGIH es una de las más seguidas a nivel mundial, adoptada por la Unión Europea. \n\nOtras normativas, como la de OSHA en EE.UU., utilizan un límite permisible (PEL) de 90 dBA, pero exigen acción a los 85 dBA. La tendencia global se inclina hacia el estándar de 85 dBA como mejor práctica.", 
    icon: "Globe" 
  },
  { 
    title: "Instrumentos de Medición de Ruido", 
    content: "El Sonómetro mide el nivel de presión sonora en un punto y momento específicos. Es ideal para evaluar el ruido de maquinaria fija o áreas concretas.\n\nEl Dosímetro es un dispositivo personal que el trabajador usa durante su turno para registrar la dosis de ruido acumulada, promediando los diferentes niveles a los que estuvo expuesto.", 
    icon: "Radio" 
  },
  { 
    title: "Jerarquía de Controles Aplicada al Ruido", 
    content: "1. **Eliminación/Sustitución**: Quitar la fuente de ruido o usar equipos más silenciosos.\n2. **Controles de Ingeniería**: Instalar barreras acústicas, encerramientos o silenciadores.\n3. **Controles Administrativos**: Rotar al personal para limitar el tiempo de exposición, programar tareas ruidosas en horarios de menor personal.\n4. **EPP**: Uso de protectores auditivos (último recurso).", 
    icon: "Pyramid" 
  },
  { 
    title: "Tipos y Selección de Protección Auditiva", 
    content: "Los tapones (de inserción o premoldeados) son discretos y buenos para ruido constante. Las orejeras (tipo copa) son fáciles de poner y quitar, ideales para ruido intermitente.\n\nLa selección depende del nivel de atenuación requerido (NRR), la comodidad, la compatibilidad con otro EPP (cascos, gafas) y el entorno de trabajo.", 
    icon: "Ear" 
  },
  { 
    title: "Uso y Ajuste Correcto del EPP Auditivo", 
    content: "Un ajuste inadecuado anula la protección. Para tapones de espuma: enrolle, tire de la oreja hacia arriba y atrás, inserte profundamente y sostenga hasta que se expanda. \n\nLas orejeras deben sellar firmemente alrededor de la oreja, sin ser obstruidas por cabello grueso, patillas de gafas o gorras.", 
    icon: "Check" 
  },
  { 
    title: "El NRR: Tasa de Reducción de Ruido", 
    content: "El NRR es un valor teórico de laboratorio. En el mundo real, la protección suele ser menor. Una fórmula conservadora para estimar la atenuación real es: (NRR - 7) / 2.\n\nEjemplo: Un protector con NRR 33 podría ofrecer una atenuación efectiva de (33-7)/2 = 13 dBA.", 
    icon: "Calculator" 
  },
  { 
    title: "Programa de Conservación de la Audición", 
    content: "Es un sistema de gestión integral que incluye:\n- Monitoreo periódico de los niveles de ruido.\n- Audiometrías anuales para trabajadores expuestos.\n- Capacitación continua sobre los riesgos y el uso de EPP.\n- Mantenimiento de controles de ingeniería.\n- Evaluación de la efectividad del programa.", 
    icon: "BookUser" 
  },
];

export const particulateSlides: Slide[] = [
  { 
    title: "Anatomía del Sistema Respiratorio", 
    content: "Las vías superiores (nariz, faringe) atrapan partículas grandes (>10 µm). Las más pequeñas viajan por la tráquea y bronquios.\n\nLas partículas finas (<4 µm) pueden llegar a los alvéolos, pequeños sacos donde ocurre el intercambio de gases y donde causan el mayor daño inflamatorio y cicatricial.", 
    icon: "Lungs" 
  },
  { 
    title: "Clasificación de Partículas por Tamaño (PM)", 
    content: "El tamaño aerodinámico determina su peligrosidad.\n- **PM10 (Inhalable)**: Partículas <10 µm que pueden ser inhaladas por la nariz o boca.\n- **PM4 (Torácica)**: Fracción <4 µm que llega a las vías respiratorias bajas.\n- **PM2.5 (Respirable)**: Fracción <2.5 µm que penetra hasta los alvéolos. Son las más dañinas.", 
    icon: "Ruler" 
  },
  { 
    title: "Fuentes y Tipos de Material Particulado", 
    content: "**Polvos**: Partículas sólidas generadas por procesos mecánicos (moler, lijar). Ej: sílice, cemento, madera.\n**Humos**: Partículas metálicas muy finas generadas por procesos térmicos (soldadura).\n**Neblinas**: Gotitas líquidas suspendidas en el aire (pintura en aerosol).\n**Fibras**: Partículas alargadas (asbesto).", 
    icon: "Factory" 
  },
  { 
    title: "Efectos Agudos y Crónicos en la Salud", 
    content: "**Agudos**: Irritación de ojos, nariz y garganta; tos; y exacerbación de condiciones como el asma.\n\n**Crónicos**: Enfermedades pulmonares incurables como la Enfermedad Pulmonar Obstructiva Crónica (EPOC), silicosis (por sílice), asbestosis (por asbesto) y diversos tipos de cáncer.", 
    icon: "Stethoscope" 
  },
  { 
    title: "Límites de Exposición Profesional (LEP)", 
    content: "Los LEP (o TLVs de ACGIH) son concentraciones máximas permitidas para sustancias en el aire, promediadas para un turno de 8 horas (TWA).\n\nExisten límites específicos para cientos de sustancias. Por ejemplo, el de la sílice cristalina respirable es de solo 0.025 mg/m³, evidenciando su alta toxicidad.", 
    icon: "AlertTriangle" 
  },
  { 
    title: "Jerarquía de Controles para Particulado", 
    content: "1. **Eliminación/Sustitución**: Usar materiales pre-cortados o pastas en lugar de polvos.\n2. **Controles de Ingeniería**: Ventilación por extracción localizada (captura en la fuente), procesos húmedos para abatir el polvo.\n3. **Controles Administrativos**: Limpieza con aspiradoras HEPA (no barrer en seco), rotación de personal.\n4. **EPP**: Uso de respiradores.", 
    icon: "Pyramid" 
  },
  { 
    title: "Tipos de Respiradores: Purificadores de Aire", 
    content: "Filtran los contaminantes del aire antes de ser inhalado. No suministran oxígeno, por lo que no deben usarse en atmósferas con deficiencia de O2 (<19.5%).\n\n- **Mascarillas desechables**: Como las N95, para polvos no tóxicos.\n- **Respiradores reutilizables**: De media cara o cara completa con cartuchos/filtros reemplazables.", 
    icon: "FileQuestion" 
  },
  { 
    title: "Clasificación de Filtros: N, R, P y Eficiencia", 
    content: "Según resistencia a aceites:\n- **N**: No resistente.\n- **R**: Resistente (hasta 8h).\n- **P**: A prueba de aceite.\n\nSegún eficiencia de filtrado:\n- **95**: Filtra el 95%.\n- **99**: Filtra el 99%.\n- **100**: Filtra el 99.97% (filtros HEPA).\n\nUn filtro P100 ofrece la máxima protección contra partículas.", 
    icon: "Filter" 
  },
  { e: "Pruebas de Ajuste (Fit Testing) y Verificación del Sello", 
    content: "La **prueba de ajuste** (anual, cualitativa o cuantitativa) es crucial para asegurar que el modelo y talla del respirador son correctos para cada usuario.\n\nLa **verificación del sello** (presión positiva y negativa) es una comprobación rápida que el trabajador debe hacer cada vez que se pone el respirador para detectar fugas.", 
    icon: "UserCheck" 
  },
  { 
    title: "Uso, Mantenimiento e Inspección del Respirador", 
    content: "Inspeccionar antes de cada uso: buscar grietas, suciedad, o daños en válvulas y correas. Limpiar según las instrucciones del fabricante. Reemplazar filtros y cartuchos cuando se saturen, se dañen o según su vida útil.\n\nAlmacenar en un lugar limpio y seco, en una bolsa sellada para protegerlo de la contaminación.", 
    icon: "Wrench" 
  },
];


export const noiseQuiz: QuizQuestion[] = [
  { q: "¿Qué significa NRR?", a: 1, opts: ["Nivel de Ruido Real", "Noise Reduction Rating", "Norma de Reducción de Ruido"], exp: "NRR es Noise Reduction Rating, una medida de laboratorio sobre la atenuación de ruido de un protector auditivo." },
  { q: "¿Cuál es el límite de exposición al ruido recomendado por ACGIH para un turno de 8 horas?", a: 0, opts: ["85 dBA", "90 dBA", "100 dBA"], exp: "La ACGIH recomienda un límite de 85 dBA para prevenir la pérdida auditiva a largo plazo." },
  { q: "Si el nivel de ruido aumenta a 88 dBA, ¿cuál es el tiempo de exposición permitido?", a: 2, opts: ["8 horas", "6 horas", "4 horas"], exp: "Por cada 3 dB de aumento, el tiempo de exposición se reduce a la mitad. De 85 a 88 dBA, el tiempo se reduce de 8 a 4 horas." },
  { q: "¿Cuál es el último recurso en la jerarquía de controles de ruido?", a: 1, opts: ["Controles de ingeniería", "Equipo de Protección Personal (EPP)", "Eliminación"], exp: "El EPP es la última línea de defensa, a utilizarse cuando otros controles no son suficientes." },
  { q: "La pérdida de audición inducida por el ruido es...", a: 2, opts: ["Temporal y reversible", "Curable con cirugía", "Permanente e irreversible"], exp: "Una vez que las células ciliadas del oído interno se dañan por el ruido, no se regeneran." },
  { q: "¿Qué dispositivo se usa para medir la exposición al ruido personal de un trabajador?", a: 0, opts: ["Dosímetro", "Sonómetro", "Audímetro"], exp: "El dosímetro es un pequeño dispositivo que el trabajador lleva consigo para registrar su exposición personal al ruido." },
  { q: "Para una estimación realista de la protección, se recomienda reducir el NRR en un...", a: 1, opts: ["10%", "50%", "90%"], exp: "Debido a factores como el ajuste incorrecto, la OSHA recomienda reducir a la mitad el NRR para estimar la protección real." },
  { q: "Un ejemplo de control de ingeniería para el ruido es:", a: 2, opts: ["Rotar trabajadores fuera de áreas ruidosas", "Usar tapones para los oídos", "Encerrar una máquina ruidosa en una cabina"], exp: "Los controles de ingeniería modifican físicamente el entorno o la fuente de ruido, como encerrar una máquina." },
  { q: "¿Por qué es importante la colocación correcta de los protectores auditivos?", a: 0, opts: ["Para asegurar un sello adecuado y la máxima protección", "Para que se vean bien", "Para que sea más cómodo"], exp: "Un mal sello reduce drásticamente la efectividad del protector auditivo, sin importar su NRR." },
  { q: "Las orejeras deben ser reemplazadas cuando...", a: 2, opts: ["El color se desvanece", "Se usan por más de un mes", "Las almohadillas están agrietadas o endurecidas"], exp: "Las almohadillas dañadas no pueden crear un sello adecuado, comprometiendo la protección." },
];

export const particulateQuiz: QuizQuestion[] = [
  { q: "¿Qué tamaño de partículas (PM) penetra más profundamente en los pulmones?", a: 2, opts: [">10 µm", "5-10 µm", "<2.5 µm"], exp: "Las partículas PM2.5 (respirables) son lo suficientemente pequeñas para llegar a los alvéolos, la parte más profunda de los pulmones." },
  { q: "Un filtro de respirador con la marca 'N95' significa que:", a: 0, opts: ["Filtra 95% de partículas, No resistente al aceite", "Filtra 99% de partículas, No resistente al aceite", "Filtra 95% de partículas, Resistente al aceite"], exp: "N se refiere a 'No resistente al aceite' y 95 indica que filtra al menos el 95% de las partículas en el aire." },
  { q: "¿Qué es un 'Fit Test'?", a: 1, opts: ["Una prueba para ver si puedes respirar cómodamente", "Una prueba para verificar que el respirador sella correctamente en la cara", "Una prueba de la calidad del filtro"], exp: "El 'Fit Test' o prueba de ajuste es un procedimiento para asegurar que no haya fugas entre el respirador y la cara del usuario." },
  { q: "¿Cuál es el primer paso en la jerarquía de controles para el material particulado?", a: 2, opts: ["Usar un respirador N95", "Buena ventilación", "Eliminar la fuente del polvo"], exp: "La eliminación de la fuente del peligro es siempre el método de control más efectivo y preferido." },
  { q: "La silicosis es una enfermedad pulmonar causada por la inhalación de polvo de:", a: 1, opts: ["Madera", "Sílice", "Carbón"], exp: "La silicosis es una enfermedad pulmonar fibrótica e incurable causada por la inhalación de polvo de sílice cristalina." },
  { q: "En el sistema respiratorio, ¿dónde ocurre el intercambio de gases?", a: 2, opts: ["Tráquea", "Bronquios", "Alvéolos"], exp: "Los alvéolos son pequeños sacos de aire al final de las vías respiratorias donde el oxígeno pasa a la sangre y el dióxido de carbono sale." },
  { q: "Un ejemplo de una fuente común de polvo de sílice en la construcción es:", a: 0, opts: ["Cortar hormigón o ladrillo", "Lijar madera", "Soldar metal"], exp: "El hormigón, ladrillo y piedra contienen sílice, y cortarlos genera polvo peligroso." },
  { q: "¿Cuándo se debe realizar una verificación del sello del respirador?", a: 2, opts: ["Una vez al año", "Una vez al mes", "Cada vez que se pone el respirador"], exp: "Se debe realizar una verificación de sello por presión positiva y negativa cada vez que se usa el respirador para asegurar un ajuste adecuado." },
  { q: "¿Cuál de estos NO es un control de ingeniería?", a: 1, opts: ["Ventilación por extracción local", "Exigir a los trabajadores que se tomen descansos en un área limpia", "Humedecer el material para reducir el polvo"], exp: "Exigir descansos es un control administrativo, no un control de ingeniería que modifica el entorno físico." },
  { q: "¿Cómo se debe almacenar un respirador reutilizable?", a: 0, opts: ["En una bolsa sellada, lejos de la luz solar y productos químicos", "Colgado en el área de trabajo", "En la caja de herramientas"], exp: "El almacenamiento adecuado protege el respirador de daños, suciedad y contaminación." },
];

export const certificateConfig = {
  doctorName: "[Tu nombre completo]",
  doctorLicense: "[Tu número de licencia médica]",
  companyName: "[Nombre de tu empresa]",
  signatureURL: "", // "https://i.imgur.com/TuFirma.png"
  primaryColor: "#243A73",
  secondaryColor: "#E07A5F",
};

// Fix typo from previous turn
const particulateSlidesWithFix = particulateSlides.map(s => {
    if ('e' in s) {
        // @ts-ignore
        s.title = s.e;
        // @ts-ignore
        delete s.e;
    }
    return s;
});

export { particulateSlidesWithFix as particulateSlides };
