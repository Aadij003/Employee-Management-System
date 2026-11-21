
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@gmail.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage design for the company website.",
        taskDate: "2026-11-22",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Develop Login Page",
        taskDescription: "Build a login page with email and password validation.",
        taskDate: "2026-11-23",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription: "Develop a responsive navigation bar for the website.",
        taskDate: "2026-11-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix UI Bugs",
        taskDescription: "Fix alignment and responsiveness issues on the dashboard.",
        taskDate: "2026-11-19",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare documentation for the homepage components.",
        taskDate: "2026-11-24",
        category: "Documentation"
      }
    ]
  },
  {
    id: 2,
    firstName: "Amit",
    email: "employee2@gmail.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Develop an interactive employee dashboard.",
        taskDate: "2026-11-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure the database and create required tables.",
        taskDate: "2026-11-17",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate the employee APIs with the frontend.",
        taskDate: "2026-11-23",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Testing",
        taskDescription: "Perform testing of the employee dashboard.",
        taskDate: "2026-11-19",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@gmail.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create User Profile",
        taskDescription: "Build a user profile page with editable details.",
        taskDate: "2026-11-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Research Competitors",
        taskDescription: "Analyze competitor websites and prepare a report.",
        taskDate: "2026-11-18",
        category: "Research"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Improve Performance",
        taskDescription: "Optimize website loading speed and performance.",
        taskDate: "2026-11-24",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prepare Report",
        taskDescription: "Prepare the monthly employee performance report.",
        taskDate: "2026-11-19",
        category: "Reporting"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Update website content and images.",
        taskDate: "2026-11-25",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the code submitted by other developers.",
        taskDate: "2026-11-20",
        category: "Development"
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@gmail.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Design and develop a landing page for a new product.",
        taskDate: "2026-11-22",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add search functionality to the employee portal.",
        taskDate: "2026-11-23",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve CSS styling issues across different pages.",
        taskDate: "2026-11-18",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Meeting",
        taskDescription: "Prepare and present the project progress to the client.",
        taskDate: "2026-11-19",
        category: "Meeting"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Responsive Design",
        taskDescription: "Make all website pages responsive for mobile devices.",
        taskDate: "2026-11-25",
        category: "Design"
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@gmail.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Contact Page",
        taskDescription: "Develop a contact page with a working contact form.",
        taskDate: "2026-11-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Authentication",
        taskDescription: "Implement basic user authentication functionality.",
        taskDate: "2026-11-18",
        category: "Security"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Email Integration",
        taskDescription: "Integrate email notifications into the application.",
        taskDate: "2026-11-24",
        category: "Integration"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the latest application build to the server.",
        taskDate: "2026-11-19",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Create test cases for the main application features.",
        taskDate: "2026-11-25",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Project Planning",
        taskDescription: "Prepare the development timeline for the next sprint.",
        taskDate: "2026-11-20",
        category: "Planning"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage=()=>{
 localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
   const employees =JSON.parse(localStorage.getItem('employees'))
   const admin =JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
   
}