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
  { title: "Fundamentos del Sonido", content: "El sonido es una vibración que se propaga como una onda acústica. Se mide en decibelios (dB). La exposición prolongada a niveles altos puede ser dañina." },
  { title: "Efectos en la Salud", content: "La exposición al ruido puede causar pérdida de audición, estrés, problemas de sueño y aumento de la presión arterial. La pérdida auditiva inducida por ruido es permanente." },
  { title: "Normativas y Límites ACGIH", content: "La ACGIH recomienda un límite de exposición de 85 dBA para un turno de 8 horas. Por cada 3 dB de aumento, el tiempo de exposición permitido se reduce a la mitad." },
  { title: "Comparación Internacional", content: "Los límites de exposición varían por país. OSHA en EE.UU. usa 90 dBA, mientras que la UE y muchas otras regiones adoptan el estándar de 85 dBA, que es más protector." },
  { title: "Medición del Ruido", content: "Se utilizan sonómetros para medir los niveles de ruido ambiental y dosímetros para medir la exposición personal de un trabajador durante su jornada." },
  { title: "Jerarquía de Controles", content: "La forma más efectiva de controlar el ruido es: 1. Eliminación, 2. Sustitución, 3. Controles de ingeniería, 4. Controles administrativos, y 5. Equipo de Protección Personal (EPP)." },
  { title: "Tipos de Protección Auditiva", content: "Incluyen tapones para los oídos (desechables o reutilizables) y orejeras. La elección depende del nivel de ruido, la comodidad y el entorno de trabajo." },
  { title: "Colocación Correcta", content: "Es crucial para una protección efectiva. Los tapones deben insertarse correctamente para sellar el canal auditivo. Las orejeras deben cubrir completamente las orejas." },
  { title: "NRR vs Protección Real", content: "El NRR (Noise Reduction Rating) es una medida de laboratorio. La protección real suele ser menor debido a un ajuste incorrecto. Se recomienda reducir el NRR en un 50% para una estimación más realista." },
  { title: "Mantenimiento y Buenas Prácticas", content: "Inspeccione el EPP auditivo regularmente en busca de daños. Limpie los protectores reutilizables. Reemplace los que estén gastados o dañados para asegurar su efectividad." },
];

export const particulateSlides: Slide[] = [
  { title: "Sistema Respiratorio Básico", content: "El aire entra por la nariz/boca, pasa por la tráquea, bronquios y llega a los alvéolos en los pulmones, donde ocurre el intercambio de gases. Las partículas pueden dañar este sistema." },
  { title: "Clasificación por Tamaño", content: "Las partículas se clasifican por su tamaño: Inhalables (>10 µm), Torácicas (<10 µm) y Respirables (<4 µm, como PM2.5). Las más pequeñas son las más peligrosas." },
  { title: "Fuentes Comunes", content: "Las fuentes de material particulado en el trabajo incluyen lijado, corte, molienda, soldadura, y manipulación de polvos. También puede provenir de motores diésel." },
  { title: "Efectos en la Salud", content: "Pueden causar irritación, asma, bronquitis, y enfermedades más graves como silicosis o cáncer de pulmón. Los efectos dependen del tipo y tamaño de la partícula." },
  { title: "Normativas y Límites", content: "Existen límites de exposición ocupacional (LEP) para diferentes tipos de polvo, como sílice, asbesto y polvos de madera, para proteger la salud de los trabajadores." },
  { title: "Jerarquía de Controles", content: "Similar al ruido: 1. Eliminación, 2. Sustitución, 3. Controles de ingeniería (ventilación), 4. Prácticas laborales, y 5. EPP (respiradores)." },
  { title: "Tipos de Respiradores", content: "Hay dos categorías principales: purificadores de aire (eliminan contaminantes del aire) y suministradores de aire (proveen aire limpio de una fuente externa)." },
  { title: "Selección de Filtros", content: "Los filtros se clasifican por su eficiencia (95, 99, 100) y su resistencia al aceite (N, R, P). Un N95 filtra el 95% de partículas y no es resistente al aceite." },
  { title: "Fit Testing y Verificación", content: "El 'Fit Test' (prueba de ajuste) es obligatorio para asegurar que el respirador sella correctamente en la cara del usuario. La verificación del sello se debe hacer cada vez que se usa." },
  { title: "Mantenimiento", content: "Inspeccione los respiradores antes de cada uso. Limpie y desinfecte las piezas no desechables según las instrucciones. Almacene en un lugar limpio y seco." },
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
