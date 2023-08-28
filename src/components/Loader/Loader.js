import React from "react"
import PropTypes from "prop-types"

const MAX_SPAN = 6

function Loader({ config, isComponent, wrappedInCol, passedAsProps = false }) {
    const skeletonContent = (
        <div className={isComponent ? "" : "container-fluid-padded"}>
            <div className="flex flexColumn">{getBlocks(config || [], wrappedInCol)}</div>
        </div>
    )

    // react-loadable-visibility adds a div around fallbacks on the client. So we also need to wrap fallbacks with a div on sever.
    // When we pass fallbacks as an option while importing the widgets the library handles this for us, but when we give fallbacks AS PROPS we need to add this div around fallbacks manually on the SERVER ONLY.
    if (passedAsProps) {
        if (typeof window !== "undefined") return skeletonContent
        else return <div>{skeletonContent}</div>
    } else return skeletonContent
}

function getBlocks(config, wrappedInCol) {
    let blocks = []
    let index = 0
    for (let row of config) {
        const { height, classes = "", columns = [] } = row
        /*
         * If row has a span, give it first preference
         * Else if no child columns are present, default to MAX_SPAN
         */
        const span = row.span || (!columns.length && MAX_SPAN)
        /**
         * The prop "wrappedInCol" is used for the cases where component is already wrapped in "col" class
         */
        const spanClass = span && !wrappedInCol ? `col-${span}` : ""
        if (columns.length) {
            blocks.push(
                <div key={index} className={`flex ${classes} ${spanClass}`} style={{ height: height }}>
                    {getColumns(columns)}
                </div>
            )
        } else
            blocks.push(
                <div key={index} className={`${classes} ${spanClass} shimmer`} style={{ height: height }} />
            )
        ++index
    }
    return blocks
}

function getColumns(columns) {
    let blocks = []
    let index = 0
    for (let column of columns) {
        const { span, height, classes, rows = [] } = column
        let colSpanClass = `col-${span}`
        if (!span) {
          colSpanClass = ""
        }
        if (rows.length) {
            blocks.push(
                <div
                    key={index}
                    className={`${classes ? classes : "flex flexColumn"} ${colSpanClass}`}
                    style={{ height: height }}
                >
                    {getRows(rows)}
                </div>
            )
        } else
            blocks.push(
                <div
                    key={index}
                    className={`${classes ? classes : ""} ${colSpanClass} shimmer`}
                    style={{ height: height }}
                />
            )
        ++index
    }
    return blocks
}

function getRows(rows) {
    let blocks = []
    let index = 0
    for (let row of rows) {
        const { span, height, classes = "" } = row
        const rowSpanClass = span ? `col-${span}` : ""
        blocks.push(
            <div key={index} className={`${classes} ${rowSpanClass} shimmer`} style={{ height: height }} />
        )
        ++index
    }
    return blocks
}

Loader.propTypes = {
    config: PropTypes.array.isRequired,
    isComponent: PropTypes.bool,
    wrappedInCol: PropTypes.bool,
    passedAsProps: PropTypes.bool,
}

export default Loader
