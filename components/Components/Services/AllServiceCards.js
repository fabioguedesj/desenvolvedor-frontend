import ServiceCard from './ServiceCard';

import classes from './AllServiceCards.module.css';

const AllServiceCards = () => {

  return (
    <div className={classes['all-services__container']}>
      <ServiceCard
        title='Mentoria individual'
        text='Ideal pra quem busca atenção personalizada em dúvidas técnicas ou de carreira.'
        price='$49.00'
        items={{
          first: '1 Pessoa',
          second: '45 minutos',
          third: 'Dúvidas ténicas',
          fourth: 'Transição de carreira',
        }}
        textButton={'Indisponível'}
      />

      <ServiceCard
        title='Mentoria em grupo'
        text='Ideal pra grupos que estudam juntos ou possuem a mesma dúvida.'
        price='$39.00'
        items={{
          first: 'Até 5 Pessoas',
          second: '55 minutos',
          third: 'Dúvidas ténicas',
          fourth: 'Transição de carreira',
        }}
        textButton={'Indisponível'}
      />

      <ServiceCard
        title='Desenvolvimento WEB'
        text='Páginas WEB personalizadas para empreendedores que desejam dar vida ao seu negócio.'
        price='A combinar'
        items={{
          first: 'Domínio + Hospedagem',
          second: 'Design personalizado',
          third: 'Otimizado para mobile',
          fourth: 'Páginas rápidas',
        }}
        textButton={'Indisponível'}
      />
    </div>
  );
};

export default AllServiceCards;
