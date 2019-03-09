import React from 'react';

export default function(props) {
    return (   
        <>
            <h2>Sidebar</h2>
            {props.isOpen && (
                <div style={{color: 'red', fontSize: `${props.fontSize}px`}}>
                    {props.children}
                </div>        
            )}            
        </>              
    )
}