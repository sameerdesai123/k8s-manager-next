import React from 'react'
import PropTypes from 'prop-types'
import EmptyView from "./empty-view";

const WorkWindow = ({ windowType, rootStyleClasses }) => {
  switch (windowType) {
    case "ListView":
        return (<> {/* <ListView /> */}</>)
    case "DetailView":
        return (<> {/* <DetailView /> */}</>)
    case "StreamView":
        return (<> {/* <StreamView /> */}</>)
  
    default:
        return (<EmptyView rootStyleClasses={rootStyleClasses}/>);
  }
}

WorkWindow.propTypes = {
    windowType: PropTypes.elementType,
    rootStyleClasses: PropTypes.string,
}

WorkWindow.defaultProps = {
    windowType: EmptyView,
}

export default WorkWindow