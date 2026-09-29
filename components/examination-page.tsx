import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export type ExaminationSection = {
  heading: string
  paragraphs?: string[]
  items?: string[]
}

type ExaminationPageProps = {
  title: string
  intro: string
  sections: ExaminationSection[]
}

export function ExaminationPage({ title, intro, sections }: ExaminationPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-card border-b border-border py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">Vertex Testing Services Limited</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">{title}</h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto">{intro}</p>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 space-y-12">
            {sections.map((section) => (
              <section key={section.heading} className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground mb-4 last:mb-0">{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="grid gap-3 sm:grid-cols-2 text-lg text-muted-foreground">
                    {section.items.map((item) => <li key={item} className="flex gap-3"><span className="text-primary font-bold">•</span><span>{item}</span></li>)}
                  </ul>
                )}
              </section>
            ))}
            <div className="rounded-2xl bg-primary p-8 text-center text-primary-foreground">
              <h2 className="text-2xl font-bold mb-2">VERTEX TESTING SERVICES LIMITED</h2>
              <p className="text-lg">Your Gateway to Global Success.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
