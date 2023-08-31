import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE_QUERY } from '../../../utils/queries';

function AccountInfo() {
  const [profile, setProfile] = useState({});
  const { data, error, loading } = useQuery(PROFILE_QUERY, {
    variables: { uid: parseInt(window.location.search.match(/uid=(\d+)/)) },
  });

  useEffect(() => {
    if (loading) return;
    setProfile(data.profile);
  }, [data, loading]);

  return (
    <div>
      <h2>Account Information</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Password: {profile.password}</p>
    </div>
  );
}

export default AccountInfo;