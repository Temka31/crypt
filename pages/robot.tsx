import { withRouter } from 'next/router'
import Router from 'next/router'


function Robot({ router }) {
    console.log(router.query)
    return (
        <div>
        <button onClick={() => Router.back()}>Back</button>
        <p>{router.query.code} : {router.query.status}</p>
        </div>
    )
}

export default withRouter(Robot)
