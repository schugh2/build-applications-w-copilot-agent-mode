import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            Track workouts, grow your team, and stay motivated with a modern multi-tier fitness app.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="/">Get Started</a>
            <a className="btn btn-outline-secondary btn-lg" href="/">View Dashboard</a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">What’s included</h2>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">• Activity logging</li>
                <li className="mb-2">• Team management</li>
                <li className="mb-2">• Leaderboards</li>
                <li>• Personalized workout suggestions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
