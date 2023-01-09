import TaskForm from './componentes/TaskForm' //importo componente TaskForm
import TaskList from './componentes/TaskList' //importo componente TaskList

function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
      <TaskForm />
      <TaskList />
      </div>

    </main>
  )
}
export default App