// fix node land
import 'babel-core/polyfill'
// third party imports
import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import favicon from 'serve-favicon'
import serveStatic from 'serve-static'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match} from 'react-router'
import Helmet from 'react-helmet'
// local imports
import {
    buildDir,
    assetsDir,
    favicon as faviconPath,
    templatesDir,
} from 'config/projectPaths'
import routes from 'routes'
import {createStore} from 'store'
import App from 'App'
import queryApi from 'api/queryApi'
import articleFragment from 'api/articleFragment'
import {mergeAll as mergeAllPosts} from 'store/ducks/posts'
import {mergeAll as mergeAllProjects} from 'store/ducks/projects'
import {mergeAll as mergeAllTags} from 'store/ducks/tags'


const server = express()


/* Application-wide Settings */

// use jade for html templating
server.set('view engine', 'jade')
// set directory in which to search for html templates
server.set('views', templatesDir)


/* Application-wide Middleware */

// log requests
server.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
// serve favicon
server.use(favicon(faviconPath))
// compress responses
server.use(compression())


/* Routing */

// route static files to build and assets dirs
server.use('/static', serveStatic(buildDir), serveStatic(assetsDir))
// route all surviving requests through the react-router routes
server.all('*', async function (req, res) {
    // figure out the appropriate route
    match({routes, location: req.url}, async function (error, redirectLocation, renderProps) {
        // if there was an error
        if (error) {
            res.status(500).send(error.message)
        // if route was found but is redirect
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        // if route was found and is not a redirect
        } else {
            // grab initial data for store from admin service
            // TODO: dont just wildly grab all data.
            const {posts, projects, tags} = await queryApi(`
                query {
                    posts {
                      ...articleFragment
                    }
                    projects {
                      ...articleFragment
                    }
                }
                ${articleFragment}
            `)

            // create redux store
            const store = createStore()
            // populate store with initial data
            // store.dispatch(mergeAllPosts(posts))
            // store.dispatch(mergeAllProjects(projects))
            // store.dispatch(mergeAllTags(tags))

            // initial application state
            const initialState = JSON.stringify(store.getState())
            // rendered app
            const renderedComponent = renderToString(
                <App
                    store={store}
                    renderProps={renderProps}
                    radiumConfig={{
                        userAgent: req.headers['user-agent'],
                    }}
                />
            )

            // see: https://github.com/nfl/react-helmet#server-usage
            Helmet.rewind()

            // render jade template with component mounted
            res.render('index.jade', {
                initialState,
                renderedComponent,
            })
        }
    })
})


export default server
