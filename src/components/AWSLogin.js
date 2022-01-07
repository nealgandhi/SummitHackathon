import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../src/aws-exports';
import Dashboard from './Dashboard';
import DashboardHeader from './DashboardHeader';
import Footer from './Footer';
import { Link } from 'react-router-dom';
Amplify.configure(awsExports);

function AWSLogin({ signOut, user }) {
  const handleSignout = () => {
    signOut();
  };
  return (
    <>
      <DashboardHeader signOut={handleSignout} />
      <Dashboard />
      <Footer />
    </>
  );
}

export default withAuthenticator(AWSLogin);
