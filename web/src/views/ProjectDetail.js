// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// import {createSelector} from 'reselect'
// local imports
import NotFound from 'views/NotFound'
import Article from 'components/Article'
import {nestProject} from 'util/nest'


// TODO: this should be a reselect selector
function mapStateToProps({projects, tags}, {params: {slug}}) {
    const desiredProject = projects.filter(project => project.slug === slug)[0]

    return {
        project: desiredProject && nestProject(desiredProject, tags),
    }
}


@connect(mapStateToProps)
@radium
export default class ProjectDetail extends Component {
    static propTypes = {
        project: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
            bannerColor: PropTypes.string,
            imageSrc: PropTypes.string,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            content: PropTypes.string.isRequired,
            creationDate: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.shape({
                link: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
            })).isRequired,
        })]),
    }


    static defaultProps = {
        // TODO: pick a default project color
        // (maybe just brighten whatever is used for the ProjectSearch banner)
        bannerColor: 'transparent',
        // TODO: pick a default project image
        imageSrc: '',
    }


    render() {
        const {project} = this.props

        if (project) {
            return <Article {...project} />
        }
        return <NotFound />
    }
}