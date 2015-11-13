// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
// local imports
import TagPreview from './TagPreview'
import SearchView from 'components/SearchView'
import colors from 'assets/styles/js/colors'


function mapStateToProps({tags}) {
    return {
        tags: tags.map(tag => ({
            ...tag,
            link: `/tags/${tag.slug}`,
        })),
    }
}


@connect(mapStateToProps)
export default class TagSearch extends Component {
    static propTypes = {
        location: PropTypes.shape({
            query: PropTypes.shape({
                search: PropTypes.string,
            }).isRequired,
        }).isRequired,
        tags: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            description: PropTypes.string,
        })).isRequired,
    }


    render() {
        const {
            location: {query: {search: initialSearchText}},
            tags,
        } = this.props

        return (
            <SearchView
                bannerImageSrc='/static/images/bird-logo.png'
                bannerColor={colors.palette.sand.css()}
                title='Tags'
                subtitle='gotta love em.'
                items={tags}
                mapItemToSearchFields={tag => [tag.title]}
                PreviewComponent={TagPreview}
                initialSearchText={initialSearchText}
            />
        )
    }
}