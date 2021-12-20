import React from 'react'
import FileA from './PracticeComponent/FileA'
import FileB from './PracticeComponent/FileB'
import ValueContextProvider from './contextComponent/Valuecontext'

function App1() {
    return (
        <ValueContextProvider>
        <div>
            <h1>context api</h1>
            <FileA/>
            <FileB/>
        </div>
         </ValueContextProvider> 
    )
}

export default App1
