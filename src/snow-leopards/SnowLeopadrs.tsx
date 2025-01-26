import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import './SnowLeopards.css'
import snowLeopard1 from '@assets/snow-leopards/1.jpg';

export default function SnowLeopards() {

    return (
        <>
        <Header />
        <main className="main-content">
            <section className="work-title">
                <h2 className="snow-leopards">snow leopards</h2>
                <h2>{' '}</h2>
                <div className="figure-annotation">
                    canvas, black ink, watercolours <br />
                    160*95 <br />
                    2021 <br />
                </div>
            </section>
            <section className="work-gallery">                
                <img className="figure-snow-leopards" src='/src/assets/snow-leopards/1.jpg' alt="Snow " />
                <img className="figure-snow-leopards" src='/src/assets/snow-leopards/2.jpg' alt="Snow " />
                <div className="figure-annotation">
                snow leopards, fragment
                </div>
                <img className="figure-snow-leopards" src='/src/assets/snow-leopards/3.jpg' alt="Snow " />
                <div className="figure-annotation">
                snow leopards, fragment
                </div>
                <img className="figure-snow-leopards" src='/src/assets/snow-leopards/4.jpg' alt="Snow " />
                <div className="figure-annotation">
                snow leopards, fragment
                </div>
            </section>
        </main>
        <Footer />
        </>

    )
}