import React from 'react'

function MemoComp(props) {
    const { name } = props;
    console.log('Rendering memo component')
    return (
        <div>
            MemoComp - { name }
        </div>
    )
}

export default React.memo(MemoComp)
