import { useCommand } from './hooks/useCommand'

function App() {
  const { data, error } = useCommand('getblock')
  console.log('Error:', error)
  console.log('Data:', data)
  return (
    <div>
      {error && <div>Error: {error?.message}</div>}
      {data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  )
}

export default App
