import React, { useState } from 'react'
import AnalyticsCard from './AnalyticsCard'
import SearchBar from './SearchBar'

const CardContainer = () => {

    const dataSet = {
        'Monday Bar Chart': [100 , 5, 45, 3, 70, 28, 54, 32, 50, 13, 23, 24, 25], 
        'Bar Chart 2': [1, 6, 3, 13], 
        'Wednesday Bar ': [25, 36, 19, 31],
        'Thursday': [30, 56, 12, 4, 23],
        'Friday': [2, 27, 32, 98, 23]}
    
    const [charts, setCharts] = useState(dataSet)
   
        return(
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh'
            }}>
                <div style={{
                    display:'flex',
                    justifyContent: 'center',
                    margin: '20px'  
                }}><SearchBar
                        data={dataSet}
                        setData={setCharts}
                        />
                        </div>
                
            <div style={{
                display: 'flex',
                overflowX: 'scroll',
                justifyContent: 'space-between',
                scrollMarginLeft: 'auto',
                scrollMarginRight: 'auto'

            }}>
                {Object.keys(charts).map((d) =>    
                     <AnalyticsCard name={d} data={charts[d]} />
                 )} 
            </div>
            </div>
        )
}
export default CardContainer