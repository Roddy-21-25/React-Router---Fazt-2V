export const Landing = () => <h2>Landing Page (Public)</h2>

// eslint-disable-next-line react/prop-types
export const Home = () => {
    return <h2>Home Page (Private)</h2>
}

export const Dashboard = () => <h2>Dashboard Page (Private)</h2>
export const Analytics = () => <h2>Analytics Page (Private, permission: analize)</h2>
export const Admin = () => <h2>Admin Page (Private, permission: admin)</h2>