import { ExaminationPage } from '@/components/examination-page'

export const metadata = { title: 'TOEFL Registration Support | Vertex Testing Services Limited', description: 'Professional TOEFL registration support for international education and professional opportunities.' }

export default function TOEFLPage() {
  return <ExaminationPage title="TOEFL – TEST OF ENGLISH AS A FOREIGN LANGUAGE" intro="The Test of English as a Foreign Language (TOEFL) is an internationally recognized English-language proficiency examination designed to measure a candidate’s ability to use and understand English in academic environments. TOEFL scores are accepted by thousands of universities and institutions around the world." sections={[
    { heading: 'TOEFL iBT', paragraphs: ['The TOEFL iBT assesses four essential English-language skills: Reading, Listening, Speaking, and Writing.'] },
    { heading: 'READING', paragraphs: ['The Reading section measures a candidate’s ability to understand and analyze academic texts written in English.'] },
    { heading: 'LISTENING', paragraphs: ['The Listening section evaluates the ability to understand conversations, lectures, and other spoken English commonly encountered in academic environments.'] },
    { heading: 'SPEAKING', paragraphs: ['The Speaking section measures a candidate’s ability to communicate clearly and effectively in English in academic situations.'] },
    { heading: 'WRITING', paragraphs: ['The Writing section evaluates the ability to organize ideas, respond appropriately to academic material, and communicate effectively in written English.'] },
    { heading: 'WHO TAKES TOEFL?', items: ['Undergraduate admission', 'Master’s and postgraduate programmes', 'Doctoral and PhD programmes', 'International scholarships', 'Professional opportunities', 'Other programmes requiring proof of English-language proficiency'] },
    { heading: 'WHY TAKE TOEFL?', paragraphs: ['TOEFL provides candidates with an internationally recognized way to demonstrate English-language proficiency for education, scholarships, professional opportunities, and other international pathways.'] },
    { heading: 'TOEFL REGISTRATION SUPPORT AT VERTEX', paragraphs: ['Vertex Testing Services Limited provides professional TOEFL registration support. Our team assists with registration, available test dates and locations, and general booking guidance for an accurate and convenient experience.'] }
  ]} />
}
