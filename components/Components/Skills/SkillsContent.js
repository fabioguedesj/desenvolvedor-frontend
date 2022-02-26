import Skill from './Skill';
import classes from './SkillsContent.module.css';

const SkillsContent = () => {
  return (
    <div className={classes['skills-content__container']}>
      <Skill
        title={'HTML'}
        text={
          'Por ser a responsável pela estrutura do site, também me aprofundei em assuntos como semântica, acessibilidade e performance.'
        }
      />

      <Skill
        title={'CSS'}
        text={
          'Aqui entra toda parte visual do site, desde cores até tipografia. Uma boa estilização pode (e vai) deixar seu cliente com o queixo caído.'
        }
      />

      <Skill
        title={'Sass / Scss'}
        text={
          'Pré-processador que adiciona recursos incríveis ao CSS, permitindo que a escrita do código fique mais simples e eficiente.'
        }
      />

      <Skill
        title={'JavaScript'}
        text={
          'Responsável pela lógica do site, com ele é possível fazer diversas aplicações para automatizar a interação do usuário com a página.'
        }
      />

      <Skill
        title={'ReactJS'}
        text={
          'Facilita a criação de aplicações e páginas WEB através da componentização dos elementos. É ótimo para performance e produtividade.'
        }
      />
    </div>
  );
};

export default SkillsContent;
