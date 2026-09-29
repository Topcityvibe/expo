import { ExaminationPage } from '@/components/examination-page'

export const metadata = { title: 'CELPIP Registration Support | Vertex Testing Services Limited', description: 'Professional CELPIP registration support for Canadian immigration and citizenship pathways.' }

export default function CELPIPPage() {
  return <ExaminationPage title="CELPIP – CANADIAN ENGLISH LANGUAGE PROFICIENCY INDEX PROGRAM" intro="The Canadian English Language Proficiency Index Program (CELPIP) is an English language proficiency test designed to assess a candidate’s ability to communicate effectively in everyday English. CELPIP is widely used for Canadian immigration and citizenship purposes and is administered entirely by computer." sections={[
    { heading: 'CELPIP TEST OPTIONS', paragraphs: ['CELPIP-General assesses Listening, Reading, Writing, and Speaking. It is accepted by Immigration, Refugees and Citizenship Canada (IRCC) for several permanent residence and immigration programs, subject to the requirements of the particular program.', 'CELPIP-General LS assesses Listening and Speaking and is commonly used for Canadian citizenship applications where an approved language test is required.'] },
    { heading: 'WHY TAKE CELPIP?', paragraphs: ['CELPIP provides candidates with a fully computer-delivered English language testing experience and focuses on practical English communication in everyday situations.'], items: ['Canadian Permanent Residence', 'Express Entry', 'Certain Provincial Nominee Programs', 'Canadian Citizenship', 'Certain professional designations and other accepted purposes'] },
    { heading: 'CELPIP REGISTRATION SUPPORT AT VERTEX', paragraphs: ['Vertex Testing Services Limited provides professional registration support for candidates who wish to take the CELPIP examination. Our team assists candidates with understanding the appropriate test type, navigating registration, and selecting available test dates and locations.', 'Whether your goal is Canadian permanent residence, citizenship, or another pathway that accepts CELPIP, Vertex is ready to support your examination journey.'] }
  ]} />
}
