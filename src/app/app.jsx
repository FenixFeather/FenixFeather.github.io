import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import ActionDescription from 'material-ui/svg-icons/action/description'
import ActionBuild from 'material-ui/svg-icons/action/build'
import ActionAccountBox from 'material-ui/svg-icons/action/account-box'
import ContentMail from 'material-ui/svg-icons/content/mail'

injectTapEventPlugin();

const styles = {
    container: {
	textAlign: 'center',
	marginLeft: "35%",
	marginRight: "35%",
	marginTop: "10%"
    },
    containerMobile: {
        textAlign: 'center',
	margin: 0
    },
    list: {
	padding: "0px 0px"
    }
};

var MainCard = React.createClass({
    render: function() {
	var s = styles.container;
	
	if (window.matchMedia("only screen and (max-width: 760px)").matches) {
	    s = styles.containerMobile;
	}
	
	return (
	    <div style={s}>
 		<Card>
		    <NavTabs />
 		</Card>
	    </div>
	);
    }
});

const HomeTab = () => (
    <div>
	<CardTitle title="Welcome to my website!"/>
	<CardText>
 	    Hi. I'm Thomas Liu, a graduate student at University of Illinois @ Urbana-Champaign pursuing an MS-BS degree in Computer Science.
 	</CardText>
    </div>
)

const InfoList = () => (
    <List style={styles.list}>
	<ListItem primaryText="Resume" leftIcon={<ActionDescription />} href="/thomas_liu_resume.pdf"/>
	<ListItem primaryText="Github" leftIcon={<ActionBuild />} href="https://github.com/FenixFeather"/>
	<ListItem primaryText="LinkedIn" leftIcon={<ActionAccountBox />} href="http://www.linkedin.com/pub/thomas-liu/80/819/618"/>
    </List>
)

const AboutTab = () => (
    <div>
	<InfoList />
    </div>
)

function handleActive(tab) {
    window.location.href = "mailto:tfliu2@illinois.edu";
}

const ContactTab = () => (
    <div>
	<ListItem primaryText="tfliu2@illinois.edu" leftIcon={<ContentMail />} href="mailto:tfliu2@illinois.edu"/>
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
	<Tab label="Contact"
	     data-route="/home"
	     onActive={handleActive}>
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
