# React User Management Application

This is a React-based user management application built for the Wisdom Peak Analytics Assignment. It fetches user data from a public API, displays it with search, sort, pagination, and dark/light mode features. It also includes a user detail page to view more information about each user.

## **Features**

- **User List Display**:
  - Fetches user data from the API: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).
  - Displays user name, email, and city.
- **Search Functionality**:
  - Allows filtering users by their name using a search bar.
- **Sorting**:
  - Enables sorting of users by name in both ascending (A-Z) and descending (Z-A) order.
- **Pagination**:
  - Divides the user list into pages for better navigation on larger datasets.
- **Dark/Light Mode**:
  - Users can toggle between light and dark themes with a smooth animation.
- **User Detail Page**:
  - Clicking a user’s name navigates to a new page displaying all their details fetched from the API.
- **Loading State**:
  - A loading spinner is displayed while fetching user data.
- **Error Handling**:
  - Gracefully handles API errors and displays an error message.
- **Responsive Design**:
  - Fully responsive and works well on mobile and desktop devices.

## **Installation and Setup**

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/your-username/your-repository-name.git
```
Replace `your-username` and `your-repository-name` with your GitHub details.

### **Step 2: Navigate to the Project Directory**
```bash
cd your-repository-name
```

### **Step 3: Install Dependencies**
Run the following command to install all the required dependencies:

```bash
npm install
```

### **Step 4: Start the Development Server**
To run the project locally, execute:
```bash
npm start

The app will be available at [http://localhost:3000](http://localhost:3000).

## **Modules Installed**

Here’s a list of all the major modules used in this project:

1. **React**: Base library for building the UI.
   - Installed with `npx create-react-app` or already included.
2. **React Router DOM**: For routing between pages.
   ```bash
   npm install react-router-dom

3. **Styled-components**: For modular CSS-in-JS styling.
   ```bash
   npm install styled-components

4. **Loader Animation (`ldrs`)**: For the beautiful helix loader.
   ```bash
   npm install ldrs

5. **React Context API**: Used for global state management (no installation required).

## **Folder Structure**

src/
├── components/
│   ├── CustomButton.js   // Button component for user actions
│   ├── Home.js           // Main page showing the user list
│   ├── Input.js          // Styled search bar
│   ├── SortButton.js     // Sort buttons (A-Z, Z-A)
│   ├── Switch.js         // Dark/Light mode toggle switch
├── context/
│   ├── ThemeContext.js   // Manages dark/light mode globally
│   ├── UserContext.js    // Manages user data, loading, and error states
├── styles/
│   ├── GlobalStyles.js   // Global styling for the app
├── App.js                // Main app component
├── index.js              // Entry point
```

## **How to Run the Code**

1. **Download the Code**:
   - Clone the repository or download it as a ZIP file from GitHub.

2. **Install Required Modules**:
   - Run `npm install` to install all necessary dependencies.

3. **Run the Development Server**:
   - Start the project using `npm start`.


## **How to Use the Application**

1. **Homepage**:
   - See the list of users fetched from the API.
   - Use the search bar to filter users by name.
   - Sort users alphabetically using the "Sort A-Z" and "Sort Z-A" buttons.
   - Navigate between pages using the pagination controls.

2. **Toggle Dark/Light Mode**:
   - Use the toggle switch in the header to switch between light and dark themes.

3. **View User Details**:
   - Click on a user's name or "View Details" button to see all details of that user on a new page.

## **API Used**

This application uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API for mock user data.

- API Endpoint: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
