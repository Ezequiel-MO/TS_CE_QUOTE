import './App.css'
import Budget from './components/budget/Budget'
import TableHeader from './components/budget/TableHeader'
import TransferInLine from './components/budget/TransferInLine'
import TransferInMeetGreet from './components/budget/TransferInMeetGreet'
import { useFetchCurrentProject } from './hooks/useFetchCurrentProject'

function App() {
  const { currentProject } = useFetchCurrentProject('BMMTEST2011')

  return (
    <Budget project={currentProject}>
      <table>
        <TableHeader />
        <tbody>
          <TransferInMeetGreet />
          <TransferInLine />
        </tbody>
      </table>
    </Budget>
  )
}

export default App
