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
