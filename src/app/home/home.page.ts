import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedOption: string = '';
  valorDasVendas: string = '';
  qtdNotificacao: number = 0;

  constructor() {


  }

  programarVendas() {
    console.log(this.valorDasVendas);    
  }

  startNotificacao() {

    const selectedNotifications: any[] = [];
    const kiwifyNotifications: any[] = [{
      
      title: 'Venda Aprovada!',
      body: `Valor: R$ ${this.valorDasVendas}`,
      largeIcon: 'kiwify',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 2) },          
      sound: 'venda.wav', 
    },
    {
      title: 'Pix Gerado!',
      body: `Valor: R$ ${this.valorDasVendas}`,
      largeIcon: 'kiwify',
      id: 2,
      schedule: { at: new Date(Date.now() + 1000 * 2) },          
      sound: 'venda.wav',
    }];

    switch(this.selectedOption) {

      case 'nubank':
        selectedNotifications.push();
      break;

      case 'hotmart':
        selectedNotifications.push();
      break;

      case 'eduzz':
        selectedNotifications.push();
      break;

      case 'monetizze':
        selectedNotifications.push();
      break;

      case 'kiwify':
        selectedNotifications.push(kiwifyNotifications);
      break;

      default:
        console.log("Opção inválida. Por favor, selecione uma opção válida.");
      return;
    }

    if (selectedNotifications.length > 0) {
      if(this.qtdNotificacao > 0){
        for(let i = 0; i < this.qtdNotificacao; i++){
          this.scheduleSelectedNotifications(selectedNotifications);
        }
      } else {
        console.log("Quantidade de notificações inválida.");
      }
    } else {
      console.log("Nenhuma notificação encontrada para a opção selecionada.");
    }

  }

  async scheduleSelectedNotifications(selectedNotifications: any[]) {
    await LocalNotifications.schedule({
      notifications: selectedNotifications,
    });
  }
}
