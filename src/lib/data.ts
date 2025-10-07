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
    { title: "Fundamentos del Ruido", content: "El sonido es una onda de presión que viaja a través de un medio. El ruido es cualquier sonido no deseado.\nSe mide en decibelios (dBA), una escala logarítmica que se ajusta a la sensibilidad del oído humano.", icon: "Waves" },
    { title: "Efectos en la Salud", content: "La exposición prolongada daña las células ciliadas del oído interno, causando pérdida auditiva permanente (hipoacusia).\nAdemás, puede provocar estrés, insomnio, hipertensión y aumentar el riesgo de accidentes laborales por no oír las alarmas.", icon: "HeartPulse" },
    { title: "Límites de Exposición", content: "El Nivel de Acción es 85 dBA para 8 horas (TWA). La 'tasa de intercambio' de 3 dB significa que al llegar a 88 dBA, el tiempo de exposición seguro se reduce a solo 4 horas.", icon: "Gauge" },
    { title: "Normativas de Referencia", content: "La recomendación de 85 dBA de la ACGIH es el estándar de oro en salud ocupacional.\nOSHA en EE.UU. usa 90 dBA como límite permisible, pero requiere acción a los 85 dBA.", icon: "Globe" },
    { title: "Instrumentos de Medición", content: "Sonómetro: Mide el nivel de presión sonora en un punto y momento específicos. Ideal para mapeo de ruido.\nDosímetro: Lo usa el trabajador durante su jornada para medir su exposición personal acumulada.", icon: "Radio" },
    { title: "Jerarquía de Controles", content: "Es el pilar de la seguridad. El orden es: 1. Eliminación/Sustitución (la más efectiva). 2. Ingeniería (aislamiento de máquinas). 3. Administrativos (rotación de personal). 4. EPP (la última barrera).", icon: "Pyramid" },
    { title: "Tipos de Protección Auditiva", content: "Tapones: Desechables o reutilizables, buenos para ruido constante de nivel bajo a moderado.\nOrejeras (Cascos): Ofrecen mayor atenuación, ideales para ruido muy alto o intermitente.", icon: "Ear" },
    { title: "Ajuste Correcto del EPP", content: "Un mal ajuste puede reducir la protección a casi cero. Los tapones deben insertarse correctamente y las orejeras deben sellar completamente alrededor de la oreja, sin interferencias.", icon: "Check" },
    { title: "Tasa de Reducción de Ruido (NRR)", content: "Es un valor de atenuación obtenido en laboratorio. Para una estimación realista en campo, OSHA recomienda la fórmula: (NRR - 7) / 2. El resultado es la atenuación aproximada en dBA.", icon: "Calculator" },
    { title: "Programa de Conservación Auditiva", content: "Es un requisito legal si se supera el Nivel de Acción. Incluye: monitoreo del ruido, audiometrías anuales para los trabajadores expuestos, capacitación, selección de EPP y registros.", icon: "BookUser" },
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
    { title: "El Sistema Respiratorio", content: "Funciona como un filtro. Las partículas grandes (>10µm) se atrapan en la nariz y garganta.\nLas más pequeñas (<4µm) son las más peligrosas porque llegan a los alvéolos, donde ocurre el intercambio de gases.", icon: "Lungs" },
    { title: "Clasificación de Partículas (PM)", content: "Se clasifican por su tamaño aerodinámico. PM10 (Inhalable) llega a la tráquea y bronquios. PM2.5 (Respirable) alcanza los alvéolos, pudiendo pasar al torrente sanguíneo.", icon: "Ruler" },
    { title: "Fuentes y Tipos Comunes", content: "Polvos: sílice, cemento, madera. Humos: soldadura, combustión. Neblinas: pintura en spray, aceites. Fibras: asbesto.\nCada uno tiene un nivel de toxicidad y riesgo distinto.", icon: "Factory" },
    { title: "Efectos en la Salud", content: "Agudos: irritación de ojos, nariz, garganta. Crónicos: EPOC, asma ocupacional, silicosis (cicatrización del pulmón por sílice), asbestosis y varios tipos de cáncer.", icon: "Stethoscope" },
    { title: "Límites de Exposición", content: "Son concentraciones máximas en el aire para un turno de 8h. El límite para sílice cristalina es extremadamente bajo (0.025 mg/m³) debido a su alta toxicidad.", icon: "AlertTriangle" },
    { title: "Jerarquía de Controles", content: "1. Eliminación. 2. Ingeniería: sistemas de extracción localizada, uso de agua para suprimir polvo. 3. Administrativos: rotación, limpieza con aspiradoras HEPA. 4. EPP: respiradores.", icon: "Pyramid" },
    { title: "Tipos de Respiradores", content: "Filtran el aire, no suministran oxígeno. Los más comunes son las mascarillas desechables (N95) y los reutilizables de media cara o cara completa con cartuchos específicos.", icon: "FileQuestion" },
    { title: "Clasificación de Filtros", content: "Letra: N (No resistente a aceite), R (Resistente), P (a Prueba de aceite).\nNúmero: Eficiencia de filtrado (95%, 99%, o 100 para 99.97%). Un N95 es el más común.", icon: "Filter" },
    { title: "Pruebas de Ajuste (Fit Test)", content: "Es un procedimiento anual obligatorio para asegurar que el respirador sella perfectamente con la cara del usuario. Adicionalmente, el trabajador debe hacer una autoverificación del sello cada vez que lo usa.", icon: "UserCheck" },
    { title: "Uso y Mantenimiento", content: "Inspeccionar el respirador en busca de daños antes de cada uso. Limpiar y desinfectar los reutilizables regularmente. Almacenar en un lugar limpio y seco, protegido de la contaminación.", icon: "Wrench" },
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
