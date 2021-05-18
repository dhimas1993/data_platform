import React from 'react'
import ReactGA from 'react-ga'

ReactGA.initialize('G-NF3LEQ72W2')

const withPageView = (WrappedComponent, option = {}) => {
    const trackPageView = page => {
        ReactGA.set({
            page,
            ...option
        })
        ReactGA.pageview(page)
    }

    return class extends React.Component {
        state = {
            page : null
        }

        static getDerivedStateFromProps(props, state){
            const page = props.location.pathname + props.location.search
            if(page !== state.page){
                return {
                    page
                }
            }
            return null
        }

        componentDidMount(){
            const page = this.props.location.pathname + this.props.location.search
            trackPageView(page)
        }

        componentDidUpdate(prevProps, prevState) {
            const currentPage = prevProps.location.pathname + prevProps.location.search
            const nextPage = this.state.page

            if(currentPage !== nextPage){
                trackPageView(nextPage)
            }
        }
        
        render(){
            return <WrappedComponent {...this.props} />   
        }
    }
}

export default withPageView