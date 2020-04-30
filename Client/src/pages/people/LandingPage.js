import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '../../hooks/react-auth0-spa';
import PeopleSideMenu from '../../components/people/PeopleSideMenu';
import PeopleContent from '../../components/people/PeopleContent';
import { getPeople } from '../../actions/PersonActions';
import OverviewPage from './OverviewPage';
import AddNewPage from './AddNewPage';
import ViewEditPage from './ViewEditPage';


const LandingPage = () => {
  const { Content } = Layout;
  const { getTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const selectedPage = useSelector((state) => state.people.selectedPage);

  useEffect(() => {
    const fetchPeople = async () => {
      dispatch(getPeople(await getTokenSilently()));
    };
    fetchPeople();
  }, []);

  const renderContentPage = () => {
    switch (selectedPage) {
      case 'overview':
        return <OverviewPage />;
      case 'addnew':
        return <AddNewPage />;
      default:
        return <ViewEditPage uId={selectedPage} />;
    }
  };

  return (
    <Layout>
      <Content style={{ padding: '25px 25px' }}>
        <Layout>
          <PeopleSideMenu />
          <PeopleContent>
            {renderContentPage()}
          </PeopleContent>
        </Layout>
      </Content>
    </Layout>
  );
};

export default LandingPage;
