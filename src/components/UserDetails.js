import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Button from './BackButton';
import Card from './UserDetailCards';

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <Link to="/"><Button/></Link>
      <h1 style={{fontFamily:'Roboto', fontSize:'40px', textAlign:'center'}}>{user.name}</h1>
      <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center',width:'75%',margin:'auto',maxWidth:'800px'}}>
        <Card label='E-Mail:' content={user.email} />
        <Card label='Phone No:' content={user.phone} />
        <Card label='Website:' content={user.website} />
        <Card label='Company:' content={user.company.name} />
      </div>
      <div style={{textAlign:'center',display:'flex', justifyContent:'center'}}>
        <Card label='Address: ' content={`${user.address.suite}, ${user.address.street}, ${user.address.city}`}/>
      </div>
      
    </div>
  );
};

export default UserDetails;
