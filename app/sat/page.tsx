import { ExaminationPage } from '@/components/examination-page'

export const metadata = { title: 'SAT Registration Support | Vertex Testing Services Limited', description: 'Professional SAT registration support for undergraduate admission and international academic opportunities.' }

export default function SATPage() {
  return <ExaminationPage title="SAT – SCHOLASTIC ASSESSMENT TEST" intro="The SAT is a standardized college admissions examination widely used by universities and colleges, particularly in the United States, as part of their undergraduate admissions process. It measures essential academic skills and evaluates readiness for university-level education." sections={[
    { heading: 'DIGITAL SAT', paragraphs: ['The SAT is administered digitally and focuses on two major areas: Reading and Writing, and Math.'] },
    { heading: 'READING AND WRITING', paragraphs: ['This section assesses the ability to understand, analyze, and interpret written information.'], items: ['Reading comprehension', 'Vocabulary in context', 'Grammar and language usage', 'Analysis of written passages', 'Effective communication of ideas'] },
    { heading: 'MATH', paragraphs: ['The Math section evaluates mathematical reasoning, problem-solving, and the application of mathematical concepts.'], items: ['Algebra', 'Advanced Math', 'Problem-Solving and Data Analysis', 'Geometry and Trigonometry'] },
    { heading: 'WHO TAKES THE SAT?', items: ['Undergraduate admission', 'Admission to universities and colleges in the United States', 'International university opportunities', 'Merit-based scholarships', 'Academic placement opportunities', 'Other programmes where SAT scores are accepted or required'] },
    { heading: 'WHY TAKE THE SAT?', paragraphs: ['SAT scores can form part of an undergraduate application and may also be considered for scholarships, academic placement, and other educational opportunities. Candidates should always confirm current requirements with their chosen institution.'] },
    { heading: 'SAT REGISTRATION SUPPORT AT VERTEX', paragraphs: ['Vertex Testing Services Limited provides professional SAT registration support for students pursuing undergraduate education and international academic opportunities. Our team assists with registration, available test-date and test-centre selection, and general booking guidance.'] }
  ]} />
}
