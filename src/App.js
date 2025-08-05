import "./App.css"
import UserTable from "./components/UserTable"

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>ContactPoint360</h1>
          <p>User Data Management System</p>
        </header>
        <main className="content">
          <UserTable />
        </main>
      </div>
    </div>
  )
}

export default App
