import CVEntry from '../../components/CVEntry'

export default function CVPage() {
  return (
    <main className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Yassin El Mahi Izikki</h1>
      <h2 className="text-2xl font-bold">Mon CV</h2>

      <CVEntry title="Etudiant en BA3 génie électrique" employer="ECAM">
        <p>Option informatique.</p>
      </CVEntry>

      <CVEntry title="Experience Professionelle" employer="Solidarité Reussite">
        <p>Aide aux devoirs à des étudiants en secondaire</p>
      </CVEntry>
    </main>
  )
}