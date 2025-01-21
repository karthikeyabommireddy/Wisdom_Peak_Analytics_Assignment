import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import SortButton from './SortButton';
import Input from './Input';
import { helix } from 'ldrs';
import Switch from './Switch';
import { useTheme } from '../context/ThemeContext';

helix.register();

const Home = () => {
  const { users, setUsers, loading, setLoading, error, setError } = useContext(UserContext);
  const { toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setSortedUsers(data);
      } catch (err) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [setUsers, setLoading, setError]);


  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSortedUsers(filteredUsers);
  }, [searchQuery, users]);


  const handleSort = (order) => {
    setSortOrder(order);
    const sortedList = [...sortedUsers].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (order === 'asc') {
        return nameA < nameB ? -1 : 1;
      } else {
        return nameA > nameB ? -1 : 1;
      }
    });
    setSortedUsers(sortedList);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <l-helix size="45" speed="2.5" color="black"></l-helix>
      </div>
    );
  }

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>; 
  }

  return (
    <div>
        <h1 style={{ textAlign: 'center', fontFamily:'Roboto', fontSize:'40px' }}>User Data</h1>
        {/*<div style={{display:'flex',justifyContent:'flex-end'}}><Switch style={{alignItems:'flex-end'}} onClick={toggleTheme} /></div>*/}
      <div style={{ textAlign: 'center', marginBottom: '20px' , display:'flex',justifyContent:'center'}}>
        <Input onChange={(e) => setSearchQuery(e.target.value)} />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '50px' }}>
        <SortButton onClick={() => handleSort('asc')} label="Sort A-Z" />
        <SortButton onClick={() => handleSort('desc')} label="Sort Z-A" />
      </div>

      <ul style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
        {sortedUsers.map((user) => (
          <li key={user.id} style={{ padding: '10px', margin: '10px', border: '1px solid #ccc', maxWidth:'65vw', minWidth:'54vw', listStyle:'none',borderRadius:'20px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div style={{marginRight:'12px', maxWidth:'50%'}}>
                    <div style={{fontSize:'20px'}}>
                        <strong>{user.name}</strong>
                    </div>
                    <div style={{fontSize:'0.95em'}}>{user.email}</div>
                    <div>{user.address.city}</div>
                </div>
                <div style={{maxWidth:'50%'}}>
                    <Link to={`/user/${user.id}`} style={{ textDecoration: 'none', color: '#333', fontSize: '1.2rem' }}><CustomButton userId={user.id} /></Link>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
