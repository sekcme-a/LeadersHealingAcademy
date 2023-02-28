import '../styles/bootstrap.min.css';
import '../styles/fontawesome.min.css';
import '../styles/animate.min.css';
import '../styles/flaticon.css';
import '../styles/custom/global.css'
import "swiper/css";
import "swiper/css/bundle";
// Global Style
import '../styles/style.css';
import '../styles/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Tuam - Office Space & Property Rental React Template</title>
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={!this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </>
        );
    }
}