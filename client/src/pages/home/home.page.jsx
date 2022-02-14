import Directory from '../../components/directory-menu/directory.component';
import './home.styles.scss';
import { HomePageContainer } from './home.styles';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;
