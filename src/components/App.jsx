import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import DisplayProduce from './DisplayProduce';
import NewLocationControl from './NewLocationControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

library.add(faStroopwafel);
// import Body from './Body';
// import Icon from './Icon';
// import Nav from './Nav';
// import Ticket from './Links';



// import Error404 from './Error404';

function App(){
  return (
    <div>
      <style jsx global>{`
          body {
            background-color: black;
            margin: 0;
            padding: 0;
            color: #FFF;
          }
        `}</style>
      <Header/>

      <Switch>
        <Route exact path ='/' component={Body} />
        <Route exact path ='/displayproduce' component={DisplayProduce} />
        <Route exact path = '/newlocationcontrol' component={NewLocationControl}/>
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </div>
  );
}


export default App;
