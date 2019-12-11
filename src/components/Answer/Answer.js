import React from 'react'
import convert from 'convert-units'

const Answer = (props) => (

    props.answer ? (
        <div className="mt-5">
            <h3>{
                `${props.number} ${
                convert().describe(props.from).singular
                }(s) equals ${props.answer} ${
                convert().describe(props.to).singular
                }(s)`
            }
            </h3>
        </div>
    ) : (
            ""
        )

)

export default Answer