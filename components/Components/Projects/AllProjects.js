import ProjectCard from './ProjectCard';

import tipCalculator from '../../../resources/tipCalculator.jpg';
import countdown from '../../../resources/countdown.jpg';
import pricingPanel from '../../../resources/pricingPanel.jpg';
import qrCard from '../../../resources/qrCard.jpg';
import mentalFlix from '../../../resources/mentalFlix.jpg';
import clinpet from '../../../resources/clinpet.jpg';

import classes from './AllProjects.module.css';

const AllProjects = () => {
  return (
    <div className={classes['all-projects__card']}>
      <ProjectCard
        type={'Aplicativo'}
        title={'Calculadora de gorjeta'}
        orientation={'portrait'}
        image={tipCalculator}
        link={'https://github.com/fabioguedesj/calculadora-de-gorjeta'}
      />

      <ProjectCard
        type={'Interface'}
        title={'Cartão QR'}
        orientation={'portrait'}
        image={qrCard}
        link={'https://github.com/fabioguedesj/frontendmentor/tree/main/qrcode'}
      />

      <ProjectCard
        type={'Página WEB'}
        title={'Mental Flix'}
        orientation={'portrait'}
        image={mentalFlix}
        link={'https://github.com/fabioguedesj/mentalflix'}
      />

      <ProjectCard
        type={'Aplicativo'}
        title={'Countdown'}
        orientation={'portrait'}
        image={countdown}
        link={'https://github.com/fabioguedesj/countdown'}
      />

      <ProjectCard
        type={'Interface'}
        title={'Painel de preços'}
        orientation={'portrait'}
        image={pricingPanel}
        link={'https://github.com/fabioguedesj/pricing-panel'}
      />

      <ProjectCard
        type={'Interface'}
        title={'Clinpet'}
        orientation={'portrait'}
        image={clinpet}
        link={
          'https://github.com/fabioguedesj/yt/tree/main/formulario%20em%20html%20e%20css'
        }
      />
    </div>
  );
};

export default AllProjects;
