
import React from 'react';

const Footer: React.FC = () => {
  const whatsappNumber = "5531980406930";
  const consultationMessage = encodeURIComponent("Olá! Gostaria de uma consultoria especializada sobre o orçamento do meu casamento com a Buttterfly Cerimonial e Eventos.");
  const instagramQuestionsMessage = encodeURIComponent("Olá! Comecei a seguir a Buttterfly Cerimonial e Eventos no Instagram e gostaria de fazer minhas 3 perguntas bônus sobre o casamento.");
  const budgetFormLink = "https://bit.ly/2KUsE3jorçamento"; 
  const instagramProfileLink = "https://www.instagram.com/butterflycerimonialeeventos/";

  return (
    <footer className="bg-[#EAE6E1] text-[#6A5256] py-10 mt-12">
      <div className="container mx-auto px-4 text-center">
        
        {/* Call to Action Section */}
        <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-[#D1C7C0]">
          <h3 className="text-2xl font-semibold text-[#8C6B72] mb-4">Próximos Passos para o Seu Sonho</h3>
          <p className="text-gray-700 mb-2">
            Esta calculadora é um excelente ponto de partida.
          </p>
          <p className="text-gray-700 mb-6">
            Para um planejamento detalhado e uma assessoria que reflete mais de uma década de experiência e reconhecimento no mercado, conte com a <span className="font-semibold text-[#8C6B72]">Buttterfly Cerimonial e Eventos</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${consultationMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#8C6B72] hover:bg-[#7A5B60] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full sm:w-auto"
              aria-label="Entrar em contato por WhatsApp para consultoria especializada"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>Consultoria Especializada
            </a>
            <a
              href={budgetFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#A0878D] hover:bg-[#8C6B72] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full sm:w-auto"
              aria-label="Solicitar orçamento detalhado"
            >
              <i className="fas fa-file-invoice-dollar mr-2 text-lg"></i>Solicitar Orçamento Detalhado
            </a>
          </div>

          {/* Instagram CTA */}
          <div className="mt-8 pt-6 border-t border-[#D1C7C0]">
            <h4 className="text-xl font-semibold text-[#8C6B72] mb-3">Conecte-se e Ganhe Mais!</h4>
            <p className="text-gray-700 mb-2">
              Somos apaixonados por casamentos e, há mais de 10 anos, a <span className="font-semibold text-[#8C6B72]">Buttterfly Cerimonial e Eventos</span> é reconhecida por transformar sonhos em realidade com elegância e atenção a cada detalhe.
            </p>
            <p className="text-gray-700 mb-4">
              Siga nosso perfil no Instagram <a href={instagramProfileLink} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-[#8C6B72]">@butterflycerimonialeeventos</a> e, como um presente de boas-vindas, ganhe direito a <strong>3 respostas</strong> sobre o planejamento do seu grande dia!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                href={instagramProfileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full sm:w-auto"
                aria-label="Seguir Buttterfly Cerimonial e Eventos no Instagram"
                >
                <i className="fab fa-instagram mr-2 text-lg"></i>Seguir no Instagram
                </a>
                <a
                href={`https://wa.me/${whatsappNumber}?text=${instagramQuestionsMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full sm:w-auto"
                aria-label="Enviar perguntas bônus por WhatsApp após seguir no Instagram"
                >
                <i className="fab fa-whatsapp mr-2 text-xl"></i>Receber Bônus (3 Perguntas)
                </a>
            </div>
          </div>
        </div>

        {/* Buttterfly Differentials Section */}
        <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-[#D1C7C0]">
          <h3 className="text-2xl font-semibold text-[#8C6B72] mb-4">Diferenciais Buttterfly Cerimonial e Eventos:</h3>
          <div className="text-gray-700 text-left sm:text-center space-y-3">
            <p>
              Nossa assessoria completa vai além, <strong className="text-[#6A5256]">incluindo em nossos pacotes</strong>:
            </p>
            <ul className="list-disc list-inside pl-4 sm:pl-0 sm:list-none space-y-1">
              <li><i className="fas fa-check-circle mr-2 text-[#8C6B72]"></i>Serviços de RSVP (Ativo e Receptivo).</li>
              <li><i className="fas fa-check-circle mr-2 text-[#8C6B72]"></i>Site dos Noivos personalizado e gestão da Lista de Presentes.</li>
            </ul>
            <p>
              Também oferecemos a criação de toda a <strong className="text-[#6A5256]">Arte Digital</strong> para seu evento, agregando um toque único e sofisticado.
            </p>
            <p>
              E o mais importante: garantimos <strong className="text-[#6A5256]">exclusividade total</strong>, dedicando-nos a um único evento por data para que seu dia seja impecável.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600"> 
          &copy; {new Date().getFullYear()} Quanto Custa Casar?
        </p>
        <p className="text-sm text-[#6A5256] font-semibold"> 
          Uma ferramenta da Buttterfly Cerimonial e Eventos.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Lembre-se: os custos são estimativas e podem variar. Use esta calculadora como um guia inicial.
          <br />
          Para uma assessoria completa e personalizada, entre em contato conosco.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
