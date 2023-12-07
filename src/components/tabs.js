import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Tabs1(){
    return(
        <div>
             <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        
      </Tab>
      <Tab eventKey="profile" title="Profile">
       
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        
      </Tab>
    </Tabs>

        </div>
    );
}
export default Tabs1;