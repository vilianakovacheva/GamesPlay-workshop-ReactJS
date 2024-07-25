# games-play-may-2024
SoftUni React Course Workshop

## 1. Initialize Project
- [x] Initialize git repo
- [x] Add softuni practice server
- [x] Add base vite react project as client
- [x] CleanUp client
- [x] Add project resources
- [x] Convert html to jsx
- [x] Separate html into components
## 2. React Router
- [x] Install react-router-dom
- [x] Setup react-router-dom
- [x] Add routes in App.jsx
- [x] Add links in the navigation
## 3. Create Service Layer
- [x] Service layer architecture disccusion
- [x] Abstract requester
- [x] Add games api
- [x] Preseed practice server
## 4. Page Implementations
- [x] Game list
- [x] Details
  - [x] Details link
  - [x] Details route
  - [x] Api function - getOne
- [x] Home - Latest Games
## 5. Comments (Advanced)
- [x] Create service for nested resource `comments`
- [x] Post comment to server
- [x] Read comments from server
- [x] Add comments in the component
- [x] Clear form
## 6. API Hooks
- [x] Form Hook
- [] GameAPI Hooks
- [ ] Comment Hooks
## 7. Authentication
- [] Auth API
  - [] Login
  - [] Register
  - [ ] Logout
- [] Auth API hook
  - [] Login
  - [] Register
  - [ ] Logout
- [] Auth state & context
- [] Token management
- [] Login
- [] Register
  - [] Add form validation
- [ ] Logout
- [] Authorized Requests
## 8. UI Implementation 
- [] Dynamic navigation
- [] Create game
  - [] API function
  - [] Hook
- [ ] Latest games

## Notes
  1. Latest Games
     2. URL `http://localhost:3030/data/games?sortBy=_createdOn%20desc&pageSize=3`
     3. USE URLSearchParams
  2. seedData - line 1341 in server.js