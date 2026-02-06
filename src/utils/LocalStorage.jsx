const Employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Review and Update Project Documentation",
                "taskDescription": "Complete the report on market trends.",
                "taskDate": "2025-03-20",
                "category": "Reporting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Bugs in User Authentication Flow",
                "taskDescription": "Fix bugs in the codebase.",
                "taskDate": "2025-03-15",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Optimize Performance for Homepage Load Time",
                "taskDescription": "Update website UI.",
                "taskDate": "2025-03-18",
                "category": "Design"
            }
        ],
        "taskCount": {
            "active": 2,
            "completed": 1,
            "failed": 1,
            "new": 1
        }
    },
    {
        "id": 2,
        "firstName": "Isha",
        "email": "employee2@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Conduct Usability Testing for New Feature",
                "taskDescription": "Conduct performance review meeting.",
                "taskDate": "2025-03-21",
                "category": "HR"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Implement User Profile Page UI",
                "taskDescription": "Attend the client call.",
                "taskDate": "2025-03-17",
                "category": "Client Relations"
            }
        ],
        "taskCount": {
            "active": 1,
            "completed": 1,
            "failed": 0,
            "new": 2
        }
    },
    {
        "id": 3,
        "firstName": "Rahul",
        "email": "employee3@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Refactor Code for Better Readability and Maintainability",
                "taskDescription": "Research on new software tools.",
                "taskDate": "2025-03-19",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Integrate API for Data Fetching",
                "taskDescription": "Update documentation for the project.",
                "taskDate": "2025-03-16",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Unit Tests for Newly Implemented Components",
                "taskDescription": "Organize the team-building event.",
                "taskDate": "2025-03-25",
                "category": "Event Planning"
            }
        ],
        "taskCount": {
            "active": 2,
            "completed": 1,
            "failed": 0,
            "new": 1
        }
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Deploy Staging Version to Production",
                "taskDescription": "Test the latest release.",
                "taskDate": "2025-03-22",
                "category": "QA"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Collaborate with the Design Team for UI Updates",
                "taskDescription": "Fix critical bug in the codebase.",
                "taskDate": "2025-03-18",
                "category": "Development"
            }
        ],
        "taskCount": {
            "active": 1,
            "completed": 0,
            "failed": 1,
            "new": 2
        }
    },
    {
        "id": 5,
        "firstName": "Ananya",
        "email": "employee5@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix Broken Links on the Website",
                "taskDescription": "Prepare sales pitch for upcoming product launch.",
                "taskDate": "2025-03-23",
                "category": "Sales"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement User Role-Based Access Control",
                "taskDescription": "Create a marketing strategy document.",
                "taskDate": "2025-03-17",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Investigate and Resolve Security Vulnerabilities",
                "taskDescription": "Conduct product demos for the client.",
                "taskDate": "2025-03-14",
                "category": "Sales"
            }
        ],
        "taskCount": {
            "active": 2,
            "completed": 1,
            "failed": 0,
            "new": 1
        }
    }
]

const Admin = [
    {
        "id": 1,
        "email": "admin@me.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('Employees', JSON.stringify(Employees))
    localStorage.setItem('Admin', JSON.stringify(Admin))
}

export const getLocalStorage = () => {
    const Employees = JSON.parse(localStorage.getItem('Employees'))
    const Admin = JSON.parse(localStorage.getItem('Admin'))
    return { Employees, Admin }
}
