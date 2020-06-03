export default function criarOuvinteDoTeclado(){
			const estado = {
				observadores: []
			}
			function subscrever(funcaoObservadora){
				estado.observadores.push(funcaoObservadora)
			}
			function notificarTodos(comando){
				console.log(`Notificando ${estado.observadores.length} observadores`)
				for (const funcaoObservadora of estado.observadores){
					funcaoObservadora(comando)
				}
			}
			document.addEventListener('keydown', lidarComKeydown)
			//       adicionarOuvinteDeEvento/Observador
			function lidarComKeydown(evento){
				const keyPressionada = evento.key
				const comando = {
					idJogador : 'jogador1',
					keyPressionada	
				}		
				notificarTodos(comando)
				//jogo.moverJogador(comando)
			}
			return {
				subscrever
			}
		}