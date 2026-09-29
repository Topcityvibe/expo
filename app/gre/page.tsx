import { ExaminationPage } from '@/components/examination-page'

export const metadata = { title: 'GRE Registration Support | Vertex Testing Services Limited', description: 'Professional GRE registration support for graduate, business, and professional opportunities.' }

export default function GREPage() {
  return <ExaminationPage title="GRE – GRADUATE RECORD EXAMINATIONS" intro="The Graduate Record Examinations (GRE) General Test is a widely accepted admissions examination used by graduate, business, and law schools around the world. It measures skills important for success in graduate-level education." sections={[
    { heading: 'GRE GENERAL TEST', paragraphs: ['The GRE General Test measures three major areas: Verbal Reasoning, Quantitative Reasoning, and Analytical Writing.'] },
    { heading: 'VERBAL REASONING', paragraphs: ['This section assesses the ability to understand written material, analyze relationships between words and concepts, evaluate arguments, and draw conclusions from information presented in text.'] },
    { heading: 'QUANTITATIVE REASONING', paragraphs: ['This section evaluates mathematical reasoning and problem-solving abilities using concepts from arithmetic, algebra, geometry, and data analysis.'] },
    { heading: 'ANALYTICAL WRITING', paragraphs: ['This section measures the ability to clearly express complex ideas, construct and evaluate arguments, and communicate effectively in written English.'] },
    { heading: 'WHO TAKES THE GRE?', items: ['Master’s degree programmes', 'Doctoral and PhD programmes', 'MBA and other business programmes', 'Selected law programmes', 'Graduate scholarships and academic opportunities', 'Other postgraduate programmes requiring or accepting GRE scores'] },
    { heading: 'WHY TAKE THE GRE?', paragraphs: ['GRE scores are accepted by thousands of graduate and professional institutions worldwide and can form an important part of a competitive postgraduate application.'] },
    { heading: 'GRE REGISTRATION SUPPORT AT VERTEX', paragraphs: ['Vertex Testing Services Limited provides professional GRE registration support to candidates pursuing postgraduate and professional opportunities around the world. Our team assists with registration, test-date and location selection where available, and general booking guidance.'] }
  ]} />
}
