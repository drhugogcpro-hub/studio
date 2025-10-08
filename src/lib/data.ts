
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
    { title: "Fundamentos del Ruido Laboral", content: "El ruido es un sonido no deseado que puede causar daño. Se mide en decibelios (dBA), una escala logarítmica que simula la respuesta del oído humano.\nLa energía del ruido se duplica con cada incremento de 3 dBA.", icon: "Waves" },
    { title: "Efectos del Ruido en la Salud", content: "El efecto más conocido es la pérdida auditiva permanente (hipoacusia), causada por el daño a las células ciliadas del oído interno.\nTambién provoca efectos extra-auditivos como estrés, fatiga, aumento de la presión arterial y mayor riesgo de accidentes al dificultar la comunicación y la percepción de alarmas.", icon: "HeartPulse" },
    { title: "Límites de Exposición (Guatemala y ACGIH)", content: "El Reglamento de SSO de Guatemala (Art. 230) establece un Nivel de Acción de 85 dBA para 8 horas. Este es el estándar recomendado por la ACGIH como TLV (Threshold Limit Value).\nAl alcanzar 85 dBA, el patrono debe implementar un Programa de Conservación Auditiva.", icon: "Gauge" },
    { title: "Jerarquía de Controles de Riesgo", content: "Es el método más efectivo para gestionar riesgos. El orden de prioridad es:\n1. Eliminación/Sustitución (la más efectiva).\n2. Controles de Ingeniería (aislar la fuente de ruido).\n3. Controles Administrativos (rotación de personal).\n4. Equipo de Protección Personal (EPP, la última barrera).", icon: "Pyramid" },
    { title: "Instrumentos de Medición de Ruido", content: "Sonómetro: Mide el nivel de presión sonora en un punto específico. Es ideal para crear mapas de ruido de un área.\nDosímetro: Es portado por el trabajador durante su jornada para medir su dosis de ruido personal acumulada.", icon: "Radio" },
    { title: "Tipos de Equipo de Protección Auditiva (EPP)", content: "Tapones: Insertables o de copa, son efectivos para ruido constante. Disponibles en versiones desechables y reutilizables.\nOrejeras (Cascos): Ofrecen mayor atenuación, ideales para ruido de muy alta intensidad o intermitente.", icon: "Ear" },
    { title: "Atenuación y Ajuste Correcto del EPP", content: "Un protector auditivo mal ajustado pierde casi toda su efectividad. Las orejeras deben sellar completamente alrededor de la oreja y los tapones deben insertarse profundamente en el canal auditivo.\nLa barba o el uso de gafas pueden afectar el sello de las orejeras.", icon: "Check" },
    { title: "Índice de Reducción de Ruido (NRR)", content: "El NRR es un valor de atenuación medido en laboratorio. Para estimar la protección real en el lugar de trabajo, se recomienda la fórmula: (NRR - 7) / 2.\nEste cálculo considera las imperfecciones del ajuste en el uso diario.", icon: "Calculator" },
    { title: "Programa de Conservación Auditiva", content: "Obligatorio en Guatemala al superar 85 dBA. Debe incluir (Art. 233):\n- Monitoreo y evaluación de la exposición.\n- Controles técnicos y administrativos.\n- Exámenes audiométricos anuales.\n- Capacitación y dotación de EPP.", icon: "BookUser" },
    { title: "Audiometrías de Vigilancia", content: "Son exámenes médicos para detectar tempranamente la pérdida auditiva. Se realiza una audiometría base al contratar y luego anualmente para comparar.\nPermiten tomar acciones correctivas antes de que el daño sea severo.", icon: "Activity" },
];

export const noiseQuiz: QuizQuestion[] = [
  { q: "¿Qué significa NRR?", a: 1, opts: ["Nivel de Ruido Real", "Noise Reduction Rating", "Norma de Reducción de Ruido"], exp: "NRR es Noise Reduction Rating, una medida de laboratorio sobre la atenuación de ruido de un protector auditivo." },
  { q: "Según el Reglamento de SSO de Guatemala y ACGIH, ¿a partir de qué nivel se debe implementar un programa de conservación auditiva?", a: 0, opts: ["85 dBA", "90 dBA", "100 dBA"], exp: "El Artículo 230 y el TLV de ACGIH establecen el Nivel de Acción en 85 dBA para 8 horas." },
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
    { title: "Anatomía del Sistema Respiratorio", content: "Actúa como un sistema de filtración. Las vías respiratorias superiores (nariz, tráquea) atrapan partículas grandes. Las partículas más finas pueden evadir estas defensas y llegar a los pulmones profundos, causando el mayor daño.", icon: "Lungs" },
    { title: "Clasificación de Partículas (PM)", content: "Se clasifican por su diámetro aerodinámico. PM10 (partículas inhalables, <10 µm) llegan a la tráquea. PM2.5 (partículas respirables, <2.5 µm) son las más peligrosas, ya que alcanzan los alvéolos y pueden incluso pasar al torrente sanguíneo.", icon: "Ruler" },
    { title: "Fuentes y Tipos Comunes", content: "Polvos: sílice, cemento, madera. Se generan en procesos mecánicos.\nHumos: de soldadura, combustión. Son partículas sólidas muy finas.\nNeblinas: de pintura en spray, aceites. Son gotas líquidas suspendidas en el aire.\nFibras: asbesto, fibra de vidrio.", icon: "Factory" },
    { title: "Efectos Crónicos en la Salud", content: "La exposición prolongada causa enfermedades graves e incurables:\n- Neumoconiosis: como la silicosis (por sílice) y asbestosis (por asbesto), que provocan cicatrización del pulmón.\n- Enfermedad Pulmonar Obstructiva Crónica (EPOC).\n- Cáncer de pulmón.", icon: "Stethoscope" },
    { title: "Límites de Exposición (Guatemala y ACGIH)", content: "El Reglamento de SSO (Art. 238) adopta los TLV® (Threshold Limit Values) de la ACGIH como límites de exposición profesional en Guatemala.\nPara la sílice cristalina, el TLV es 0.025 mg/m³, reflejando su alta toxicidad.", icon: "AlertTriangle" },
    { title: "Jerarquía de Controles para Particulado", content: "1. Ingeniería: sistemas de extracción localizada, uso de agua para suprimir polvo (atomizadores).\n2. Administrativos: limpieza con aspiradoras HEPA (no barrido en seco), rotación de personal a zonas limpias.\n3. EPP: uso de respiradores adecuados.", icon: "Pyramid" },
    { title: "Tipos de Respiradores", content: "Filtran el aire, NO suministran oxígeno. No usar en espacios confinados o con deficiencia de oxígeno.\n- Mascarillas desechables (N95): para polvos y neblinas sin aceite.\n- Reutilizables de media cara o cara completa: usan cartuchos y filtros específicos para el contaminante.", icon: "FileQuestion" },
    { title: "Clasificación de Filtros (Norma NIOSH)", content: "Letra indica resistencia al aceite: N (No resistente), R (Resistente, hasta 8h), P (a Prueba de aceite).\nNúmero indica eficiencia de filtrado: 95%, 99%, o 100 (para 99.97%).\nUn filtro N95 es el más común para polvos y partículas sin aceite.", icon: "Filter" },
    { title: "Prueba de Ajuste (Fit Test)", content: "Es un procedimiento OBLIGATORIO (anual o antes si hay cambios físicos) para verificar que el respirador sella herméticamente en la cara del usuario. Existen métodos cualitativos y cuantitativos.\nAdicionalmente, el trabajador debe hacer una autoverificación del sello cada vez que lo usa.", icon: "UserCheck" },
    { title: "Mantenimiento del Respirador", content: "Inspeccionar en busca de daños (fisuras, válvulas rotas) antes de cada uso.\nLimpiar y desinfectar los reutilizables según instrucciones del fabricante.\nAlmacenar en un lugar limpio, seco y protegido, como una bolsa sellada, para evitar contaminación.", icon: "Wrench" },
];

export const particulateQuiz: QuizQuestion[] = [
  { q: "¿Qué tamaño de partículas (PM) penetra más profundamente en los pulmones?", a: 2, opts: [">10 µm", "5-10 µm", "<2.5 µm"], exp: "Las partículas PM2.5 (respirables) son lo suficientemente pequeñas para llegar a los alvéolos, la parte más profunda de los pulmones." },
  { q: "Un filtro de respirador con la marca 'P100' significa que:", a: 2, opts: ["Filtra 99% de partículas, No resistente al aceite", "Filtra 95% de partículas, a prueba de aceite", "Filtra 99.97% de partículas, a prueba de aceite"], exp: "P se refiere a 'a prueba de aceite' y 100 indica que filtra al menos el 99.97% de las partículas en el aire." },
  { q: "¿Qué es un 'Fit Test' o prueba de ajuste?", a: 1, opts: ["Una prueba para ver si puedes respirar cómodamente", "Una prueba obligatoria para verificar que el respirador sella correctamente en la cara", "Una prueba de la calidad del filtro"], exp: "El 'Fit Test' es un procedimiento obligatorio para asegurar que no haya fugas entre el respirador y la cara del usuario." },
  { q: "¿Cuál es el primer y más efectivo paso en la jerarquía de controles?", a: 2, opts: ["Usar un respirador N95", "Buena ventilación", "Eliminar o sustituir la fuente del polvo"], exp: "La eliminación o sustitución de la fuente del peligro es siempre el método de control más efectivo y preferido." },
  { q: "La silicosis es una enfermedad pulmonar causada por la inhalación de polvo de:", a: 1, opts: ["Madera", "Sílice", "Carbón"], exp: "La silicosis es una enfermedad pulmonar fibrótica e incurable causada por la inhalación de polvo de sílice cristalina." },
  { q: "La normativa de Guatemala sobre límites de exposición a sustancias químicas se basa en:", a: 1, opts: ["Límites propios definidos por el Ministerio de Trabajo", "Los TLV de la ACGIH", "Las normas europeas"], exp: "El Artículo 238 del Reglamento de SSO de Guatemala adopta los TLV (Threshold Limit Values) de la ACGIH." },
  { q: "Un ejemplo de control de ingeniería para polvo es:", a: 0, opts: ["Usar un sistema de extracción de polvo en una sierra", "Lijar al aire libre", "Barrer el polvo al final del día"], exp: "La extracción localizada captura el contaminante en su punto de origen, antes de que llegue a la zona de respiración del trabajador." },
  { q: "¿Cuándo se debe realizar una verificación del sello del respirador por parte del usuario?", a: 2, opts: ["Una vez al año", "Una vez al mes", "Cada vez que se pone el respirador"], exp: "Se debe realizar una verificación de sello por presión positiva y negativa cada vez que se usa el respirador para asegurar un ajuste adecuado." },
  { q: "La letra 'N' en un filtro N95 significa:", a: 1, opts: ["Nuevo", "No resistente al aceite", "Nacional"], exp: "La clasificación de NIOSH indica que los filtros 'N' no deben usarse en presencia de neblinas de aceite." },
  { q: "¿Cómo se debe almacenar un respirador reutilizable?", a: 0, opts: ["En una bolsa sellada, lejos del polvo y productos químicos", "Colgado en el área de trabajo para que se seque", "En la caja de herramientas con otros equipos"], exp: "El almacenamiento adecuado en un lugar limpio y protegido previene daños y contaminación del respirador." },
];
