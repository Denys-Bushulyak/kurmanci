import React from 'react';

export const Definition = ({definition, children})=>{
    return <span style={{cursor:'help'}} title={definition}>{children}</span>
}