console.log('Memo esta despierto');
const Discord = require('discord.js');
const bot = new Discord.Client();const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

bot.on('message', (message) => {
	if (message.content == '!buenas') {
		message.channel.sendMessage ('Buenos dias! uwu');
	}
	
	if (message.content == '!buenas2') {
		message.channel.sendMessage ('Buenos noches! uwu');
	}

	if (message.content == '!meow') {
		message.channel.sendMessage ('**Proximamente lista de comandos**');
	}
	
	if (message.content == 'O no memo?') {
		message.channel.sendMessage ('Meow :3');
	}
	
	if (message.content == 'Sad') {
		message.channel.sendMessage ('Meow 3:');
	}
	
	if (message.content == '!leand') {
		message.channel.sendMessage ('Ninini bajate del ropero >w<');
	}
	
	if (message.content == '!memo') {
		message.channel.sendMessage ('Meow?');
	}

	if (message.content == '!quien') {
		message.channel.sendMessage ('Quien eeees?');
	}

	if (message.content == '!lanzo') {
		message.channel.sendMessage ('Che ustedes creen en la telepatia?');
	}

	if (message.content == '!lanzo2') {
		message.channel.sendMessage ('Nooo man a mi me paso lo mismo el otro dia');
	}
	
	if (message.content == '!lanzo3') {
		message.channel.sendMessage ('¿Cual es tu numero de alma?');
	}

	if (message.content == '!draven') {
		message.channel.sendMessage ('Draaaaaaaveeeen');
	}

	if (message.content == '!armaca') {
		message.channel.sendMessage ('Lo que pasa es que yo farmeo campeones');
	}

	if (message.content == '!armaca2') {
		message.channel.sendMessage ('Bigote de leche');
	}

	if (message.content == '!armaca3') {
		message.channel.sendMessage ('A la veigar');
	}

	if (message.content == '!zold') {
		message.channel.sendMessage ('CALLEN ESE MALDITO GATO');
	}

	if (message.content == '!mica') {
		message.channel.sendMessage ('Son re gedes u.u');
	}
	
	if (message.content == '!mica2') {
		message.channel.sendMessage ('Yo llevo el smirnoff :3');
	}
		
	if (message.content == '!polli') {
		message.channel.sendMessage ('Santiiii, atendé el telefono, ahhh y traeme una coca, ahh para, tambien haceme las misiones del fortnite');
	}
	
	if (message.content == 'Vamonos tesoro, no te juntes con esta chusma!') {
		message.channel.sendMessage ('Sii mami, chusma! chusma! prrr');
	}
			
	if (message.content == 'Milhouse!') {
		message.channel.sendMessage ('Queeeeee?');
	}
				
	if (message.content == 'Dile a bart que venga aqui!') {
		message.channel.sendMessage ('Creeeeo que esta con neeelzoon!');
	}
	
	if (message.content == '!colo') {
		message.channel.sendMessage ('Quieeen es? Otra de susmentiras? Bueno pase oka perdon');
	}
		
	if (message.content == '!pot') {
		message.channel.sendMessage ('Me voy a pegar un tiro, después vengo');
	}
		
	if (message.content == 'Sabes algo de esto memo?') {
		message.channel.sendMessage ('No c, weno si c pero no te wa decir');
	}
});
bot.login('NDg0NjI1MTk4NzU1MjE3NDA5.DnsH2A.YjhMqZ_sy-1qYGLTtrJ9lglv_h4');
