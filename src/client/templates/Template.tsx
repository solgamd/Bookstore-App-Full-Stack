import * as React from 'react';

export interface TemplateProps { }
export interface TemplateState { }

export default class Template extends React.Component<TemplateProps, TemplateState> {
    render() {
        return(
            <h1>Test Page</h1>
        );
    }
    
}

