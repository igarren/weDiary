import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import classes from './Graph.module.css'

const graph = (props) => {

    return (
        <div className={classes.Graph}>
            <ResponsiveContainer>
                <LineChart
                    data={props.data}
                    margin={{
                        top: 5, right: 40, left: -10, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend verticalAlign="top" height={36}
                        wrapperStyle={{
                            marginLeft: "26px"
                        }} />
                    <XAxis dataKey="date" />
                    <YAxis type="number"
                        ticks={[1, 2, 3, 4, 5, 6, 7]}
                        allowDecimals={true} />
                    <Tooltip />
                    <Line name='回答平均値' type="monotone" dataKey="satisfaction" stroke="green" />

                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default graph;


