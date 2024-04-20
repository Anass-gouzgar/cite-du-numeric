import Description from '@/modules/ContactUs/ContactForm/components/Description'
import React from 'react'
import Container from './components/Container';

const ContactForm = () => {
  return (
    <div className='py-24 flex flex-col justify-center items-center gap-8 '>
      <Description description="Vous avez une idée ou un projet en tête ? Contactez-nous à la Cité du Numérique et faisons-le grandir ensemble. Votre aventure commence ici !" />
      <Container/>
    </div>
  );
}

export default ContactForm