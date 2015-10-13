// third party imports
import React from 'react'
import {Route, IndexRoute} from 'react-router'
// local imports
import Root from './views/Root'
import Home from './views/Home'
import About from './views/About'
import ProjectSearch from './views/ProjectSearch'
import ProjectDetail from './views/ProjectDetail'
import PostSearch from './views/PostSearch'
import PostDetail from './views/PostDetail'
import TagSearch from './views/TagSearch'
import TagDetail from './views/TagDetail'


export default (
    <Route path='/' component={Root}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
        <Route path='projects' component={ProjectSearch} />
        <Route path='projects/:slug' component={ProjectDetail}/>
        <Route path='blog' component={PostSearch} />
        <Route path='blog/:slug' component={PostDetail} />
        <Route path='tags' component={TagSearch} />
        <Route path='tags/:slug' component={TagDetail} />
    </Route>
)


// end of file