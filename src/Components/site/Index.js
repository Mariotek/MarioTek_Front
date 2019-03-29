import React from 'react';
import OurTeam from './OurTeam';
import TopBrand from './TopBrand';
import LigtBeam from './LightBeam';
import Footer from './Footer';
import SuperMarioGame from './SuperMario/SuperMarioGame';


const Index = () => (
    <React.Fragment>

        <TopBrand/>
        <SuperMarioGame/>

        <div className={'afterGameDescription'}>

            <LigtBeam />
            <div className={'offerText'}>میتونین کتاب ها رو از طریق سایت سفارش بدین تا دو تا استیکر خوشگل 😍 با
                        المان‌های بازی سوپر ماریو به همراه کتاب 📖 امضای شده توسط نویسنده دریافت کنید.

            <div className={'doPaymentBtn ripple'}><i className={'fa fa-shopping-basket'}/> ثبت سفارش</div>
            </div>

            <OurTeam/>


        </div>

        <Footer />
    </React.Fragment>
);

export default Index;
