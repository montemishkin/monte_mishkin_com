// node imports
import {readFileSync} from 'fs'
import {join as joinPaths} from 'path'
// local imports
import markdown from 'util/markdown'


// TODO: put data in actual database...


const posts = [
    {
        id: 0,
        slug: 'redux-responsive',
        title: 'Managing Responsive State in React',
        subtitle: 'Isn\'t this fun?',
        imageSrc: '/static/images/finchz_medium.jpg',
        bannerColor: '#8CB2FF',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [1, 4],
    }, {
        id: 1,
        slug: 'react-hello-world',
        title: 'Introduction to React',
        subtitle: 'I swear, it\'s easy.',
        imageSrc: '/static/images/bird-logo.png',
        bannerColor: '#59B342',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [0, 2],
    }, {
        id: 2,
        slug: 'redux-responsive',
        title: 'Managing Responsive State in React',
        subtitle: 'Isn\'t this fun?',
        imageSrc: '/static/images/finchz_medium.jpg',
        bannerColor: '#f1793f',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [2, 3],
    }, {
        id: 3,
        slug: 'react-hello-world',
        title: 'Introduction to React',
        subtitle: 'I swear, it\'s easy.',
        imageSrc: '/static/images/bird-logo.png',
        bannerColor: '#d7d7d7',
        creationDate: '2015-09-07T00:00:36.049780Z',
        modificationDate: '2015-09-07T00:00:36.049780Z',
        tags: [0, 1, 4],
    },
]


export default posts.map(post => ({
    ...post,
    // render content from markdown to hmtl
    content: markdown(
        // grab markdown content from filesystem
        readFileSync(joinPaths(__dirname, `${post.slug}.md`)).toString()
    ),
}))