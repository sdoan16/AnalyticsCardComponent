import React, { useState } from 'react'
import { SearchInput, Button } from 'evergreen-ui'

const filterKeywords = ({text, data, setData}) => {
    const resultSet = Object.entries(data).filter(d => d[0].includes(text))
    const matches = Object.fromEntries(resultSet)
    setData(matches)
}

const SearchBar = ({data, setData}) => {
    const [text, setText] = useState('')
    
    return (
        <div style={{
            display: 'flex'
        }}>
            <SearchInput
            onChange={(e) => {
                setText(e.target.value)
                setData(data)
            }}
            value = {text}
             /> 
             <Button 
                marginLeft={15}
                appearance='primary'
                onClick={() => 
                filterKeywords({text, data, setData})
                    
                }>Search</Button>
                
        </div>
        
    )
}

export default SearchBar