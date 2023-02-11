import React from 'react';
import Image from './Image';
import AboutSection from '../components/UI/AboutSection';

const Dashboard = () => {
    return (
        <div>
            <Image/>
            <section id="section-1">
            <AboutSection/>
            </section>
        </div>
    );
    
};
export default Dashboard;