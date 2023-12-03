import Header from "@/components/header"
import Lists from "@/components/list"
import AddTasks from "@/components/button"

export default function Home(): JSX.Element {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Lists />
      </main>
      <footer>
        <AddTasks />
      </footer>
    </>
  )
}
