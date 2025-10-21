import { useState, useEffect } from "react";
import "./App.css";

const questions = [
  {
    question: "O que é o MAB?",
    options: [
      "Um grupo que defende empresas de barragens",
      "Um movimento que luta pelos direitos das pessoas atingidas por barragens",
      "Uma empresa",
      "Um órgão do governo"
    ],
    answer: 1
  },
  {
    question: "Qual aspecto cultural é ressaltado pelos estudos sobre a Lagoa da Conceição?",
    options: [
      "A lagoa é apenas um ponto turístico",
      "Ela tem valor histórico, simbólico e cultural para a comunidade local",
      "É uma área de interesse exclusivamente econômico",
      "É território de uso restrito à CASAN"
    ],
    answer: 1
  },
  {
    question: "O que o MAB defende sobre a água e a energia?",
    options: [
      "Que são produtos para vender",
      "Que são mercadorias valiosas",
      "Que são direitos de todos, não mercadorias",
      "Que devem ser controladas só por empresas"
    ],
    answer: 2
  },
  {
    question: "O que significa 'privatização da água e saneamento'?",
    options: [
      "Tornar os serviços públicos gratuitos para todos",
      "Vender os serviços de água e esgoto para empresas privadas",
      "Melhorar a qualidade da água sem custos adicionais",
      "Criar novas fontes de água potável"
    ],
    answer: 1
  },
  {
    question: "Qual é um dos principais riscos da privatização desses serviços?",
    options: [
      "Aumento da qualidade da água",
      "Redução das tarifas para a população",
      "Exclusão de comunidades mais pobres do acesso à água",
      "Melhora na eficiência do tratamento de esgoto"
    ],
    answer: 2
  },
  {
    question: "O que o relatório técnico do SENGE-SC destacou sobre o rompimento?",
    options: [
      "Foi um evento natural inevitável",
      "Resultou de falhas estruturais e ausência de manutenção preventiva",
      "Causado por sabotagem externa",
      "Sem impacto ambiental relevante"
    ],
    answer: 1
  },
  {
    question: "Quem são as principais vítimas da privatização da água?",
    options: [
      "Indústrias e grandes empresas",
      "Comunidades periféricas e populações vulneráveis",
      "Governos e políticos",
      "Organizações não governamentais"
    ],
    answer: 1
  },
  {
    question: "Quem faz parte do MAB?",
    options: [
      "Só engenheiros e políticos",
      "Famílias ribeirinhas, agricultores e moradores de comunidades atingidas",
      "Somente moradores de grandes cidades",
      "Apenas pescadores"
    ],
    answer: 1
  },
  {
    question: "O que é a Lagoa de Evapoinfiltração (LEI)?",
    options: [
      "Uma lagoa natural utilizada para lazer",
      "Uma estrutura para tratamento e disposição final de esgoto doméstico",
      "Um reservatório de água potável",
      "Uma área de pesca artesanal"
    ],
    answer: 1
  },
  {
    question: "O que causou o desastre na Lagoa da Conceição em 2021?",
    options: [
      "Muita chuva e tempestades",
      "Um rompimento na estrutura da CASAN que guardava esgoto tratado",
      "Aumento do turismo",
      "O vento forte"
    ],
    answer: 1
  },
  {
    question: "O que aconteceu com a lagoa depois do rompimento?",
    options: [
      "A água ficou mais limpa",
      "Liberação de esgoto, proliferação de algas e poluição crônica",
      "Peixes voltaram em maior número",
      "Nada mudou"
    ],
    answer: 1
  },
  {
    question: "Por que o desastre não foi natural, segundo os pesquisadores?",
    options: [
      "Porque foi culpa da chuva",
      "Porque foi causado por erro humano e descaso ambiental",
      "Porque foi um terremoto",
      "Porque foi no verão"
    ],
    answer: 1
  },
  {
    question: "O que foi encontrado na água da lagoa depois do rompimento?",
    options: [
      "Água limpa e pura",
      "Resíduos, microplásticos e sujeiras do esgoto",
      "Somente areia",
      "Peixes coloridos"
    ],
    answer: 1
  },
  {
    question: "O que disseram os engenheiros do SENGE-SC sobre o acidente?",
    options: [
      "Foi algo natural",
      "Foi falta de manutenção preventiva e cuidado na estrutura",
      "Foi uma explosão de gás",
      "Não teve impacto"
    ],
    answer: 1
  },
  {
    question: "Após o rompimento, o que foi feito para conter os efluentes liberados?",
    options: [
      "Nada foi feito; os efluentes se dispersaram livremente",
      "Foram criadas áreas artificiais para reter os efluentes e evitar maior contaminação",
      "Os efluentes foram bombeados para outras regiões",
      "A água da lagoa foi filtrada e tratada imediatamente"
    ],
    answer: 1
  },
  {
    question: "Qual foi o impacto ambiental das áreas artificiais criadas após o rompimento?",
    options: [
      "Aumento da biodiversidade e recuperação da vegetação local",
      "Diminuição da diversidade de espécies e alteração da vegetação de restinga",
      "Melhora na qualidade da água da lagoa",
      "Nenhum impacto ambiental foi observado"
    ],
    answer: 1
  },
  {
    question: "Quem mais sofreu com o desastre da Lagoa da Conceição?",
    options: [
      "Os turistas",
      "As famílias e pescadores que vivem da lagoa",
      "As empresas",
      "Os hotéis"
    ],
    answer: 1
  },
  {
    question: "A Lagoa da Conceição é importante só por causa do turismo?",
    options: [
      "Sim, só pelo turismo",
      "Não! É parte da história e da cultura das pessoas da região",
      "É apenas um local para esportes",
      "É uma área de empresas"
    ],
    answer: 1
  },
  {
    question: "Quantas famílias perderam casas e bens com o rompimento em Monte Cristo (2023)?",
    options: [
      "50 famílias",
      "200 famílias",
      "1.000 famílias",
      "Nenhuma família"
    ],
    answer: 1
  }
];

export default function QuizGame() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleAnswer(null);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(20);
    setSelected(null);
  }, [current]);

  function handleAnswer(index) {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      const next = current + 1;
      if (next < questions.length) {
        setCurrent(next);
      } else {
        setShowResult(true);
      }
    }, 1000);
  }

  if (showResult) {
    return (
      <div className="quiz-container result">
        <h1>Fim do Quiz!</h1>
        <p>Você acertou {score} de {questions.length} perguntas.</p>
        <button className="default" onClick={() => {
          setCurrent(0);
          setScore(0);
          setShowResult(false);
          setTimeLeft(20);
        }}>Tentar novamente</button>
      </div>
    );
  }

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <h2>Pergunta {current + 1}</h2>

      {/* 🔵 Barra de Progresso */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="timer">Tempo: {timeLeft}s</div>
      <p>{q.question}</p>

      <div className="options-grid">
        {q.options.map((opt, i) => {
          let className = "default";
          if (selected !== null) {
            if (i === q.answer) className = "correct";
            else if (i === selected) className = "wrong";
            else className = "disabled";
          }
          return (
            <button
              key={i}
              className={className}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}