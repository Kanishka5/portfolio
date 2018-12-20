import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import Index from './components/index';
import Hire from './components/Contactpage';

const BaseRouter = () => (
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Index} />
                <Route exact path='/contact/' component={Hire} />
            </div>

        </BrowserRouter>
);

export default BaseRouter;