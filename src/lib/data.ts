export type Slide = {
  title: string;
  content: string;
};

export type QuizQuestion = {
  q: string;
  opts: string[];
  a: number;
  exp: string;
};

export const noiseSlides: Slide[] = [
  { title: "Fundamentos del Sonido y el Ruido Laboral", content: "El sonido es una vibración que se propaga como una onda de presión. El ruido es cualquier sonido no deseado. En el entorno laboral, medimos la intensidad del ruido en decibelios ponderados en A (dBA) para reflejar cómo el oído humano percibe el sonido." },
  { title: "Efectos del Ruido en la Salud", content: "Más allá de la pérdida auditiva permanente (hipoacusia neurosensorial), la exposición al ruido puede provocar acúfenos (zumbido en los oídos), estrés crónico, aumento de la presión arterial, problemas de comunicación y un mayor riesgo de accidentes al enmascarar señales de advertencia." },
  { title: "Límites de Exposición Ocupacional (LEP)", content: "La ACGIH establece un LEP de 85 dBA para 8 horas. Esto se conoce como nivel de acción. A partir de este nivel, el empleador debe implementar un programa de conservación de la audición. La 'tasa de intercambio' de 3 dB significa que por cada 3 dBA de aumento, el tiempo de exposición seguro se reduce a la mitad." },
  { title: "Comparativa de Normativas Internacionales", content: "Mientras que la ACGIH y la Unión Europea usan 85 dBA como límite principal, la OSHA en EE.UU. utiliza un límite permisible de 90 dBA. Sin embargo, la recomendación de 85 dBA se considera una mejor práctica a nivel mundial por su mayor margen de protección para la salud auditiva." },
  { title: "Instrumentos de Medición de Ruido", content: "El sonómetro mide el nivel de presión sonora en un punto y momento específicos, ideal para evaluar máquinas. El dosímetro es un dispositivo personal que el trabajador usa durante su turno para registrar su exposición acumulada al ruido, promediando los diferentes niveles a los que estuvo expuesto." },
  { title: "Jerarquía de Controles Aplicada al Ruido", content: "Es un enfoque por pasos para mitigar el riesgo: 1. Eliminación (quitar la fuente), 2. Sustitución (usar equipos más silenciosos), 3. Ingeniería (aislamiento acústico, barreras), 4. Administrativos (rotación de personal, limitar tiempo de exposición), 5. EPP (última barrera)." },
  { title: "Tipos y Selección de Protección Auditiva", content: "Los tapones (de inserción) son buenos para ruido constante. Las orejeras (tipo copa) son fáciles de poner y quitar, útiles para ruido intermitente. La selección se basa en el nivel de atenuación requerido (NRR), la compatibilidad con otro EPP, la comodidad y las condiciones del trabajo." },
  { title: "Uso y Ajuste Correcto del EPP Auditivo", content: "Un ajuste inadecuado anula la protección. Para tapones de espuma: enrolle, inserte profundamente y sostenga hasta que se expanda. El extremo debe quedar dentro del canal auditivo. Las orejeras deben sellar firmemente alrededor de la oreja, sin obstrucciones como cabello o patillas de gafas." },
  { title: "El NRR: Tasa de Reducción de Ruido", content: "El NRR es un valor teórico obtenido en laboratorio. En el mundo real, la protección es menor. Una regla práctica y conservadora es restar 7 al NRR y luego dividir el resultado por 2 para estimar la atenuación real. Ejemplo: NRR 33 -> (33-7)/2 = 13 dBA de reducción efectiva." },
  { title: "Programa de Conservación de la Audición", content: "Un programa efectivo incluye monitoreo regular del ruido, audiometrías anuales para los trabajadores expuestos, capacitación sobre los efectos del ruido y el uso de EPP, mantenimiento de controles y evaluación continua de la efectividad del programa. Es un ciclo de mejora continua." },
];

export const particulateSlides: Slide[] = [
  { title: "Anatomía del Sistema Respiratorio", content: "Nuestro sistema respiratorio actúa como un filtro. Las vías superiores (nariz, faringe) capturan partículas grandes. Las más pequeñas pueden viajar por la tráquea y bronquios hasta llegar a los alvéolos, pequeños sacos donde el oxígeno pasa a la sangre y donde las partículas finas causan el mayor daño." },
  { title: "Clasificación de Partículas por Tamaño (PM)", content: "El tamaño aerodinámico determina dónde se depositan las partículas. PM10 (Torácicas, <10 µm) llegan al pecho. PM4 (Respirables, <4 µm) y PM2.5 (<2.5 µm) penetran hasta los alvéolos. Son invisibles al ojo humano y pueden permanecer suspendidas en el aire por horas." },
  { title: "Fuentes y Tipos de Material Particulado", content: "Las fuentes son variadas: polvos (sílice de construcción, polvo de madera), humos (soldadura de metales), neblinas (pintura en aerosol) y fibras (asbesto). Cada tipo tiene un potencial de daño diferente para la salud." },
  { title: "Efectos Agudos y Crónicos en la Salud", content: "Los efectos agudos incluyen irritación de ojos y garganta, y ataques de asma. La exposición crónica puede llevar a enfermedades incurables como la Enfermedad Pulmonar Obstructiva Crónica (EPOC), silicosis (por sílice), asbestosis (por asbesto) y cáncer de pulmón." },
  { title: "Límites de Exposición Profesional (LEP)", content: "Los LEP (o TLVs de ACGIH) son concentraciones máximas permitidas para sustancias en el aire, promediadas para un turno de 8 horas. Existen límites específicos para cientos de sustancias, como 0.025 mg/m³ para sílice cristalina respirable, uno de los más peligrosos." },
  { title: "Jerarquía de Controles para Particulado", content: "Prioridad: 1. Eliminación/Sustitución (usar materiales sin sílice). 2. Controles de Ingeniería (ventilación por extracción localizada, procesos húmedos para abatir el polvo). 3. Controles Administrativos (limpieza con aspiradoras HEPA, no barrer en seco). 4. EPP (respiradores)." },
  { title: "Tipos de Respiradores: Purificadores de Aire", content: "Estos respiradores usan filtros para eliminar contaminantes. Incluyen mascarillas desechables (como N95) y respiradores de media cara o cara completa con cartuchos reemplazables. No suministran oxígeno y no deben usarse en atmósferas con deficiencia de oxígeno." },
  { title: "Clasificación de Filtros: N, R, P y Eficiencia", content: "Clasificación según resistencia al aceite: N (No resistente), R (Resistente, hasta 8h) y P (A prueba de aceite). Clasificación por eficiencia: 95%, 99% y 100% (99.97%). Un P100 ofrece la mayor protección de filtrado para partículas." },
  { title: "Pruebas de Ajuste (Fit Testing) y Verificación del Sello", content: "La prueba de ajuste (anual, cualitativa o cuantitativa) asegura que el modelo y talla del respirador son correctos para el usuario. La verificación del sello (presión positiva y negativa) es una comprobación rápida que el trabajador debe hacer cada vez que se pone el respirador." },
  { title: "Uso, Mantenimiento e Inspección del Respirador", content: "Inspeccionar antes de cada uso buscando grietas, suciedad o daños en válvulas y correas. Limpiar según las instrucciones del fabricante. Almacenar en un lugar limpio y seco, protegido de la contaminación. Reemplazar filtros y cartuchos según su vida útil o cuando se saturen." },
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
