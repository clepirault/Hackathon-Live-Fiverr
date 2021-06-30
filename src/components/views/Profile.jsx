import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

function Profile() {
  return (
    <div>
      <div>Profile</div>
      <MainLayout>
        <Link to="/">Settings</Link>
      </MainLayout>
    </div>
  );
}

export default Profile;
