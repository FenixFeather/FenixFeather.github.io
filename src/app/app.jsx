import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

injectTapEventPlugin();

const styles = {
    container: {
	textAlign: 'center',
	marginLeft: "35%",
	marginRight: "35%",
	marginTop: "10%"
    }
};

const MainCard = () => (
    <div style={styles.container}>
 	<Card>
	    <NavTabs />
 	</Card>
    </div>
);

const HomeTab = () => (
    <div>
	<CardTitle title="Welcome to my website!"/>
	<CardText>
 	    Hi. I'm Thomas Liu, a senior at University of Illinois @ Urbana-Champaign pursuing an MS-BS degree in Computer Science.
 	</CardText>
    </div>
)

const InfoList = () => (
    <List>
	<ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
    </List>
)

const AboutTab = () => (
    <div>
	<InfoList />
    </div>
)

const ContactTab = () => (
    <div>
	<CardText>
 	    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 	    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
 	    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
 	    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
 	</CardText>
    </div>
)

const NavTabs = () => (
    <Tabs>
	<Tab label="Home" >
	    <HomeTab/>
	</Tab>
	<Tab label="About" >
	    <AboutTab/>
	</Tab>
	<Tab label="Contact" >
	    <ContactTab/>
	</Tab>
    </Tabs>
);

const App = () => (
    <MuiThemeProvider>
	<MainCard/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
