import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "../views/Landing";
import TeacherList from "../views/TeacherList";
import TeacherForm from "../views/TeacherForm";

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Landing} />
    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />
  </BrowserRouter>
);

export default Routes;
