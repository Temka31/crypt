import {useMutation, useQuery} from '@apollo/react-hooks';
import {ROBOTS,GET_COUNTER,UPDATE_COUNTER} from '../GraphQL/Queries';
import * as React from "react";
import Router from 'next/router'
import Link from 'next/link'


export default function Home() {

    const {loading, error, data} = useQuery(ROBOTS);
    const { data : q } = useQuery(GET_COUNTER);
    const [increment] = useMutation(UPDATE_COUNTER, { variables: { offset: 10 } });

    const renderRobots = () => {
        if (!!data && !!data.robots) {
            return data.robots.slice(0,q.counter).map((item) =>
                <div key={item.id}>
                    {item.code}
                    <button onClick={() => {
                        Router.push({
                            pathname: '/robot',
                            query: item,
                        })
                    }}>
                        Подробнее
                    </button>
                    <br/><br/><br/>
                </div>)
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            <div>
                {renderRobots()}
            </div>
            <button onClick={() => {increment()
            }}>Загрузить еще
            </button>
        </div>
    );
}

