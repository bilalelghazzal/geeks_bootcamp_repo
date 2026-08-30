import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaSript', votes: 0 },
    { name: 'Java', votes: 0 }
  ])

  const incrementVote = (languageName) => {
    setLanguages(languages.map((language) => {
      if (language.name === languageName) {
        return { ...language, votes: language.votes + 1 }
      };
      return language;
    }))
  }

  return (
    <>
    <h1>Vote Your Language</h1>
    <div>
    {languages.map((language) => (
      <div key={language.name} className="">
        <p>{language.name}: {language.votes}</p>
        <button onClick={() => incrementVote(language.name)}>Click me</button>
      </div>
    ))}
    </div>
    </>
  )
}

export default App
