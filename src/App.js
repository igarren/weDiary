import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './container/home/Home';
import DataInput from './container/data-input/DataInput';
import AccomplishedTasks from './container/accomplished-tasks/AccomplishedTasks';
import CalendarView from './container/calendar-view/CalendarView';
import SummaryList from './container/summary-list/SummaryList';
import ChartViewDaily from './container/chart-view/chart-view-daily/ChartViewDaily';
import ChartViewMonthly from './container/chart-view/chart-view-monthly/ChartViewMonthly';



function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/edit/daily/:day" component={AccomplishedTasks} />
        <Route path="/edit/:action" component={DataInput} />
        <Route path="/calendar" component={CalendarView} />
        <Route path="/summary-list" component={SummaryList} />
        <Route path="/chart-view-daily" component={ChartViewDaily} />
        <Route path="/chart-view-monthly" component={ChartViewMonthly} />
        <Redirect from='/' to='/home' />
      </Switch>
    </div>
  );
}

export default App;
