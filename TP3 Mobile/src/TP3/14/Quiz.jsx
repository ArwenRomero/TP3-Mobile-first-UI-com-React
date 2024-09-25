import React, { useState } from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, Box, useMediaQuery, useTheme, Fade } from '@mui/material';
import { styled } from '@mui/system';
import perguntas from './perguntas';

const ContainerQuiz = styled(Container)(({ theme }) => ({
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
}));

const CartaoPergunta = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  borderRadius: '15px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.12)',
  },
}));

const Justificativa = styled(Box)(({ theme, correta }) => ({
  backgroundColor: correta ? '#8bc34a' : '#f44336',
  padding: '10px',
  borderRadius: '8px',
  color: '#fff',
  marginTop: theme.spacing(2),
}));

const PontuacaoFinal = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
}));

const PontuacaoTexto = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.8rem',
  color: '#1976d2',
}));

const BotaoReiniciar = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
}));

const Quiz = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [mostrarJustificativa, setMostrarJustificativa] = useState(false);
  const [finalizado, setFinalizado] = useState(false);
  const [respostaCorreta, setRespostaCorreta] = useState(false);

  const tema = useTheme();
  const mobileView = useMediaQuery('(max-width:600px)');

  const handleSelecionarOpcao = (opcao) => {
    setRespostaSelecionada(opcao);
  };

  const confirmarResposta = () => {
    const perguntaAtual = perguntas[indiceAtual];
    const isCorrect = respostaSelecionada === perguntaAtual.respostaCorreta;
    setRespostaCorreta(isCorrect);
    if (isCorrect) {
      setPontuacao(pontuacao + 1);
    }
    setMostrarJustificativa(true);
  };

  const proximaPergunta = () => {
    setMostrarJustificativa(false);
    setRespostaSelecionada(null);
    if (indiceAtual === perguntas.length - 1) {
      setFinalizado(true);
    } else {
      setIndiceAtual(indiceAtual + 1);
    }
  };

  const reiniciarQuiz = () => {
    setIndiceAtual(0);
    setPontuacao(0);
    setFinalizado(false);
    setMostrarJustificativa(false);
    setRespostaCorreta(false);
  };

  return (
    <ContainerQuiz maxWidth="md">
      <Typography variant="h5" gutterBottom>
        Pergunta {indiceAtual + 1}/{perguntas.length}
      </Typography>
      <CartaoPergunta>
        <CardContent>
          <Typography variant="h6" paragraph>
            {perguntas[indiceAtual].enunciado}
          </Typography>
          <Grid container direction={mobileView ? 'column' : 'row'}>
            {perguntas[indiceAtual].opcoes.map((opcao, index) => (
              <Grid item xs={mobileView ? 12 : 6} key={index}>
                <Button
                  variant="outlined"
                  onClick={() => handleSelecionarOpcao(opcao)}
                  style={{
                    margin: '10px 0',
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: respostaSelecionada === opcao ? '#1976d2' : '#68b7f7',
                    color: '#fff',
                  }}
                >
                  {opcao}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={confirmarResposta}
            disabled={respostaSelecionada === null || mostrarJustificativa}
            style={{ marginTop: '20px' }}
          >
            Confirmar
          </Button>
          {mostrarJustificativa && (
            <Fade in={mostrarJustificativa}>
              <Justificativa correta={respostaCorreta}>
                <Typography>
                  {respostaCorreta
                    ? 'Correto! ' + perguntas[indiceAtual].justificativa
                    : 'Incorreto! ' + perguntas[indiceAtual].justificativa}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={proximaPergunta}
                  style={{ marginTop: '10px' }}
                >
                  Próxima
                </Button>
              </Justificativa>
            </Fade>
          )}
        </CardContent>
      </CartaoPergunta>
      {finalizado && (
        <PontuacaoFinal>
          <PontuacaoTexto>
            Pontuação Final: {pontuacao}/{perguntas.length}
          </PontuacaoTexto>
          <BotaoReiniciar
            variant="contained"
            onClick={reiniciarQuiz}
          >
            Reiniciar
          </BotaoReiniciar>
        </PontuacaoFinal>
      )}
    </ContainerQuiz>
  );
};

export default Quiz;
