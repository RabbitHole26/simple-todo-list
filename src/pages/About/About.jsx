import { Button } from '../../components/StyledComponents/Button'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <div className="flex flex-col flex-grow gap-[50px] p-5 max-w-[600px] xl:max-w-[1000px] items-center md:mt-[50px]">
        <h1 className="text-3xl xl:text-4xl mt-10">
          Hello there! 👋
        </h1>
        <div className='flex flex-col gap-3 md:gap-5 lg:text-xl'>
          <p>
            This is a simple yet effective To-Do list application built with React!
          </p>
          <div>
            You can:
            <ul id='textShadowColorAbout' className='flex flex-col ml-6 pt-3 list-disc'>
              <li>add tasks</li>
              <li>remove tasks</li>
              <li>mark tasks as completed</li>
              <li>export to-do list to a JSON file</li>
            </ul>
          </div>
          <p>
            The application features a clean and intuitive user interface, allowing you to manage tasks efficiently. Tasks are sorted dynamically based on their completion status.
          </p>
          <p>
            Whether you&rsquo;re managing your daily chores or shopping lists, this To-Do list application is designed to streamline your task management process.
          </p>
        </div>
        <div className='flex flex-col gap-5 pb-[120px]'>
          <Button className='lightModeButtonTextColor'>
            <a
              href="mailto:derivatives_four@protonmail.com?subject=To-Do%20app%20feedback"
              >
                Submit feedback
            </a>
          </Button>
          <Link to='/'>
            <Button $primary className='lightModeButtonTextColor'>Back to main page</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About